import http from "k6/http";
import { check, sleep } from "k6";

const options = {
  vus: 20,
  duration: "30s",
};

export default function () {
  const unl = "https://servidor-local-center-backend2.onrender.com/users/login";

  const payload = JSON.stringify({
    email: "vozinha@gmail.com",
    password: "vozinha",
  });

  const headers = {
    "Content- Type": "application/json",
    "Oigin": "https://gulugulu-9kcz.vercel.app/login",
    "User-Agent": "k6-load-test",
  };

  const response = http.post(unl, payload, { headers: headers });

  check(response, {
    "Login com sucesso (Status 200)": (r) => r.status === 200,
    "Login Rápido (Tempo de resposta < 500ms)": (r) => r.timings.duration < 500,
    "CPU: Esgotado (Erro 502/504)": (r) => r.status >= 500,
  });

  sleep(1);
}
