import http from "k6/http";
import { check, sleep } from "k6";

export const options = {
    vus: 20, // número de usuários virtuais
    duration: "1m", // duração do teste
};

export default function setup() {
    // const url ="https://servidor-local-center-api-4fel.onrender.com/users/login"; // URL do endpoint a ser testado
    const url = `http://api:8080/service/get-all-detailed`; // URL do endpoint a ser testado

    const payload = JSON.stringify({
        email: "papygomes8735@gmail.com",
        password: "12345678",
    });

    const params = {
        headers: {
            "Content-Type": "application/json",
            "Origin": "https://servidor-local-center-three.vercel.app", // Simula a origem permitida pelo CORS
            "User-Agent": "k6-load-test",
        },
    };

    const res = http.post(url, payload, params);
    if (res.status !== 200) {
        console.log(
            `ERRO! Status: ${res.status} | Response do Servidor: ${res.body}`,
        );
    }

    check(res, {
        "Login com sucesso (Status 200)": (r) => r.status === 200,
        "Login Rápido (Tempo de resposta < 500ms)": (r) => r.timings.duration < 500,
        "CPU: Esgotado (Erro 502/504)": (r) => r.status >= 500,
    });

    sleep(1); // espera 1 segundo entre as requisições
    console.log();
}
