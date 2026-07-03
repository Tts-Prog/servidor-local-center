import http from "k6/http"
import {check, sleep} from "k6"

export const options = {
    vus: 50,
    duration: "2m",
}

//export  function  setup() {const url = "https://servidor-local-center-backend-0yv2.onrender.com/users/login"
export  function  setup() {const url = "https://api:8080/users/login"



    const payload = JSON.stringify({
        email: "vozinha@gmail.com",
        password: "vozinha",
    });
    
    const params = {
        headers:{
            "Content-Type":"application/json",
            "Origin":"https://servidor-local-center.vercel.app",
            "User-Agent":"k6-load-test",
        },
    };
    const res = http.post(url, payload, params);

    return { token: res.json("token") }
       
}

export default function(data){
    const url = "https://servidor-local-center-backend-qhq3.onrender.com/services/get-all-servico-detalhado"

    const params = {
        headers:{
           Autorization:`Bearer ${data.token}`,
           "Content-Type":"application/json",
           "User-Agent":"k6-load-test",
        },

        user:{
            role:"ADMIN"
        }
    }
    const res = http.get(url, params);

    check(res, {
        "Sucesso: ": (r) => r.status === 200,
        "Rapido ( < 500ms): ": (r) => r.timings.duration < 500,
        "Erro de servidor (Erro 502/504): ": (r) => r.status >= 500,
        
    })
    sleep(1);
    
}