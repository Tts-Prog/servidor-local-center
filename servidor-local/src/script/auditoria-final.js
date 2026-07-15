import http from "k6/http";
import { check, sleep, fail } from "k6"; // Adicionado "fail" para abortar se o setup falhar

export const options = {
    vus: 6, // número de usuários virtuais
    duration: "30s", // duração do teste
};

export function setup() {
    const registerUrl = "http://api:8080/users/register"; // Ajuste para a sua rota real de registo se for diferente
    const loginUrl = "http://api:8080/users/login";

    const payload = JSON.stringify({
        email: "klebercorreia000@gmail.com",
        password: "ADMIN",
        nome: "Kleber Teste" // Adicione campos exigidos pelo seu registo se necessário
    });

    const params = {
        headers: {
            "Content-Type": "application/json",
            "User-Agent": "k6-load-test",
            "Origin": "https://vercel.app",
        },
    };

    // 1. Tenta registar o utilizador primeiro (ignora se já existir)
    http.post(registerUrl, payload, params);

    // 2. Faz o login
    const res = http.post(loginUrl, payload, params);

    if (res.status !== 200) {
        console.log(`[SETUP ERRO] Status: ${res.status} | Resposta: ${res.body}`);
        fail(`O login do Setup falhou com status ${res.status}`);
    }

    const responseJson = res.json();
    return { token: responseJson.data.token };
}

export default function (data) {
    const url = "http://api:8080/service/create";

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
            "Origin": "https://servidor-local-center-three.vercel.app",
            "User-Agent": "k6-load-test",
        },
    };

    const res = http.post(url, payload, params);

    // Corrigido: Removido o "if" incompleto que quebrava a sintaxe

    check(res, {
        "Criação com sucesso (Status 200)": (r) => r.status === 200 || r.status === 21, // Ajustado o texto do check para refletir a rota /service/create
        "Resposta Rápida (Tempo < 500ms)": (r) => r.timings.duration < 500,
        "Erro de Servidor (Status >= 500)": (r) => r.status >= 500,
    });

    sleep(1);
}