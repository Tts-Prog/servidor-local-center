import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
    vus: 60,
    duration: '1m',

    thresholds: {
        http_req_failed: ['rate<0.01'],
        http_req_duration: ['p(95)<600'],
    },
};

const BASE_URL = 'http://api:8080';
export function setup() {
    const login = http.post(
        `${BASE_URL}/users/login`,
        JSON.stringify({
            email: " teste@gmail.com",
            password: "12345"
        }),
        {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    );

    return {
        token: login.json().token
    };
}

export default function (data) {

    const res = http.get(
        'http://api:8080/service',
        {
            headers: {
                Authorization: `Bearer ${data.token}`
            }
        }
    );
    if (res.status !== 200) {
    console.log(`Status: ${res.status}`);
    console.log(res.body);
}

    check(res, {
        'Status OK': (r) => r.status == 200 || r.status == 503
    });


    sleep(1);
}