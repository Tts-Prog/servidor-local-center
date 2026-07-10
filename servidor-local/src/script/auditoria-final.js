import http from "k6/http";
import { check, sleep } from "k6";

export const options = {
    vus: 6, // número de usuários virtuais
    duration: "30s", // duração do teste
};

export function setup() {
    const url = "http://api:8080/users/login"; // URL do endpoint de login
    const payload = JSON.stringify({
        email: "admin00@gmail.com",
        password: "admin00",
    });

    const params = {
        headers: {
            "Content-Type": "application/json",
            userAgent: "k6-load-test",
        },
    };

    const res = http.post(url, payload, params);
    if (res.status !== 200) {
        // console.log(
        //     `ERRO! Status: ${res.status} | Response do Servidor: ${res.body}`,
        // );
    }
    return { token: res.json().data.token }; // retorna o token de autenticação para ser usado nos testes
}

export default function (data) {
    // const url ="https://servidor-local-center-api-4fel.onrender.com/users/login"; // URL do endpoint a ser testado
    const url = `http://api:8080/service/create/`; // URL do endpoint a ser testado
    
    const payload = JSON.stringify({
        nome: "Limpeza DE CASA",
        descricao: "Servico de Limpeza Profissional para residentes ",
        categoria: "Limpeza",
        enabled_at: "true"
    });


    const params = {
        headers: {
            "Authorization": `Bearer ${data.token}`,
            "Content-Type": "application/json",
            "Origin": "https://servidor-local-center-three.vercel.app", // Simula a origem permitida pelo CORS
            "User-Agent": "k6-load-test",
        },
    };

    const res = http.get(url, payload, params);
    if (res.status !== 200) {
        // console.log(
        //     `ERRO! Status: ${res.status} | Response do Servidor: ${res.body}`,
        // );
    }

    check(res, {
        "Login com sucesso (Status 200)": (r) => r.status === 200,
        "Login Rápido (Tempo de resposta < 500ms)": (r) => r.timings.duration < 500,
        "CPU: Esgotado (Erro 502/504)": (r) => r.status >= 500,
    });

    sleep(1); // espera 1 segundo entre as requisições

}
