# Missão Final: Operação "Black Friday"

## O Cenário:

A vossa equipa foi contratada como consultora DevOps para a startup "Marketplace de Serviços". Amanhã à noite, a plataforma vai ser destacada num telejornal de grande audiência em Cabo Verde. O CEO espera um pico de --milhares-- de utilizadores simultâneos.

O vosso trabalho é ---auditar, testar, quebrar e automatizar-- as defesas da plataforma antes que ela vá para o ar. Se a plataforma cair amanhã, a startup vai à --falência.--

## FASE 1: A Auditoria Interna (Docker + k6)

Antes de culparmos a internet, temos de provar que a arquitetura aguenta a pressão num ambiente isolado.

### Objetivos da Equipa:

Garantir que o docker-compose.yml tem a API, a Base de Dados (PostgreSQL) e o k6 configurados corretamente na mesma rede.

Criar um script k6 chamado auditoria-final.js.

O script deve simular 60 Utilizadores Virtuais (VUs) durante 1 minuto.

O script tem de fazer login (setup()), extrair o JWT e atacar uma rota protegida (ex: /api/servicos).

Ligar o Web Dashboard do k6 para observar o teste.

### Critério de Sucesso (O que devem anotar no relatório):

Executem o teste via Docker (docker compose run --rm ...).

Qual foi a percentagem de erros (http_req_failed)? Tem de ser 0%.

Qual foi o tempo p(95)?

### FASE 2: Engenharia do Caos (A Prova de Fogo)

O CEO quer ter a certeza de que um pequeno soluço na Base de Dados não deita o servidor abaixo permanentemente.

### Objetivos da Equipa:

Lancem novamente o teste da Fase 1 (1 minuto de duração).

Aos 20 segundos de teste, desliguem brutalmente a base de dados (docker compose stop db).

Aos 40 segundos de teste, voltem a ligar a base de dados (docker compose start db).

### Critério de Sucesso:

A vossa API tem de possuir as proteções da biblioteca pg e o bloco try/catch. O k6 deve registar erros temporários durante o apagão (Status 503), mas a API tem de recuperar sozinha e voltar a responder com Status 200 nos últimos 20 segundos do teste, sem que o contentor do Node.js vá abaixo.

### FASE 3: O Cão de Guarda (CI/CD Automático)

O código passou nos testes locais e sobreviveu ao caos. Mas precisamos de garantir que nenhum programador júnior estraga a performance no futuro.

### Objetivos da Equipa:

Configurar os Thresholds no vosso script k6: o teste tem de falhar se a taxa de erro passar de 1% ou se o tempo p(95) for maior que 600ms.

Criar a pipeline do GitHub Actions (.github/workflows/auditoria.yml).

O pipeline deve levantar o Docker Compose na nuvem e executar o k6 a cada git push.

Façam o push para o GitHub e observem o separador "Actions".

### Critério de Sucesso:

Tirar um print screen ou enviar o link do vosso repositório mostrando a Action a correr com sucesso (círculo verde), provando que a plataforma está pronta para produção.

## RELATÓRIO DE ENTREGA (Para o CEO)

### Nome da Equipa: [stiven]

1. Resultados da Auditoria Local (Docker):

Total de Pedidos Feitos em 1 minuto: [3481]

Tempo de Resposta p(95): [95.69ms]

Gargalo identificado (CPU, Memória ou BD?): [Preencher]

2. Relatório de Resiliência (Caos):

Quando a BD caiu, a vossa API crashou (saiu do Docker) ou sobreviveu e continuou a dar erro 503 de manutenção?

A API conseguiu recuperar automaticamente quando a BD voltou?
Resposta: [Preencher]

3. Automação CI/CD:

Link para a execução da Action no vosso repositório GitHub (que comprova que o pipeline passou com sucesso):
Link: [Preencher]
