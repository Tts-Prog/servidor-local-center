import http from "k6/http";
import { check, sleep } from "k6";

export const options = {
  vus: 50,
  duration: "30s",
  thresholds: {
    // O teste FALHA se a taxa de erro for superior a 1%
    http_req_failed: ["rate<0.01"],
    // O teste FALHA se 95% dos pedidos demorarem mais de 500ms
    http_req_duration: ["p(95)<500"],
  },
};

export function setup() {
    //const loginURL = "https://servidor-local-center-backend-w1rr.onrender.com/users/login";
    const loginUrl = "http://api:8080/users/login"; // URL do endpoint a ser testado
    
    const payload = JSON.stringify({
        email: "wilson@gmail.com",
        password: "123456789"
    });
    
    const params = {
        headers: {
            "Content-Type": "application/json",
            "user-agent": "k6-load-teste",
            origin: "https://gulugulu-teal.vercel.app",
        }
    }

  const res = http.post(loginUrl, payload, params);
  if (res.status !== 200) {
  console.log(`🚨 ERRO! Status: ${res.status} | Resposta: ${res.body}`);
}

  return { token: res.json("token") };
}

export default function (data) {
  const url = "http://api:8080/service/get-all-detailed";

    const params = {
        headers:{
            Authorization:`Bearer ${data.token}`,
            "Content-Type" : "application/json",
            "user-agent": "k6-load-teste",
        },
        user:{
            role: "admin"
        }
    }
    const res = http.get (url,params)

    check(res, {
        "sucesso": (r) => r.status === 200,
        "Rapido (Tempo < 500ms)": (r) => r.timings.duration < 500,
        "erro de servidor (Erro 502/504)": (r) => r.status >= 500,
    });

    sleep(1);
}
