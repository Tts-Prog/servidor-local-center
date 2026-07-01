import http from "k6/http";
import {check, sleep} from "k6";

export const options = {
    vus: 20,
    duration : "2m"
}

export default function () {
    //const url = "https://servidor-local-center-vhbq.onrender.com/users/login"
    const url = "http://api:8080/users/login"; //URL do endpoint a ser testado

    const payload = JSON.stringify({
        email: "test@gmail.com",
        password: "123",
    })

    const params = {
        headers: {
            "Content-Type": "application/json",
            Origin: "https://gulugulu2.vercel.app/",
            "User-Agent": "k6 load test"
        }
    }

    const response = http.post(url, payload, params)
    if (response.status != 200){
        console.log(
            `ERROR! status: ${response.status} | Resposta do servidor: ${response.body}`
        )
    }

    check (response, {
        "Login com sucesso (status 200)?": (r) => r.status === 200,
        "Foi rápido? (Tempo < 500ms)?": (r) => r.timings.duration < 500,
        "CPU esgotado? (Erro 502/504)?": (r) => r.status >= 500,
    })

    sleep(1);
}