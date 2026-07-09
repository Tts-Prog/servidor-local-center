import http from "k6/http";
import { check, sleep } from "k6";

export const options = {
  vus: 60,
  duration: "60s",
  thresholds: {
    http_req_failed: ["rate==0"],
    http_req_duration: ["p(95)<600"],
  },
};


export function setup() {

  const url = "http://api:8080/users/login";
  //const url = "http://api:8080/users/login";

  const payload = JSON.stringify({
      email: "teste4@gmail.com",
      password: "123"
  });

  const params = {
    headers: {
      "Content-Type": "application/json",
      Origin: "https://gulugulu2.vercel.app/service",
      "User-Agent": "k6-load-test",
    },

    user: {
      role: "ADMIN",
    }
  };

  const res = http.post(url, payload, params);

  console.log("res: ", res.json());

  return {
    token: res.json().data.token
  };
  
}

export default function (data) {
  /*const res = http.get("http://api:8080/api/servicos", {
    headers: {
     Authorization: `Bearer ${data.token}`,
    },
  });*/

  const res = http.get("http://api:8080/service/", {
    headers: {
     Authorization: `Bearer ${data.token}`,
     "content-Type": "application/json",
     "User-Agent": "k6-load-test",
    },
  });


   if (res.status !== 200) {
    console.log("SERVICE STATUS:", res.status);
    console.log("SERVICE BODY:", res.body);
  }

  check(res, {
    "Serviços OK": (r) => r.status === 200,
    "rapido": (r) => r.timings.duration < 500,
    "erro de servidor (Erro 502/504)": (r) => r.status <= 500,
  });

  sleep(1);
}