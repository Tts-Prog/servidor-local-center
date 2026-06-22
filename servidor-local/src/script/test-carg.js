import http from "k6/http";
import { check, sleep } from "k6";

const options = {
    vus: 10,
    duration: "30s",
}

export default function () {
    const url = "https://servidor-local-center-backend-n9yd.onrender.com"

    const payload = JSON.stringify({
        email: "ismaralfama222@gmail.com",
        password: "AlfamaCabral1",
    })


    const headers = {
        "Content-Type": "application/json",
    }
    const response = http.post(url, payload, headers);
    check(response, {
        "LOgin com sucesso (status 200)": (r) => r.status === 200,
        "LOgin rapido (tempo < 500ms)": (r) => r.timings.duration < 500,
        "CPU Esgotado (erro > 1500ms)": (r) => r.timings.duration < 1500,
    });
    sleep(1);
}