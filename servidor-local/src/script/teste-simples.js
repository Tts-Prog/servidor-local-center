import http from "k6/http";
import { check } from "k6";

export const options = {
  vus: 1,
  duration: "10s",
};

export default function () {
  // Test health endpoint
  const healthRes = http.get("http://127.0.0.1:8080/health");
  console.log(`Health: ${healthRes.status} - ${healthRes.timings.duration}ms`);
  
  check(healthRes, {
    "health returns 200": (r) => r.status === 200,
  });

  // Test root endpoint
  const rootRes = http.get("http://127.0.0.1:8080/");
  console.log(`Root: ${rootRes.status} - ${rootRes.timings.duration}ms`);
  
  check(rootRes, {
    "root returns 200": (r) => r.status === 200,
  });
}
