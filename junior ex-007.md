# Exercício Final: Provocar a Falha do Pipeline

Não podemos confiar num alarme que nunca tocou. Vamos garantir que o GitHub consegue bloquear mau código.

1. Sabotar a API:
   Vão ao código da vossa rota `/api/servicos` e introduzam um atraso artificial (latência propositada) antes de devolver os dados, simulando um código mal otimizado:

```javascript
// Adicionar isto no início da rota para travar o código por 1 segundo (1000ms)
await new Promise((resolve) => setTimeout(resolve, 1000));
```

2. O Ataque:
   Façam um novo `git add`, `git commit -m "fix: adiciona lentidao propositada"` e `git push`. Vão ao separador Actions no GitHub.

3. Entreguem o diagnóstico:
   O que aconteceu no final da execução no separador Actions? O pipeline conseguiu detetar a vossa sabotagem? Que linha específica do relatório do k6 no terminal do GitHub fez com que o sistema bloqueasse a versão e ficasse vermelho?

Resposta:

No final da execução, o workflow no separador **Actions** falhou e ficou vermelho. O pipeline conseguiu detetar a sabotagem porque o atraso artificial de 1 segundo aumentou a latência da rota `/api/servicos`, fazendo o teste de carga do k6 ultrapassar o limite de tempo configurado.

A linha específica do relatório do k6 que indica o bloqueio foi a falha do threshold de duração das requisições:

```text
ERRO[...] thresholds on metrics 'http_req_duration' have been crossed
```

Também é possível ver o problema na métrica `http_req_duration`, onde o percentil 95 ficou acima do limite esperado, por exemplo:

```text
http_req_duration..............: ... p(95)=1s
```

Como o `p(95)` ficou maior do que o limite definido pelo teste, o k6 terminou com erro e o GitHub Actions bloqueou a versão.
