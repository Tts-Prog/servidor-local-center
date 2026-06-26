import http from "k6/http";
import { check, sleep } from "k6";

const options = {
    vus: 50,
    duration: "30s",

}

export  function setup(){
    const loginUrl = "https://servidor-local-center-backend-qhq3.onrender.com/users/login";

    const payload = JSON.stringify({
        email: "vozinha@gmail.com",
        password: "vozinha"
    });

    const params = {
        headers: {
            "content-type": "application/json",
            "User-Agent": "k6-load-test",
            "origin" : "https://servidor-local-center-three.vercel.app"
        }
    }

    const res = http.post(loginUrl, payload, params);   

    return { token: res.json("token") };
};

export default function (data) {
    const url = "https://servidor-local-center-backend-qhq3.onrender.com/services/get-all-servico-detalhado";

    const params = {
        headers: {
            Authorization: `Bearer ${data.token}`,
            "content-type": "application/json",
            "User-Agent": "k6-load-test",

        },

        user: {
            role: "ADMIN"
        }
    }

    const res = http.get(url, params);

    check(res, {
        "Sucesso: ": (r) => r.status === 200,
        "Rápido (< 500ms)": (r) => r.timings.duration < 500,
        "Erro de servidor (Erro 502/504)": (r) => r.status >= 500,
    });

    sleep(1);
}

