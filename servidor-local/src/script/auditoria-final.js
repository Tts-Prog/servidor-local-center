import http from "k6/http";
import { check, fail, sleep } from "k6";

export const options = {
    vus: 60,
    duration: "1m",
};

export function setup() {
    const loginUrl = "http://api:8080/users/login";

    const payload = JSON.stringify({
        email: "djeison31@gmail.com",
        password: "admin1",
    });

    const params = {
        headers: {
            "Content-Type": "application/json",
            "User-Agent": "k6-load-test",
            origin: "again-liart.vercel.app",
        },
    };

    const res = http.post(loginUrl, payload, params);

    console.log(`Login Status: ${res.status}`);
    console.log(`Login Body: ${res.body}`);

    if (res.status !== 200) {
        fail(`Falha no login. Status: ${res.status}`);
    }

    let json;

    try {
        json = res.json();
    } catch (e) {
        fail(`A resposta do login não é um JSON válido.\nBody: ${res.body}`);
    }

    // Tentativa 1: token dentro de data
    if (json.data && json.data.token) {
        return { token: json.data.token };
    }

    // Tentativa 2: token diretamente
    if (json.token) {
        return { token: json.token };
    }

    fail(`Token não encontrado.\nResposta da API: ${JSON.stringify(json)}`);
}

export default function (data) {
    const url = "http://api:8080/service/create";

    const payload = JSON.stringify({
        nome: "Limpeza",
        descricao: "Servico de Limpeza Profissional para residentes e empresa",
        categoria: "Limpeza",
        enabled_at: "true",
    });

    const params = {
        headers: {
            Authorization: `Bearer ${data.token}`,
            "Content-Type": "application/json",
            "User-Agent": "k6-load-test",
        },
    };

    const res = http.post(url, payload, params);

    check(res, {
        "Status 200": (r) => r.status === 200,
        "Tempo < 500ms": (r) => r.timings.duration < 500,
        "Sem erro do servidor": (r) => r.status < 500,
    });

    console.log(`Create Service Status: ${res.status}`);
    console.log(`Create Service Body: ${res.body}`);

    sleep(1);
}