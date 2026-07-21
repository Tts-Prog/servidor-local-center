import http from "k6/http";
import { check, sleep } from "k6";

export const options = {
  stages: [
    { duration: "30s", target: 50 },
    { duration: "1m", target: 200 }, // 200 utilizadores em simultâneo!
    { duration: "30s", target: 0 },
  ],
};

export function setup() {
  // const loginUrl = "https://servidor-local-center-backend2.onrender.com/users/login";
  const loginUrl = "http://api:8080/users/login";

  const payload = JSON.stringify({
    email: "tmtse23@gmail.com",
    password: "123456789",
  });

  const params = {
    headers: {
      "Content-Type": "application/json",
      "User-Agent": "k6-load-test",
      Origin: "https://servidor-local-center-three.vercel.app",
    },
  };

  const res = http.post(loginUrl, payload, params);

  if (!res || !res?.body) {
    console.error("Failed to login:", res);
    return {};
  }

  return { token: res.json("token ") } };

export default function (data) { 
  const url = "http://api:8080/service/get-all-detailed";

  const params = {
    headers: {
      Authorization: `Bearer ${data && data?.token ? data?.token : ""}`,
      "Content-Type": "application/json",
      "User-Agent": "k6-load-test",
    },

    user: {
      role: "ADMIN",
    },
  };

  const res = http.get(url, params);

  check(res, {
    "Sucesso: ": (r) => r.status === 200,
    "Rápido (< 500ms)": (r) => r.timings.duration < 500,
    "Erro de servidor (Erro 502/504)": (r) => r.status >= 500,
  });

  sleep(1);
}




//docker compose up -d --force-recreate k6_attack && docker compose run --rm --entrypoint /bin/sh k6_attack -lc 'ls -l /app/src/script/teste-carga-servicos.js && ls -l /app'