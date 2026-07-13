import http from "k6/http"
import { check, sleep, fail } from "k6" // Added fail

export const options = {
    vus: 50,
    duration: "2m"
}

export function setup() {
    const loginUrl = "http://api:8080/users/login"

    const payload = JSON.stringify({
        email: "teste@gmail.com",
        password: "12345"
    })

    const params = {
        headers: {
            "Content-Type": "application/json",
            "User-Agent": "k6-load-test",
            Origin: "https://vercel.app",
        },
    };

    const response = http.post(loginUrl, payload, params)

    if (!response && response?.body) {
        console.error("Failed to login", response)
        return {}
    }

    // DEBUG LOGS: This will output to your terminal window
    console.log(`[SETUP] HTTP Status Code: ${response.status}`);
    console.log(`[SETUP] Full Response Body: ${response.body}`);

    const token = response.json("token");
    
    if (!token) {
        fail(`[SETUP ERROR] Could not find "token" key in response! Check body above.`);
    }

    return { token: token }
}

export default function (data) {
    const url = "http://api:8080/service/get-all-detailed";

    const params = {
        headers: {
            Authorization: `Bearer ${data && data.token ? data?.token : ""}`,
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
        "rapido (< 500ms)": (r) => r.timings.duration < 500,
        "Erro de servidor (Erro 502/504)": (r) => r.status >= 500,
    })

    sleep(1)
}
