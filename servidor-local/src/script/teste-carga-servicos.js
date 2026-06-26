import http from "k6/http"
import { check, sleep} from "k6"

export const options = {
    vus: 50,
    duration: "30s"
}

export function setup() {
    const loginUrl = "https://[teu-backend].onrender.com/users/login"

    const payload = JSON.stringify({
        email: "test@gmail.com",
        password: "123"
    })

    const params = {
        headers: {
             "Content-Type": "application/json",
             "User-Agent": "K6 load test",
             Origin: "https://gulugulu2.vercel.app/login"
        }
    }

    const response = http.post(loginUrl, payload, params)

    return { token: response.json ("token") }
}

export default function(data) {
    const url = "https://[teu-backend].onrender.com/services/get-all-servico-detalhado"

    const params = {
        headers: {
            Authorizaton: `Bearer $(data.token)`,
            "Content-Type": "application/json",
            "User-Agent": "K6 load test",
        },
        user: {
            role: "ADMIN"
        }
    }

    const res = http.get(url,params)

    check(res, {
        "sucesso: ": (r) => r.status === 200,
        "rapido (< 500ms)": (r) => r.timings.duratioin < 500,
        "Erro de servidor (Erro 502/504)": (r) => r.status <= 500,
    })

    sleep(1)
}