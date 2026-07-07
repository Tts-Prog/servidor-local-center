# Guia Prático - UF 3.2 (Aula 7)

## CI/CD: O Cão de Guarda da Performance 🤖

- Objetivo: Criar um Pipeline no GitHub Actions que executa automaticamente o nosso ataque do k6 dentro do Docker sempre que fizermos um git push. O pipeline deve falhar e bloquear o código se a API estiver lenta.

### Introdução: O Problema do Elemento Humano

Vocês construíram testes de carga incríveis nas últimas aulas. Mas há um problema: no dia a dia acelerado de uma empresa, os programadores esquecem-se de correr os testes antes de enviar o código para o ar.

Para resolver isto, os Engenheiros DevOps criaram o CI/CD (Integração Contínua). Vamos programar um robô no GitHub. Sempre que enviarmos código, este robô vai levantar o nosso Docker e disparar o k6. Se o teste reprovar, o alarme soa e o código é bloqueado.

### Passo 1: Preparar os Thresholds (Quality Gates)

Para o GitHub saber se o teste "passou" ou "falhou", o k6 tem de lhe dar uma nota clara. Abram o vosso script ataque-servicos.js e adicionem a secção thresholds (limites toleráveis) nas options.

```javascript
export const options = {
  vus: 30,
  duration: "30s", // Reduzimos para 30s para o pipeline não demorar muito
  thresholds: {
    // O teste FALHA se a taxa de erro for superior a 1%
    http_req_failed: ["rate<0.01"],
    // O teste FALHA se 95% dos pedidos demorarem mais de 500ms
    http_req_duration: ["p(95)<500"],
  },
};
```

### Passo 2: O Ficheiro de Ordem (YAML)

O GitHub procura ficheiros YAML numa pasta escondida muito específica para saber o que tem de fazer.

Na raiz do vosso projeto (servidor-local-center), criem uma pasta chamada exatemente .github.

Dentro dessa pasta, criem outra chamada workflows.

Lá dentro, criem um ficheiro chamado performance.yml.

(A estrutura final tem de ser: .github/workflows/performance.yml)

### Passo 3: Escrever o Pipeline de CI

Abram o ficheiro performance.yml e colem a seguinte "receita" para o robô do GitHub:

```yaml
name: Testes de Performance (k6)

# 1. O Gatilho: Quando é que este robô acorda?
on:
  push:
    branches: ["main", "master"] # Acorda sempre que houver push para a branch principal

jobs:
  atacar-api:
    # 2. A Máquina: Onde é que o robô vai trabalhar? (Num servidor Ubuntu limpo)
    runs-on: ubuntu-latest

    steps:
      # Passo A: Descarregar o nosso código para a máquina do GitHub
      - name: 📥 Clonar o Repositório
        uses: actions/checkout@v4

      # Passo B: Levantar a API e a Base de Dados (exatamente como fazemos no nosso PC)
      - name: 🐳 Levantar Infraestrutura (Docker Compose)
        run: docker compose up -d db api

      # Passo C: Dar 10 segundos para o PostgreSQL inicializar completamente
      - name: ⏳ Esperar pela Base de Dados
        run: sleep 10

      # Passo D: Disparar o k6 por dentro da rede Docker!
      - name: 🚀 Executar Ataque k6
        run: docker compose run --rm k6_attacker run /scripts/ataque-servicos.js
```

### Passo 4: O Teste de Fogo

Temos a armadilha montada. Vamos testá-la.

1. No vosso terminal local, adicionem as mudanças e enviem para o GitHub:

```bash
git add .
git commit -m "feat: Adiciona pipeline de testes de performance"
git push origin main
```

2. Abram rapidamente o vosso repositório no site do GitHub.

3. Cliquem no separador "Actions" no menu do topo.

4. Vão ver uma luz amarela a piscar. O vosso servidor Ubuntu gratuito acabou de nascer na nuvem e está a executar o vosso ataque neste exato segundo!

### Passo 5: A Autópsia do Pipeline

Cliquem na Action que está a correr para entrarem no terminal do GitHub.
Se a vossa API responder rápido (menos de 500ms) e sem erros, a Action vai ficar Verde (Passed). Se o k6 detetar que os thresholds foram violados, ele força um erro e a Action fica Vermelha (Failed).

### Exercício Final: Provocar a Falha do Pipeline

Não podemos confiar num alarme que nunca tocou. Vamos garantir que o GitHub consegue bloquear mau código.

1. Sabotar a API:
   Vão ao código da vossa rota /api/servicos e introduzam um atraso artificial (latência propositada) antes de devolver os dados, simulando um código mal otimizado:

```javascript
// Adicionar isto no início da rota para travar o código por 1 segundo (1000ms)
await new Promise((resolve) => setTimeout(resolve, 1000));
```

2. O Ataque:
   Façam um novo git add, git commit -m "fix: adiciona lentidao propositada" e git push. Vão ao separador Actions no GitHub.

3. Entreguem o diagnóstico:
   O que aconteceu no final da execução no separador Actions? O pipeline conseguiu detetar a vossa sabotagem? Que linha específica do relatório do k6 no terminal do GitHub fez com que o sistema bloqueasse a versão e ficasse vermelho?
   Resposta: [Preencher]
