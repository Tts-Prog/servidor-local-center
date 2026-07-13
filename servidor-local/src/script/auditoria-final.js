import http from 'k6/http';
import { check } from 'k6';

export const options = {
    vus: 60,
    duration: '1m',

    thresholds: {
        http_req_failed: ['rate<0.01'],
        http_req_duration: ['p(95)<600'],
    },
};

export function setup() {
    const login = http.post(
        'http://api:8080/users/login',
        JSON.stringify({
            email: " teste@gmail.com",
            password: "12345"
        }),
        {
            headers: {
                'Content-Type': 'application/json',
            },
        }
    );

    const body = login.json();

    return {
        token: body.token,
    };
}

export default function (data) {
    const res = http.get(
        'http://api:8080/prestador/get-by-id/1',
        {
            headers: {
                Authorization: `Bearer ${data.token}`,
            },
        }
    );

    check(res, {
        'status 200 ou 503': (r) => r.status === 200 || r.status === 503,
    });
}