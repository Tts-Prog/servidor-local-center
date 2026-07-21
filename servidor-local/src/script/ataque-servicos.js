import http from "k6/http";
import { check, sleep } from "k6";

const baseUrl = (__ENV.API_BASE_URL || "http://api:8080").replace(/\/$/, "");

export const options = {
  stages: [
    { duration: "30s", target: 50 },
    { duration: "1m", target: 200 },
    { duration: "30s", target: 0 },
  ],
};

export default function () {
  const response = http.get(`${baseUrl}/`, {
    tags: {
      name: "GET /",
    },
  });

  check(response, {
    "status is 2xx": (res) => res.status >= 200 && res.status < 300,
  });

  sleep(1);
}
