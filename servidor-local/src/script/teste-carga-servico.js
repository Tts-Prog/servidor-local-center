import http from "k6/http";
import { check, sleep} from "k6";

export const options ={
    vus:50,
    duration: "30s",
}

export function setup(){
    const  loginUrl = "https://servidor-local-center-backend-lmgl.onrender.com/users/login";

    const paylod = JSON.stringify({
        email: "papygomes8735@gmail.com",
        password: "12345678"
    })

    const params = {
        headers: {
            "Content-Type": "application/json",
            "User-Agent": "k6-load-test",
            origin: "https://servidor-local-center-three.vercel.app"
        }
    };

    const res = http.post(loginUrl, paylod, params);
    return { token: res.json("token")}

}

export default function (data){
    const url = "https://servidor-local-center-backend-lmgl.onrender.com/servicos/gett-all-servico-detalhado"

    const params = {
        headers:{
            Authorization: `Bearer ${data.token}`,
            "Content_Type": "application/json",
            "User-Agent": "k6-load-test",
        },

        user: {
            role: "ADMIN"
        }
    }

    const res = http.get(url, params)

    check(res, {
        "Sucesso": (r) => r.status === 200,
        "Rapido": (r) => r.timings.duration < 500,
        "Error de Servidor (Error 502/504)": (r) => r.status >= 500
    });
    sleep(1);
    
}