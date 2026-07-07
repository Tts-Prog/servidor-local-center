import http from "k6/http";
import { check ,sleep } from "k6";

    export const options = {
        vus: 20,
        duration: "3m",
    };

    export default function (){
        // const unl= "https://servidor-local-center-api.onrender.com/users/login";
const unl = "https://api.8080/users/login";
        const payload = JSON.stringify({
            email: "teste@gmail.com",
            password: "12345"
        });

        // const headers = {
        //     "Content- Type": "application/json",
        // }

        const params = {
            headers: {
                "Content-Type": "application/json",
                Origin: "https://gulugulu-theta.vercel.app",
                "User-Agent": "k6-login-test",
            },
        };

        const response = http.post(unl, payload, params);
        if (response.status !== 200) {
            console.log(
                `ERRO! Status: ${response.status} | Resposta do servidor: ${response.body}`);
        }

        check(response, {
            "Login com sucesso (Status 200)": (r) => r.status === 200,
            "Login Rápido (Tempo de resposta < 500ms)": (r) => r.timings.duration < 500,
            "CPU: Esgotado (Erro 502/504)": (r) => r.status >= 500
        }); 
        sleep(1);
    }
