import http from "k6/http";
import { check, sleep } from "k6";

const options = {
  vus: 20, // número de usuários virtuais
  duration: "30s", // duração do teste
};

export default function () {
  const url =
    "https://servidor-local-center-backend-w1rr.onrender.com/users/login"; // URL do endpoint a ser testado

  const payload = JSON.stringify({
    email: "wilson@gmail.com",
    password: "123456789",
  });

  const headers = {
    "Content-Type": "application/json",
  };

  const response = http.post(url, payload, { headers });
  check(response, {
    "Login Bem-sucedido": (r) => r.status === 200,
    "Login Rapido (Tempo < 500ms)": (r) => r.timings.duration < 500, // tempo de resposta menor que 500ms
    "CPU Esgotado (Erro 502/504)": (r) => r.status >= 500, // não deve retornar erro de CPU esgotado
  });

  sleep(1); // espera 1 segundo entre as requisições
}
 