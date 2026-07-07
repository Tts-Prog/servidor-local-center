import  http  from "k6/http";
import { check, sleep } from "k6";

export const options = {
    vus : 20,
    duration: "2m"
}

export default function () {
    // const url = "https://servidor-local-center-5tse.onrender.com/users/login"
    const url = "https://api:8080/users/login"

    const payload = JSON.stringify({
        email: "teste@gmail.com",
        password: "12345",
    })

    const params = {
        headers: {
            "Content-Type": "application/json",
            Origin: "https://gulugulu-lovat.vercel.app/login",
            "User-Agent": "K6 load test"

        }
    }
    
    const response = http.post(url, payload, params)
    if (response.status != 200) {
        console.log(
            `ERROR! status: ${response.status} | Resposta do servidor: ${response.body}`
        )
    }

    check (response, {
        "Login com Sucesso (Status 200)?": (r) => r.status === 200,
        "Foi rápido? (Tempo < 500ms)?": (r) => r.timings.duration < 500,
        "CPU esgotado? (Erro 502/504)?": (r) => r.status >= 500,
    })

    sleep(1);
}
