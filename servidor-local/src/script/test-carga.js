import http from "k6/http";
import { check, sleep } from "k6";

const options = {
    vus:20,
    duration:'30s'
}

export default function (){
    const url = 'https://servidor-local-center-backend-w1rr.onrender.com'

    const payload = JSON.stringify({
        email: "wilson@gmail.com",
        password: "123456789"
    })

    const headers = {
        "Content-Type": "application/json"
    }

    const responce = http.post(url, payload, headers)

    check(responce,{
        "Login com sucesso": (r) => r.status === 200,
        "Login rápido": (r) => r.timings.duration < 500,
        "CPU esgotado": (r) => r.status >= 500
    })
    sleep(1)
}