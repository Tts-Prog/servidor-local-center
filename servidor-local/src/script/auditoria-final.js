import http from "k6/http";
import { check, sleep } from "k6";

export const options = {
  vus: 60,
  duration: "1m",
};

//export  function  setup() {const url = "https://servidor-local-center-backend-0yv2.onrender.com/users/login"
export function setup() {
  // const url = "https://servidor-local-center-backend-qhq3.onrender.com/users/login"

  const url = "http://api:8080/users/login";

  const payload = JSON.stringify({
    email: "vozinha2@gmail.com",
    password: "vozinha2",
  });

  const params = {
    headers: {
      "Content-Type": "application/json",
      Origin: "https://servidor-local-center-three.vercel.app",
      "User-Agent": "k6-load-test",
    },
  };
  const res = http.post(url, payload, params);

  console.log("status: ", res.status);
  // console.log("Body: ", res.body);

  return { token: res.json().data.token };
}

export default function (data) {
  // const url = "https://servidor-local-center-backend-qhq3.onrender.com/services/get-all-servico-detalhado"
  const url = "http://api:8080/service/get-all-detailed";

  const params = {
    headers: {
      Authorization: `Bearer ${data.token}`,
      "Content-Type": "application/json",
      "User-Agent": "k6-load-test",
    },

    user: {
      role: "ADMIN",
    },
  };
  // console.log("Data", data);

  const res = http.get(url, params);
  // console.log("Headers", res.headers);

  console.log("status: ", res.status);
  // console.log("Body: ", res.body);

  check(res, {
    "Sucesso: ": (r) => r.status === 200,
    "Rapido ( < 500ms): ": (r) => r.timings.duration < 500,
    "Erro de servidor (Erro 502/504): ": (r) => r.status >= 500,
  });
  sleep(1);
}
