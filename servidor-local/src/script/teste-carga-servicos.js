import http from "k6/http";
import { check, sleep } from "k6";

export const options = {
    vus: 50, // número de usuários virtuais
    duration: "2m", // duração do teste
};

export function setup() {
    // const loginUrl = "https://servidor-local-center-backend-wt4z.onrender.com/users/login"; // URL do endpoint de login
    const loginUrl = "https://api:8080/users/login"; // URL do endpoint de login

    const payload = JSON.stringify({
        email: "k@gmail.com",
        password: "1234",
    });

    const params = {
        headers: {
            "content-Type": "application/json",
            "user-Agent": "k6 load test", // cabeçalho User-Agent para identificar o teste
            Origin: "https://again-liart.vercel.app", // funge que és teu frontend
        },
    };

    const response = http.post(loginUrl, payload, params);

    return { token: response.json().data.token}; // retorna o token de autenticação para ser usado nas requisições subsequentes
}

export default function (data) {
    const url = "https://servidor-local-center-backend-wt4z.onrender.com/services/get-all-servico-detalhado"; // URL do endpoint a ser testado

  // const url = "http://api:8080/service/get-all-detailed";

    const params = {
        headers: {
            Authorization: `Bearer ${data.token}`, // usa o token retornado na função setup
            "content-Type": "application/json",
            "user-Agent": "k6 load test", // cabeçalho User-Agent para identificar o teste
        },

        user: {
            role: "ADMIN", // define o papel do usuário como "admin"
        }
    };

    const response = http.get(url, params);

    check(response, {
        "Sucesso: ": (r) => r.status === 200,
        "Rápido (< 500ms)": (r) => r.timings.duration < 500, // tempo de resposta menor que 500ms
        "Erro de Servidor (Erro 502/504)": (r) => r.status <= 500, // não deve retornar erro de CPU esgotado   
    })

    sleep(1); // espera 1 segundo entre as requisições
}
