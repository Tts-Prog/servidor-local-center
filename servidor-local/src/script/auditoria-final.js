import http from "k6/http";
import { check, sleep } from "k6";

export const options = {
    vus: 60,
    duration: "1m"
}

export function setup() {
    //const loginUrl = "https://servidor-local-center-1rnu.onrender.com/users/login"
    const loginUrl = "http://api:8080/users/login"

    const payload = JSON.stringify({
        email: "djeison31@gmail.com",
        password: "admin1"
    });

    const params = {
        headers: {
            "Content-Type": "application/json",
            "User-Agent": "k6-load-test",
            origin: "again-liart.vercel.app",
        },
    }

    const res = http.post(loginUrl, payload, params);

    //console.log(Login status: ${res.status} | Body: ${res.body});

    return { token: res.json().data.token }
}

export default function (data) {
    const url = "http://api:8080/service/create"

    const payload = JSON.stringify({
        nome: "Limpeza",
        descricao: "Servico de Limpeza Profissional para residentes e empresa",
        categoria: "Limpeza",
        enabled_at: "true"
    });

    const params = {

        headers: {
            Authorization: `Bearer ${data.token}`,
            "Content-Type": "application/json",
            "User-Agent": "k6-load-test",
        },
        user: {
            role: "ADMIN"
        },

    }
    const res = http.post(url, payload, params)

    check(res, {
        "Sucesso: ": (r) => r.status === 200,
        "Rapido (<500)": (r) => r.timings.duration < 500,
        "Erro de servidor (Erro 502/504)": (r) => r.status >= 500,
    })

    sleep(1)

}