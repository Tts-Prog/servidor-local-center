import http from "k6/http"
import {check, sleep} from "k6"

export const options = {
    vus: 60,
    duration: "1m",
}

//export  function  setup() {const url = "https://servidor-local-center-backend-0yv2.onrender.com/users/login"
export  function  setup() {const url = "http://api:8080/users/login"



    const payload = JSON.stringify({
        email: "furria@gmail.com",
        password: "furria1",
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
    const url ="https://servidor-local-center-backend-0yv2.onrender.com/services/get-all-servico-detalhado"

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


