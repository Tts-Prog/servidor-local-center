import http from "k6/http";
import { check, sleep } from "k6";

export const options = {
  vus: 50,
  duration: "2m",
};

export function setup() {
    //const loginURL = "https://servidor-local-center-backend-w1rr.onrender.com/users/login";
    const loginURL = "http://api:8080/servico"; // URL do endpoint a ser testado
    
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

    const res = http.post(loginURL, payload, params);
    return { token: res.json("token") }
}

export default function(data){
    const url = "https://servidor-local-center-backend-w1rr.onrender.com/services/get-all-servico-detalhado"

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