# Guia Prático - UF 3.2 (Aula 3)

## Testes de Performance I: A Arte de Quebrar Servidores 💥

- Objetivo: Abandonar os testes manuais e utilizar o k6 para simular o comportamento de dezenas de utilizadores em simultâneo. Vamos descobrir exatamente qual é o ponto de rutura da vossa API no Render.

## Introdução: A Ilusão da "Velocidade Humana"

- No exercício anterior, tentámos sobrecarregar o servidor fazendo cliques manuais rápidos. O resultado? A API nem sequer "piscou". Para o processador de um servidor, 10 pedidos por segundo é praticamente repouso absoluto.
- Para testarmos a resiliência de um sistema real, precisamos de um exército automatizado. Hoje, deixam de ser utilizadores e passam a ser Engenheiros de Performance.

## Passo 1: Ligar os Radares (O Fim da Cegueira)

- Se vamos atacar o servidor, precisamos de ver o ataque a acontecer nos logs em tempo real. Por defeito, a nossa API processa os pedidos de forma silenciosa. Vamos dar-lhe uma "voz".

- 1. Abram o projeto do vosso Backend (servidor-local-center) no VS Code.

- 2. No terminal, instalem a biblioteca de logs morgan:

```bash
npm install morgan
```

- 3. Injetem o radar no vosso ficheiro principal (server.js ou app.js):

```javascript
const express = require("express");
const morgan = require("morgan"); // 1. Importar o morgan
const app = express();

// 2. Ativar o radar! Isto vai imprimir todos os pedidos HTTP no terminal
app.use(morgan("dev"));
```

- 4. Façam git push para atualizar a API no Render. A partir de agora, o separador "Logs" do Render vai mostrar tudo em direto.

## Passo 2: O Armamento (Instalar o k6)

- O k6 é a ferramenta de testes de carga mais moderna e rápida do mercado. É escrita na linguagem Go, mas os scripts que vamos criar usam JavaScript.

- Como instalar:

Se usam Windows (via PowerShell):

```powershell
winget install k6
```

_(Nota: Após a instalação, fechem e reabram o VS Code para o terminal reconhecer o comando)._

Se usam macOS (via Terminal):

```bash
brew install k6
```

## Passo 3: O Script de Ataque ao /login

- Porquê atacar o login e não o registo? O login exige que o servidor calcule a encriptação da password (bcrypt), o que vai esgotar rapidamente o CPU do nosso plano gratuito no Render.
- Na raiz do vosso projeto, criem uma pasta chamada testes-performance.
- Lá dentro, criem um ficheiro chamado stress-login.js.

- Colem e analisem o seguinte código:

```javascript
import http from "k6/http";
import { check, sleep } from "k6";

// 1. A Estratégia de Carga (Options)
export const options = {
  vus: 50, // 50 Utilizadores Virtuais (VUs) a atacar ao mesmo tempo
  duration: "30s", // Manter o ataque contínuo durante 30 segundos
};

// 2. A Ação do Utilizador (O que cada um dos 50 VUs vai fazer)
export default function () {
  // ⚠️ SUBSTITUAM pelo URL real da vossa API no Render
  const url = "https://[VOSSA-API].onrender.com/api/login";

  // Preparar os dados (Usem um email e password que já existam na vossa BD)
  const payload = JSON.stringify({
    email: "admin@marketplace.com",
    password: "password123",
  });

  const params = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  // Disparar o Pedido
  const res = http.post(url, payload, params);

  // 3. Quality Gates: O Servidor Aguentou?
  check(res, {
    "Login com Sucesso (Status 200)?": (r) => r.status === 200,
    "Foi rápido? (Tempo < 500ms)?": (r) => r.timings.duration < 500,
    "CPU esgotado? (Erro 502/504)?": (r) => r.status >= 500,
  });

  // Pausa de 1 segundo para simular o tempo de um humano a ler o ecrã
  sleep(1);
}
```

## Passo 4: O Momento do Impacto (Execução)

- Chegou a hora. Para a melhor experiência:
- Abram o painel do Render num lado do ecrã (separador Metrics ou Logs).
- Abram o vosso terminal local no outro lado do ecrã.

Executem o ataque:

```bash
k6 run teste-carga.js
```

- Como ler a Autópsia (Resultados no Terminal):
- Quando os 30 segundos terminarem, o k6 vai gerar um relatório. Foquem-se nestas 3 métricas:
- http_reqs: O número total de logins que o vosso exército tentou fazer.
- http_req_duration -> p(95): O tempo de resposta. Significa que 95% dos pedidos demoraram X milissegundos. Comparem isto com o vosso teste manual da Aula 2.
- http_req_failed: A vossa taxa de erro. Se não estiver a 0.00%, significa que o Render ou a vossa Base de Dados cedeu à pressão e começou a rejeitar tráfego.
