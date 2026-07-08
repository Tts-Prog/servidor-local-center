import http from "k6/http";
import { check, sleep } from "k6";

export const options = {
  vus: 20, // número de usuários virtuais
  duration: "30s", // duração do teste
};

export default function () {
  // const url = "https://servidor-local-center-backend2.onrender.com/users/login"; // URL do endpoint a ser testado
  const url = "http://api:8080/users/login"; // URL do endpoint a ser testado

  const payload = JSON.stringify({
    email: "1@gmail.com",
    password: "123456789",
  });

  const params = {
    headers: {
      "Content-Type": "application/json",
      "User-Agent": "k6-load-test",
      Origin: "https://servidor-local-center-three.vercel.app", // <-- Finge que és o teu Frontend!
    },
  };

  const res = http.post(url, payload, params);
  if(res.status !== 200){
  }

  check(res, {
    "GET com Sucesso (Status 200)?": (r) => r.status === 200,
    "GET Rápido (Tempo < 500ms)": (r) => r.timings.duration < 500, // tempo de resposta menor que 500ms
    "CPU Esgotado (Erro 502/504)": (r) => r.status >= 500, // não deve retornar erro de CPU esgotado
  });

  sleep(1);
}

