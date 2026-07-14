import http from "k6/http";
import { check, sleep } from "k6";

export const options = {
  vus: 50,
  duration: "2m",
};

export function setup() {
  // Configurações iniciais, se necessário
  //const loginUrl = "http://servidor-local-center-backend2.onrender.com/users/login"; //URL do endpoint de login
  const loginUrl = "http://api:8080/users/login"; //URL do endpoint de login
  const email = __ENV.LOGIN_EMAIL || "elvizoarez1@gmail.com";
  const password = __ENV.LOGIN_PASSWORD || "Webpass2334!";
}

export default function () {
  const res = http.get("http://api:8080/health", {
    headers: {
      "User-Agent": "k6-load-test",
    },
  });

  check(res, {
    "Status esperado 200 ou 503": (r) => r.status === 200 || r.status === 503,
    "Sem erro de proxy 502/504": (r) => r.status !== 502 && r.status !== 504,
  });

  sleep(1);
}
