import http from "k6/http";
import { check, sleep } from "k6";

export const options = {
    vus: 50,
    duration: "30s",
}

export function setup() {
    const loginUrl =
        "https://servidor-local-center-backend-kh04.onrender.com/users/login";


    const payload = JSON.stringify({
        email: "user@example.com",
        password: "password123"
    });

    const params = {
        headers: {
            "Content-Type": "application/json",
            "User-Agent": "k6-load-test",
            origin: "caveira-git-main-luciobaixada6-hashs-projects.vercel.app",
        }
    }
    const res = http.post(loginUrl, payload, params);

    return { token: res.json("token") }
}
export default function (data) {
    const url = "https://servidor-local-center-backend-kh04.onrender.com/services/get-all-servico-detalhado/k6"; // URL do endpoint a ser testado

    const params = {
        headers: {
            "Authorization": `Bearer ${data.token}`,
            "Content-Type": "application/json",
            "User-Agent": "k6-load-test",

        },

        user:{
            role: "admin"
        }
    }
    const res= http.get(url, params)

    check(res, {
        "Sucesso:": (r) => r.status === 200,
        "rapido (< 500ms)": (r) => r.timings.duration < 500,
        "Erro de servidor (Erro 502/504)": (r) => r.status >= 500,
    });

    sleep(1); 
}

