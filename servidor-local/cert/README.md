# Certificado HTTPS de desenvolvimento

O servidor só usa HTTPS quando `NODE_ENV=development`. Nesse caso precisa de `server.key` e `server.cert` nesta pasta.

Estes ficheiros não estão no Git (a chave privada nunca deve ser publicada). Para os criar, na pasta `servidor-local/`:

```bash
openssl req -x509 -newkey rsa:2048 -nodes -days 365 \
  -keyout cert/server.key -out cert/server.cert -subj "/CN=localhost"
```
