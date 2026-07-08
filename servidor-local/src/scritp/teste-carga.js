import http from "k6/http";
import { check, sleep } from "k6";

export const options = {
  vus: 20,
  duration: "30s",
};

export default function () {
  const url = "http://api:8080/users/login";

  const payload = JSON.stringify({
    email: "elvinzoares1@gmail.com",
    password: "Webpass123",
  });

  const headers = {
    "Content-Type": "application/json",
    "Origin": "https://servidor-local-center-three.vercel.app",
  };

  const response = http.post(url, payload, { headers: headers });

  check(response, {
    "Login com sucesso (Status 200)": (r) => r.status === 200,
    "Login Rápido (Tempo de resposta < 500ms)": (r) => r.timings.duration < 500,
    "CPU: Esgotado (Erro 502/504)": (r) => r.status >= 500,
  });

  sleep(1);
}
