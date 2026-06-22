import http from "k6/http";
import { check, sleep } from "k6";

export const options = {
    vus: 10,
    duration: "30m",
};

export default function () {
    const url = "https://servidor-local-center-three.vercel.app/"; // URL corrigida para string
    
    const payload = JSON.stringify({
        email: "stiven2@gmail.com",
        password: "123456789"
    });

    const params = {
        headers: { "Content-Type": "application/json" },
    };

    // Executa o POST corretamente
    const response = http.post(url, payload, params);

    // Validações corrigidas
    check(response, {
        "status é 200": (r) => r.status === 200,  
        "tempo de resposta < 500ms": (r) => r.timings.duration < 500,  
        "não é erro 500": (r) => r.status !== 500,  
    });

    sleep(1);
}