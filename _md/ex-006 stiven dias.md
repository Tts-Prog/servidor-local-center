# Exercício Final: Relatório de Tolerância a Falhas

Apliquem as duas defesas no código, façam docker compose up -d --build --force-recreate e repitam o teste do apagão.

Entreguem o diagnóstico:

1. O Que Aconteceu no 1º Teste (Sem Defesa):
   O contentor da API desligou-se ou o utilizador viu algum erro no navegador?
   Resposta: [API desligou-se ]

2. A Cura (Após a proteção):
   Durante o segundo apagão, a API continuou de pé? Qual foi a resposta e o Status Code que o k6 recebeu?
   Resposta: [API desligou-se,
    A API desligou-se durante o segundo apagão, e o k6 recebeu majoritariamente erros de conexão/timeouts, refletidos em 66,95% de falhas nos checks.
    ]

3. O Renascimento:
   Ainda com o ataque do k6 a decorrer na marca do 1 minuto e 30 segundos, escrevam docker compose start db no terminal. A API recuperou sozinha e voltou a dar Status 200 ao k6?
   Resposta: [api desligou-se e voltou a rodar nolmalmente]
