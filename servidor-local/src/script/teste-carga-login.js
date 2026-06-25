import http from "k6/http";
import { check, sleep } from "k6";

export const options = {
    vus: 20, // número de usuários virtuais
    duration: "30s", // duração do teste
};

export default function () {
    const url =
    "https://servidor-local-center-backend-ifql.onrender.com/users/login"; // URL do endpoint a ser testado

    const payload = JSON.stringify({
    email: "bella@gmail.com",
    password: "1234",
    });

    // const headers = {
    // "Content-Type": "application/json",
    //};

    const params = {
        headers: {
            "Content-Type": "application/json",
            origin: "https://gulugulu-amber.vercel.app", // <-- Finge que és o teu frontend!
            "User-Agent": "k6-load-test",
        },
    }

    const response = http.post(url, payload, params);
    if (response.status !== 200) {
        console.log(
        `Erro: Status: $${response.status} | Resposta do Servidor: ${response.body}`,
    );
    }

    check(response, {
    "Login Bem-sucedido": (r) => r.status === 200,
    "Login Rapido (Tempo < 500ms)": (r) => r.timings.duration < 500, // tempo de resposta menor que 500ms
    "CPU Esgotado (Erro 502/504)": (r) => r.status >= 500, // não deve retornar erro de CPU esgotado
    });

    sleep(1); // espera 1 segundo entre as requisições
}