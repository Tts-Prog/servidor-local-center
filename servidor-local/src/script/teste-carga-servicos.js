import http from "k6/http";
import { check, sleep } from "k6";

export const options = {
  vus: 50,
  duration: "2m",
};

export function setup() {
  // const loginUrl = "https://servidor-local-center-backend2.onrender.com/users/login";
  const loginUrl = "http://api:8080/users/login";

  const payload = JSON.stringify({
    email: "elvizoarez1@gmail.com",
    password: "Webpass2334!",
  });

  const params = {
    headers: {
      "Content-Type": "application/json",
      "User-Agent": "k6-load-test",
      Origin: "https://servidor-local-center-three.vercel.app",
    },
  };

  const res = http.post(loginUrl, payload, params);

  if (!res || !res?.body ) {
    console.error(" Failed to login:", res);
    return {};
  }

  return { token: res.json().data.token };
}

export default function (data) {
  const url = "http://api:8080/service/get-all-detailed";

  const params = {
    headers: {
      
      Authorization: `Bearer ${data && data?.token ? data?.token : ""}`,
      "Content-Type": "application/json",
      "User-Agent": "k6-load-test",
    },

    user: {
      role: "ADMIN",
    },
  };

  const res = http.get(url, params);

  check(res, {
    "Sucesso: ": (r) => r.status === 200,
    "Rápido (< 500ms)": (r) => r.timings.duration < 500,
    "Erro de servidor (Erro 502/504)": (r) => r.status >= 500,
  });

  sleep(1);
}
//13/07/2026