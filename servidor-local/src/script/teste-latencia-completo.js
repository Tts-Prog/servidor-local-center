import http from "k6/http";
import { check, sleep, group } from "k6";
import { Counter } from "k6/metrics";

// Métricas customizadas
const latenciaLoginSucesso = new Counter("latencia_login_sucesso");
const latenciaLoginErro = new Counter("latencia_login_erro");
const latenciaRegistroSucesso = new Counter("latencia_registro_sucesso");
const latenciaRegistroErro = new Counter("latencia_registro_erro");
const latenciaServicos = new Counter("latencia_servicos");

export const options = {
  vus: 1, // 1 utilizador virtual para medir latência pura
  duration: "30s",
  thresholds: {
    "http_req_duration": ["p(95)<2000", "p(99)<3000"], // 95% das requisições < 2s
    "http_req_failed": ["rate<0.1"], // menos de 10% de falhas
  },
};

const BASE_URL = __ENV.BASE_URL || "http://localhost:8080";
const LOGIN_EMAIL = __ENV.LOGIN_EMAIL || "elvizoarez1@gmail.com";
const LOGIN_PASSWORD = __ENV.LOGIN_PASSWORD || "Webpass2334!";
const REGISTER_EMAIL = `novo-${Date.now()}@test.com`;
const REGISTER_PASSWORD = "Teste1234!";

let authToken = null;

export default function () {
  // PARTE 1: LOGIN COM SUCESSO (Dados Corretos)
  group("Login - Dados Corretos", () => {
    const loginPayload = JSON.stringify({
      email: LOGIN_EMAIL,
      password: LOGIN_PASSWORD,
    });

    const response = http.post(`${BASE_URL}/users/login`, loginPayload, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const passed = check(response, {
      "Status 200 (sucesso)": (r) => r.status === 200,
      "Token recebido": (r) => {
        if (r.status === 200) {
          const body = JSON.parse(r.body);
          if (body.data && body.data.token) {
            authToken = body.data.token;
            return true;
          }
        }
        return false;
      },
    });

    latenciaLoginSucesso.add(response.timings.duration);
    console.log(
      `[LOGIN SUCESSO] Status: ${response.status} | Latência: ${response.timings.duration}ms`
    );
  });

  sleep(1);

  // PARTE 2: LOGIN COM ERRO (Dados Errados)
  group("Login - Dados Errados", () => {
    const loginPayload = JSON.stringify({
      email: LOGIN_EMAIL,
      password: "SenhaErrada123!",
    });

    const response = http.post(`${BASE_URL}/users/login`, loginPayload, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    check(response, {
      "Status 400 ou 401 (erro esperado)": (r) =>
        r.status === 400 || r.status === 401,
      "Sem erro 500": (r) => r.status !== 500,
    });

    latenciaLoginErro.add(response.timings.duration);
    console.log(
      `[LOGIN ERRO] Status: ${response.status} | Latência: ${response.timings.duration}ms`
    );
  });

  sleep(1);

  // PARTE 3: REGISTRO COM SUCESSO (Novo Utilizador)
  group("Registro - Novo Utilizador", () => {
    const registerPayload = JSON.stringify({
      email: REGISTER_EMAIL,
      password: REGISTER_PASSWORD,
      name: `User ${Date.now()}`,
      role: "CLIENTE",
    });

    const response = http.post(`${BASE_URL}/users/create`, registerPayload, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    check(response, {
      "Status 200 ou 201 (criado)": (r) => r.status === 200 || r.status === 201,
      "Sem erro 500": (r) => r.status !== 500,
    });

    latenciaRegistroSucesso.add(response.timings.duration);
    console.log(
      `[REGISTRO SUCESSO] Status: ${response.status} | Latência: ${response.timings.duration}ms`
    );
  });

  sleep(1);

  // PARTE 4: REGISTRO COM ERRO (Email Já Existente)
  group("Registro - Email Duplicado", () => {
    const registerPayload = JSON.stringify({
      email: LOGIN_EMAIL, // Email que já existe
      password: REGISTER_PASSWORD,
      name: "Duplicate User",
      role: "CLIENTE",
    });

    const response = http.post(`${BASE_URL}/users/create`, registerPayload, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    check(response, {
      "Status 400 ou 409 (erro esperado)": (r) =>
        r.status === 400 || r.status === 409,
      "Sem erro 500": (r) => r.status !== 500,
    });

    latenciaRegistroErro.add(response.timings.duration);
    console.log(
      `[REGISTRO ERRO] Status: ${response.status} | Latência: ${response.timings.duration}ms`
    );
  });

  sleep(1);

  // PARTE 5: GET /SERVICES (Com Token de Autenticação)
  if (authToken) {
    group("GET /services - Com Autenticação", () => {
      const response = http.get(`${BASE_URL}/services`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
          "Content-Type": "application/json",
        },
      });

      check(response, {
        "Status 200 (sucesso)": (r) => r.status === 200,
        "Dados recebidos": (r) => r.body.length > 0,
        "Sem erro 502/504": (r) => r.status !== 502 && r.status !== 504,
      });

      latenciaServicos.add(response.timings.duration);
      console.log(
        `[GET SERVICES] Status: ${response.status} | Latência: ${response.timings.duration}ms`
      );
    });
  }

  sleep(1);
}

export function handleSummary(data) {
  console.log("===============================================");
  console.log("          RESUMO DE LATÊNCIAS (em ms)          ");
  console.log("===============================================");
  console.log(`Login Sucesso - ${data.metrics.latencia_login_sucesso?.value}`);
  console.log(`Login Erro - ${data.metrics.latencia_login_erro?.value}`);
  console.log(`Registro Sucesso - ${data.metrics.latencia_registro_sucesso?.value}`);
  console.log(`Registro Erro - ${data.metrics.latencia_registro_erro?.value}`);
  console.log(`GET /services - ${data.metrics.latencia_servicos?.value}`);
  console.log("===============================================");
  return data;
}
