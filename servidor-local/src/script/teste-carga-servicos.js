import http from "k6/http"
import { check, sleep } from "k6"

export const options = {
    vus: 50,
    duration: "2m"
}

export function setup() {
    // const loginUrl = "https://servidor-local-center-5tse.onrender.com/users/login"
    const loginUrl = "https://api:8080/users/login"

    const payload = JSON.stringify({
        email: "teste@gmail.com",
        password: "12345"
    })

  const params = {
    headers: {
      "Content-Type": "application/json",
      "User-Agent": "k6-load-test",
      Origin: "https://servidor-local-center-three.vercel.app",
    },
  };

    const response = http.post(loginUrl, payload, params)

    return { token: response.json("token") }
}

export default function (data) {
  const url = "http://api:8080/service/get-all-detailed";

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

    const res = http.get(url, params)

    check(res, {
        "sucesso: ": (r) => r.status === 200,
        "rapido (< 500ms)": (r) => r.timings.duratioin < 500,
        "Erro de servidor (Erro 502/504)": (r) => r.status <= 500,
    })

    sleep(1)
}
