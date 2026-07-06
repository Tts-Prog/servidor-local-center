import http from "k6/http";
import { check, sleep } from "k6";

export const options = {
  vus: 20, // número de usuários virtuais
  duration: "2m", // duração do teste
  thresholds: {
    // O teste FALHA se a taxa de erro for superior a 1%
    http_req_failed: ["rate<0.01"],
    // O teste FALHA se 95% dos pedidos demorarem mais de 500ms
    http_req_duration: ["p(95)<500"],
  },
};

export default function () {
  //const url = "https://servidor-local-center-backend-w1rr.onrender.com/users/login";  // URL do endpoint a ser testado
  const url = "http://api:8081/users/login"; // URL do endpoint a ser testado

  const payload = JSON.stringify({
    email: "wilson@gmail.com",
    password: "123456789",
  });

  const params = {
    headers: {
      "Content-Type": "application/json",
      origins: "https://gulugulu-teal.vercel.app",
    "user-Agent" : "k6-load-teste",
    },
  };

  const response = http.post(url, payload, params);
  if (response.status !== 200) {
    console.log(
      `ERRO! Status: ${response.status} | Resposta do Servidor: ${response.body}`,
    );
  }

  check(response, {
    "Login Bem-sucedido": (r) => r.status === 200,
    "Login Rapido (Tempo < 500ms)": (r) => r.timings.duration < 500, // tempo de resposta menor que 500ms
    "CPU Esgotado (Erro 502/504)": (r) => r.status >= 500, // não deve retornar erro de CPU esgotado
  });

  sleep(1); // espera 1 segundo entre as requisições
}
 
