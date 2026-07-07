import http from "k6/http";
import { check, sleep } from "k6";

export const options = {
    vus:        60,
    duration:   "60s",
}

export function Setup(){
    const url = "https://servidor-local-center-mtaw.onrender.com/users/login";
    //const url = "https://api:8080/users/login";

    const payload = JSON.stringify({
        email: "k6@gmail.com",
        password: "123",
    })

    const params = {
        headers: {
            "Content-Type": "application/json",
            Origin: "https://gulugulu-ten.vercel.app/service/",
            "User-Agent": "K6 load test"
        }
    };

    const res = http.post(url, payload, params);

    return{token: res.json("token")}
};


export default async function(data){

    const url = "https://servidor-local-center-mtaw.onrender.com/"

        const params = {
        headers: {
            authorization: `Bearer ${data.token}`,
            "content-type": "application/json",
            "User-Agent": "k6-load-testing"
        },
        user: {
            role: "ADMIN"
        }
    }

    const res = http.get(url, params);
        
        check(res, {
            "sucesso": (r) => r.status === 200,
            "rapido (< 500ms)": (r) => r.timings.duration < 500,
            "erro de servidor (Erro 502/504)": (r) => r.status <= 500,
        })
    
        sleep(1);
}