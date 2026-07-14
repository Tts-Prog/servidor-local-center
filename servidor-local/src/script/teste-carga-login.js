import http from "k6/http";
import { check, sleep } from "k6";

export const options = {
  vus: Number(__ENV.VUS || 20),
  duration: __ENV.DURATION || "2m",
};

const baseUrl = __ENV.BASE_URL || "https://servidor-local-center-backend2.onrender.com";
const email = __ENV.LOGIN_EMAIL || "elvizoarez1@gmail.com";
const password = __ENV.LOGIN_PASSWORD || "Webpass2334!";

export default function () {
  //const url ="http://servidor-local-center-backend2.onrender.com/users/login"; //URL do endpoint de login
  const url= "http://api:8080/users/login"; //URL do endpoint de login
  const payload = JSON.stringify({ email, password });

  const response = http.post(`${baseUrl}/users/login`, payload, {
    headers: {
      "Content-Type": "application/json",
      Origin: __ENV.ORIGIN || "https://servidor-local-center-three.vercel.app",
      "User-Agent": "k6-load-test",
    },
  });

  if (response.status !== 200) {
    console.log(`ERRO! Status: ${response.status} | Resposta do Servidor: ${response.body}`);
  }

  check(response, {
    "Login bem-sucedido": (r) => r.status === 200,
    "Sem erro 502/504": (r) => r.status !== 502 && r.status !== 504,
  });

  sleep(1);
}
