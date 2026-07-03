import http from "k6/http";
import { check, sleep } from "k6";

export const options = {
    vus: 20, // número de usuários virtuais
    duration: "2m", // duração do teste
};

export default function () {
    // const url = "https://servidor-local-center-backend-0yv2.onrender.com/users/login"; // URL do endpoint a ser testado
    const url = "http://api:8080/users/login"; // URL do endpoint a ser testado

    const payload = JSON.stringify({
        email: "nilsonjoao647@gmail.com",
        password: "ism@el1234567890",
    });

    const params = {
        headers : {
            "Content-Type": "application/json",
            Origin : "https://gulugulu-six.vercel.app", // <-- Finge que és o teu frontend!
            "use-Agent": "k6-load-test",
        }
    };

    const response = http.post(url, payload, { params });
    if (response.status !== 200) {
        console.log(
            `ERRO! Status: ${response.status} | Resposta do Servidor: ${response.body}`
        )
    }

    check(response, {
        "Login Bem-sucedido": (r) => r.status === 200,
        "Login Rapido (Tempo < 500ms)": (r) => r.timings.duration < 500, // tempo de resposta menor que 500ms
        "CPU Esgotado (Erro 502/504)": (r) => r.status >= 500, // não deve retornar erro de CPU esgotado
    });


    sleep(1); // espera 1 segundo entre as requisições
}