# Guia Prático - UF 3.2 (Aula 6)

## Testes de Arquitetura II: Engenharia do Caos 🌩️

Objetivo: Testar a tolerância a falhas da nossa API. O que acontece quando o servidor da Base de Dados perde a energia a meio de um pico de tráfego? A nossa API sobrevive ou desliga-se?

## Introdução: A Lei de Murphy na Cloud

No mundo real, cabos de rede falham, servidores reiniciam sozinhos e as bases de dados bloqueiam. A verdadeira escalabilidade não é apenas ser rápido; é saber recuperar das falhas. Em vez de esperar pelo azar, vamos usar Engenharia do Caos (Chaos Engineering) para o provocar.

### Passo 1: Preparar a Maratona

Na vossa pasta testes-performance, abram o ficheiro do k6 (ataque-servicos.js). Alterem a duração do ataque para dar tempo de "cortarmos os fios" a meio:

```javascript
export const options = {
  vus: 30,
  duration: "2m", // Alterado para 2 minutos
};
```

### Passo 2: O Laboratório do Caos (Preparação)

Vamos colocar a infraestrutura a correr.

1. Levantem a base de dados e a API:

```bash
docker compose up -d db api
```

2. Abram um segundo terminal para monitorizar a API em tempo real:

```bash
docker compose logs -f api
```

### Passo 3: A Execução (O Apagão Manual)

1. Abram um terceiro terminal e lancem o ataque do k6:

```bash
docker compose run --rm k6_attack run /app/src/script/teste-carga-login.js
```

Deixem correr durante 30 segundos (os logs da API devem mostrar sucesso).

2. 💥 O APAGÃO: Voltem ao primeiro terminal e desliguem violentamente a base de dados:

### Passo 4: A Autópsia do Caos

Observem o terminal onde os logs da API estão a correr.

O que aconteceu? A API mostrou um ecrã vermelho gigante e desligou-se?

O k6 começou a mostrar erros 500 ou erros de conexão?

### Passo 5: A Cura (Desenvolver Resiliência com pg)

Uma API bem construída não morre quando a Base de Dados cai. Ela tem de conseguir devolver um erro de manutenção e recuperar assim que a BD voltar. A biblioteca pg precisa de duas defesas críticas.

#### O Desafio de Código (Para os alunos implementarem):

Abram o código fonte da vossa API e garantam que têm estas duas proteções:

##### Defesa 1: Proteger a Rota (try / catch)

Na vossa rota que lista os serviços, nunca façam chamadas à BD sem um paraquedas.

```javascript
app.get("/api/servicos", async (req, res) => {
  try {
    // Tentamos fazer a query
    const result = await pool.query("SELECT * FROM servicos");
    res.json(result.rows);
  } catch (error) {
    // 1. Log silencioso para nós sabermos do problema
    console.error("🔥 Falha de Leitura: BD Inacessível!");

    // 2. Erro elegante para o cliente (503 Service Unavailable)
    res.status(503).json({
      erro: "Serviço temporariamente indisponível. Tente novamente em breve.",
    });
  }
});
```

## Defesa 2: Proteger o Evento de Fundo (Obrigatório no pg)

Se a BD cair, as conexões adormecidas no Pool do Node.js vão emitir um erro global. Se não o apanharem, o servidor desliga-se completamente. Adicionem isto logo a seguir à criação do vosso new Pool():

```javascript
pool.on("error", (err, client) => {
  console.error(
    "⚠️ Erro de fundo no Pool do PostgreSQL. Tentando recuperar...",
    err.message,
  );
  // Não fazemos process.exit(-1) para a API continuar viva!
});
```

# Exercício Final: Relatório de Tolerância a Falhas

Apliquem as duas defesas no código, façam docker compose up -d --build --force-recreate e repitam o teste do apagão.

Entreguem o diagnóstico:

1. O Que Aconteceu no 1º Teste (Sem Defesa):
   O contentor da API desligou-se ou o utilizador viu algum erro no navegador?
   Resposta: [Preencher]

2. A Cura (Após a proteção):
   Durante o segundo apagão, a API continuou de pé? Qual foi a resposta e o Status Code que o k6 recebeu?
   Resposta: [Preencher]

3. O Renascimento:
   Ainda com o ataque do k6 a decorrer na marca do 1 minuto e 30 segundos, escrevam docker compose start db no terminal. A API recuperou sozinha e voltou a dar Status 200 ao k6?
   Resposta: [Preencher]
