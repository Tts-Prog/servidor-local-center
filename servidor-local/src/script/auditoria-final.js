import http from "k6/http";
import { check, fail, sleep } from "k6";

export const options = {
    vus: 60,
    duration: "1m",
    thresholds: {
        http_req_failed: ["rate<0.01"],
        http_req_duration: ["p(95)<600"],
    },
};

const BASE_URL = "http://api:8080";
const LOGIN_URL = `${BASE_URL}/users/login`;
const Orcamento_URL = `${BASE_URL}/services/orcamento`;

export function setup() {
    const payload = JSON.stringify({
        email: "k@gmail.com",
        password: "1234",
    });

    const params = {
        headers: {
            "Content-Type": "application/json",
            "User-Agent": "k6 Load Test",
        },
    };

    const response = http.post(LOGIN_URL, payload, params);

    if (response.status !== 200) {
        fail(`Falha no login (${response.status}): ${response.body}`);
    }

    const token = response.json("data.token") || response.json("token");

    if (!token) {
        fail(`JWT não encontrado na resposta: ${response.body}`);
    }

    return { token };
}

export default function (data) {
    const params = {
        headers: {
            Authorization: `Bearer ${data.token}`,
            "Content-Type": "application/json",
            "User-Agent": "k6 Load Test",
        },
    };

    const response = http.get(Orcamento_URL, params);

    check(response, {
        "Status válido (200 ou 503)": (r) =>
            r.status === 200 || r.status === 503,
    });

    if (response.status !== 200 && response.status !== 503) {
        console.error(
            `Requisição falhou: ${response.status} - ${response.body}`
        );
    }

    sleep(1);
}