# Guia Prático - UF 3.2 (Aula 4)

## Testes de Performance II: Infiltração JWT e Dashboards Visuais

Objetivo: Simular um ataque de carga realista a rotas protegidas por Token (JWT) e analisar os gráficos de performance em tempo real utilizando o Web Dashboard do k6.

### Fase 1: O Desafio da Rota Protegida

No mundo real, as rotas que mais forçam a Base de Dados (como criar agendamentos ou listar dezenas de serviços com filtros) exigem um Token de Autenticação (Bearer Token).

Se colocarmos o código de Login dentro da função principal do k6, os nossos 50 Utilizadores Virtuais vão passar o tempo todo a fazer login e a esgotar o CPU do Render, em vez de testarem a rota dos serviços. Precisamos de otimizar a estratégia de ataque.

Para isso, usamos a função setup() do k6. Ela corre apenas uma vez no início, faz o login, rouba o Token e distribui pelas tropas.

### Fase 2: O Script "Sniper"

Na vossa pasta testes-performance, criem um novo ficheiro chamado ataque-servicos.js.

Colem a estrutura abaixo e garantam que adaptam para a estrutura exata da vossa API.

```javascript
import http from "k6/http";
import { check, sleep } from "k6";

// 1. Estratégia de Carga
export const options = {
  vus: 30, // Vamos usar 30 VUs para testar a Base de Dados
  duration: "30s",
};

// 2. SETUP: Missão de Infiltração (Corre apenas 1 vez no início)
export function setup() {
  // ⚠️ ATENÇÃO: Substituam pelo vosso URL
  const loginUrl = "https://[VOSSA-API].onrender.com/api/login";

  const payload = JSON.stringify({
    email: "admin@marketplace.com",
    password: "password123",
  });

  const params = { headers: { "Content-Type": "application/json" } };

  const res = http.post(loginUrl, payload, params);

  // O k6 extrai o token da resposta da API (ajustem se a vossa API enviar o token noutra propriedade)
  return { token: res.json("token") };
}

// 3. O ATAQUE: Corre milhares de vezes para os 30 VUs
export default function (data) {
  // ⚠️ ATENÇÃO: Rota que lista os Serviços (requer JWT)
  const url = "https://[VOSSA-API].onrender.com/api/servicos";

  const params = {
    headers: {
      Authorization: `Bearer ${data.token}`, // Usar o token capturado no setup!
      "Content-Type": "application/json",
    },
  };

  // Fazer o GET à Base de Dados para listar serviços
  const res = http.get(url, params);

  // Quality Gates
  check(res, {
    "Sucesso (Status 200)": (r) => r.status === 200,
    "Rápido (< 500ms)": (r) => r.timings.duration < 500,
    "DB Bloqueou? (Erro 500+)": (r) => r.status >= 500,
  });

  sleep(1);
}
```

### Fase 3: Ativar o Ecrã de Controlo (Web Dashboard)

Ler texto verde no terminal é aborrecido. Vamos ligar a interface gráfica oficial do k6 para vermos o tráfego a acontecer num gráfico ao vivo.

Como executar (Windows / Mac):
No vosso terminal, em vez de fazerem apenas k6 run, vão adicionar uma variável de ambiente antes do comando.

No PowerShell (Windows), executem os dois comandos seguidos:

```powershell
$env:K6_WEB_DASHBOARD="true"
k6 run ataque-servicos.js
```

Se usarem o Git Bash ou Mac:

```bash
K6_WEB_DASHBOARD=true k6 run ataque-servicos.js
```

### A Mágica: Imediatamente após rodarem o comando, o terminal vai dizer algo como Web Dashboard: http://127.0.0.1:5665.

Cliquem nesse link (ou copiem para o navegador). Vão ver um painel de controlo profissional a ser desenhado em tempo real enquanto o ataque ocorre na Cloud!

## Exercício de Diagnóstico: Caça ao Gargalo

Observem os gráficos do Web Dashboard gerados pelo vosso ataque e os gráficos do painel do Render. Preencham e entreguem o seguinte diagnóstico:

### 1. O Comportamento do p(95):

No Web Dashboard, olhem para a linha da Latência (HTTP Request Duration). O que aconteceu ao tempo de resposta à medida que os segundos foram passando? Manteve-se linear ou disparou?
Resposta: [Preencher]

### 2. A Taxa de Erros:

Tiveram pedidos a falhar? Se sim, qual foi a percentagem de falha (Error Rate) no final dos 30 segundos?
Resposta: [Preencher]

### 3. Identificação do Gargalo (O Culpado):

Vão ao painel da vossa Base de Dados PostgreSQL no Render. Tiveram picos na métrica de Active Connections? Tendo em conta o plano gratuito, a vossa API falhou porque o CPU do backend não aguentou listar os serviços ou porque a Base de Dados recusou demasiadas ligações em simultâneo? Justifiquem.
Resposta: [Preencher]
