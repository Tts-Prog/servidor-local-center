import http from 'k6/http';
import { check, sleep, fail } from 'k6';


export const options = {
    vus: 60,
    duration: '1m'
};

const BASE_URL = 'http://api:8080';

export function setup() {
    const loginUrl = `${BASE_URL}/api/users/login`;
    const payload = JSON.stringify
        ({
            email: 'helioideino@gmail.com',
            password: 'micro1234',
        });
    const params = {
        headers: { 'Content-Type': 'application/json' }
    };

    const res = http.post(loginUrl, payload, params);

    const checkLogin = check(res, {
        'Login com sucesso (200)': (r) => r.status === 200,
        'Token extraído': (r) => r.json('token') !== undefined,
    });

    return { token: res.json('token') };
}


export default function (data) {
    const url = "https://servidor-local-center-1rnu.onrender.com/users"
    const params = {
        headers: {
            'Authorization': `Bearer ${data.token}`,
            'Content-Type': 'application/json',
        },
    };

    const res = http.get(`${BASE_URL}/api/servicos`, params);

    check(res, {
        'Resposta esperada (200 ou 503)': (r) => r.status === 200 || r.status === 503,
    });

    sleep(1);
}