import http from "k6/http";
import {check, sleep} from "k6";

export const options = {
    vus: 50,
    duration: "30s"
}

export function setup() {
    const loginUrl = "https://servidor-local-center-1rnu.onrender.com/users/login"

    const payload = JSON.stringify({
        email: "helioideino@gmail.com",
        password: "micro1234"
    });

    const params = {
        headers: {
            "Content-Type": "application/json",
            "User-Agent": "k6-load-test",
            origin: "https://processo-kappa.vercel.app/",
        },
    }

    const res = http.post(loginUrl, payload, params);

    return { token: res.json("token")}
}

export default function(data) {
    const url = "https://servidor-local-center-1rnu.onrender.com/get-all-servico-detalhado"

    const params = {
        headrs: {
            Authorization: `Bearer ${data.token}`,
            "Content-Type": "application/json",
            "User-Agent": "k6-load-test",
        },
        user: {
            role:"ADMIN"
        }
    }
    const res = http.get(url,params)

    check(res,{
        "Sucesso: ": (r) => r.status ===200,
        "Rapido (<500)": (r) => r.timings.duration < 500,
        "Erro de servidor (Erro 502/504)": (r) => r.status >= 500,
    })

    sleep(1)
}

