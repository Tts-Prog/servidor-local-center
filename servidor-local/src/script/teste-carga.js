import http from "k6/http";
import { check, sleep } from "k6";

const options = {
  vus: 20,
  duration: "30s",
};

export default function () {
  const url = "https://servidor-local-center-backend2.onrender.com/users/login";

  const payload = JSON.stringify({
    email: "elvizoarez1@gmail.com",
    password: "Webpass2334!",
  });

  const headers = {
    "Content-Type": "application/json",
  };

  const response = http.post(url, payload, headers);

  check(response, {
    "Login com Sucesso (Status 200)": (r) => r.status === 200,
    "Login Rápido (Tempo < 500ms)": (r) => r.timings.duration < 500,
    "CPU Esgotado (Erro 502/504)": (r) => r.status >= 500,
  });

  sleep(1);
}
