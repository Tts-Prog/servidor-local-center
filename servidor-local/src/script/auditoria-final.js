import http from "k6/http"
import { check, sleep } from "k6"

export const options = {
    vus: 60,
    duration: "1m"
}

export function setup() {
    const loginUrl = "http://api:8080/users/login"  // Keep this for Docker

    const payload = JSON.stringify({
        email: "admin@gmail.com",
        password: "admin"
    })

    const params = {
        headers: {
            "Content-Type": "application/json",
            "User-Agent": "K6 load test",
            Origin: "https://gulugulu-lovat.vercel.app"
        }
    }

    const response = http.post(loginUrl, payload, params)
    
    // Add error handling
    if (response.status !== 200) {
        console.error(`Login failed with status: ${response.status}`)
        console.error(`Response body: ${response.body}`)
        throw new Error(`Login failed: ${response.status}`)
    }

    const token = response.json().data.token
    if (!token) {
        throw new Error("No token received")
    }

    return { token: token }
}

export default function (data) {
    const url = "http://api:8080/users/"  // Changed to use Docker service name

    const params = {
        headers: {
            Authorization: `Bearer ${data.token}`,  // Fixed typo
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
        "rapido (< 500ms)": (r) => r.timings.duration < 500,  // Fixed typo
        "Erro de servidor (Erro 502/504)": (r) => r.status <= 500,
    })

    sleep(1)
}