import http from "k6/http";
import { check, sleep } from "k6";


export const options = {
    vus: 50,
    duration: "2m",
};

export function setup() {
    // const loginUrl = "https://servidor-local-center-api.onrender.com/users/login";
const loginUrl = "https://api:8080/users/login";

    const payload = JSON.stringify({
        email: " teste@gmail.com",
        password: "12345"
    });


    const params = {
        headers: {
            "Content-Type": "application/json",
            "User-Agent": "k6-login-test",
            Origin: "https://gulugulu-theta.vercel.app",
        },
    };

    const res = http.post(loginUrl, payload, params);
    return { token: res.json("token ") };
}


export default function (data) {
const url = "https://servidor-local-center-api.onrender.com/services/get-all-servico-detalhado";


const params = {
    headers: {
        Authorization: `Bearer ${data.token}`,
        "Content-Type": "application/json",
        "User-Agent": "k6-load-test",
    },

    user: {
        role: "admin",
    },
}

    const res = http.get(url, params)

    check(res, {
        "Sucesso:" : (r) => r.status === 200,
        "Rapido(< 500ms)": (r) => r.timings.duration < 500,
        "Erro de Servidor (Erro 502/504)": (r) => r.status >= 500
    });
    sleep(1);
};