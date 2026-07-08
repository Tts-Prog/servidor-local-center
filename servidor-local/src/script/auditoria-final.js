import http from "k6/http";
import { check, sleep } from "k6";

export const options = {
  vus: 60,
  duration: "1m",
  thresholds: {
    http_req_failed: ["rate==0"],
    http_req_duration: ["p(95)<600"],
  },
};


export function setup() {

  const url = "http://api:8080/users/login";

  const payload = JSON.stringify({
    email: "varelaannette0@gmail.com",
    password: "1999",
  });

  const params = {
    headers: {
      "Content-Type": "application/json",
      Origin: "https://gulugulu2.vercel.app/",
      "User-Agent": "k6-load-test",
    },
  };

  const response = http.post(url, payload, params);
  console.log("STATUS LOGIN:", response.status);
console.log("BODY LOGIN:", response.body);

  check(response, {
    "Login Bem-sucedido": (r) => r.status === 200,
  });

  const body = JSON.parse(response.body);

  return {
    token: body.token,
  };
  
}

export default function (data) {
  const res = http.get("http://api:8080/api/servicos", {
    headers: {
     Authorization: `Bearer ${data.token}`,
    },
  });

  check(res, {
    "Serviços OK": (r) => r.status === 200,
  });

  sleep(1);
}