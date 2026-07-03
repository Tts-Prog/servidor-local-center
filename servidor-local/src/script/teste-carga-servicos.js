import http from "k6/http";
import { check, sleep } from "k6";

export const options = {
    vus: 50, // número de usuários virtuais
    duration: "2m", // duração do teste
};

export function setup () {
    // const loginUrl = "https://servidor-local-center-backend-36dd.onrender.com/users/login";
    const url = "http://api:8080/users/login"; // URL do endpoint a ser testado


    const payload = JSON.stringify({
        email: "nilsonjoao647@gmail.com",
        password: "ism@el123456789000"
    });

    const params = {
        headers : {
            "Content-Type": "application/json",
            "use-Agent": "k6-load-test",
            Origin : "https://gulugulu-six.vercel.app/login",
        }
    };

    const res = http.post(loginUrl, payload, params);

    return {token: res.json("token") };
}

export default function (data) {
    const url = "https://servidor-local-center-backend-36dd.onrender.com/services/get-all-serviceo-detalhado"

    const params = {
        headers : {
            Authorization: `Bearer ${data.token}`,
            "constent-Type": "application/json",
            "use-Agent": "k6-load-test",
        },

        user: {
            role: " ADMIN"
        }
    }

    const res = hhttp.get(url, params)

    check(res, {
        "Sucesso:": (r) => r.status === 200,
        "Rápido (< 500ms)": (r) => r.timings.duration < 500,
        "Erro de servidor (Erro 502/504)": (r) => r.status >= 500,
    });

    sleep(1);
}