# Guia Prático - UF 3.2 (Aula 5)

## Testes de Arquitetura I: O Laboratório Dockerizado

### Objetivo:

Simular um ambiente de produção completo (Backend + Base de Dados) no vosso computador usando o Docker Compose, e introduzir o k6 dentro da mesma rede virtual para realizar testes de performance "a sangue frio", sem interferência da internet.

### Introdução: Isolamento do Alvo

Até agora, os nossos testes ao Render mediam duas coisas: a velocidade da vossa API e a velocidade da vossa internet.

Se quisermos descobrir o desempenho puro do vosso código, precisamos de eliminar o "intermediário" (a rede externa). Para isso, vamos construir uma caixa-forte no vosso computador. O atacante (k6) e o alvo (API) vão estar fechados na mesma sala.

## Passo 1: Preparar o Laboratório (docker-compose.yml)

Vamos reaproveitar os conhecimentos da UF 3.1.

Abram o projeto do vosso Backend.

Na raiz do projeto, garantam que têm um ficheiro docker-compose.yml. Vamos adicionar um novo "ator" a este guião.

```yaml
version: "3.8"

services:
  # 1. A Base de Dados (O Coração)
  db:
    image: postgres:15
    environment:
      POSTGRES_USER: root
      POSTGRES_PASSWORD: rootpassword
      POSTGRES_DB: marketplace
    ports:
      - "5432:5432"

  # 2. A API (O Alvo)
  api:
    build: . # Constrói a vossa API a partir do Dockerfile
    environment:
      - DATABASE_URL=postgresql://root:rootpassword@db:5432/marketplace
      - PORT=8080
    ports:
      - "8080:8080"
    depends_on:
      - db

  # 3. O k6 (O Atacante que vive dentro do Docker)
  k6_attacker:
    image: grafana/k6:latest
    # Partilha a pasta atual com o contentor para ele ler os scripts
    volumes:
      - ./testes-performance:/scripts
    # O contentor só arranca quando a API estiver pronta
    depends_on:
      - api
    # Este comando fica em espera. Vamos executá-lo manualmente.
    command: ["sleep", "infinity"]
```

## Passo 2: Levantar as Defesas

Vamos iniciar a nossa infraestrutura.
No terminal, executem:

```bash
docker compose up -d db api
```

(O vosso PostgreSQL e a vossa API estão agora a correr em segundo plano).

## Passo 3: O Script de Ataque "Interno"

Atenção: O atacante (k6) vai atacar por dentro da rede do Docker, por isso não usamos localhost nem o URL do Render.

Na pasta testes-performance, editem o vosso stress-login.js.

Alterem apenas o URL para o nome do serviço no Docker:

```javascript
// Antes (Render): const url = 'https://[API].onrender.com/api/login';
// AGORA (Docker):
const url = "http://api:8080/api/login";
```

## Passo 4: O Truque do Dashboard no Docker

Na Aula 4 ativámos o Web Dashboard no terminal local. Mas agora, o k6 vai correr fechado dentro do Docker. Para conseguirmos ver os gráficos no nosso navegador, temos de fazer um "furo" no contentor para a porta 5665 sair para o nosso computador.

Abram novamente o vosso docker-compose.yml.

Adicionem as ports e o environment ao serviço do k6_attacker para que ele fique exatamente assim:

```yaml
k6_attacker:
  image: grafana/k6:latest
  volumes:
    - ./testes-performance:/scripts
  depends_on:
    - api
  ports:
    - "5665:5665" # 1. O "furo" na parede do contentor
  environment:
    - K6_WEB_DASHBOARD=true # 2. Ligar o dashboard
    - K6_WEB_DASHBOARD_HOST=0.0.0.0 # 3. Permitir que o gráfico seja visto fora do Docker
```

1. Reconstruam a rede para aplicar a nova configuração:

```bash
docker compose up -d db api
```

## Passo 5: Libertar o Atacante e Ler os Radares

Vamos executar o ataque. No terminal, corram:

```bash
docker compose run --rm --service-ports k6_attacker run /scripts/teste-carga-login.js
```

(Nota: Usamos --service-ports para o Docker respeitar a porta 5665 que acabámos de abrir).

Assim que o ataque começar, abram o vosso Google Chrome e acedam a: http://127.0.0.1:5665

## Como Ler a Autópsia: As 3 Métricas de Ouro

Quando olharem para o Web Dashboard ou para o terminal no final do teste, devem focar-se como verdadeiros Engenheiros DevOps. O que interessa não é a quantidade de dados, mas sim interpretar estas três métricas exatas:

### 1. Latência: HTTP Request Duration -> p(95)

O que significa: O tempo que a API demora a processar e devolver a resposta. O p(95) diz-nos que 95% dos pedidos foram resolvidos naquele tempo ou mais rápido.

Como analisar: Se localmente (sem internet) o p(95) for de 15ms, mas no Render era de 300ms, acabaram de descobrir que o gargalo do vosso sistema não é o vosso código, é a rede/internet! Se mesmo no Docker o tempo disparar para 800ms, o problema está na forma como o vosso Node.js ou Prisma comunica com a Base de Dados.

### 2. Taxa de Sucesso: HTTP Requests Failed (Error Rate)

O que significa: A percentagem de pedidos que a vossa API rejeitou ou não conseguiu processar (Erros 500, timeouts, etc.).

Como analisar: Num ambiente Docker isolado e potente, isto deve ser absolutamente 0.00%. Se não for zero, significa que as ligações da Base de Dados (PostgreSQL) esgotaram, e precisamos de otimizar o código (ex: Connection Pooling) antes de enviar para a Cloud.

### 3. Poder de Fogo: Request Rate (reqs/s)

O que significa: Quantos pedidos por segundo o vosso computador conseguiu devorar em simultâneo.

Como analisar: Observem o gráfico. A linha de reqs/s manteve-se alta e estável durante os 30 segundos, ou começou a cair a meio do teste? Se começou a cair, o vosso CPU local "cansou-se" de calcular as validações da API.
