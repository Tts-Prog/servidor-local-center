# Exercício Prático: Relatório Básico de Performance (Baseline)

**Objetivo:** Medir a latência do sistema sob tráfego humano e correlacionar o tempo de resposta sentido pelo utilizador no Frontend com o consumo de recursos no Backend.

### 🛠️ Metodologia (Como executar o teste)

**Para a Parte 1 (Frontend):**

1. Abre o Frontend da aplicação (Vercel) no Google Chrome.
2. Clica com o botão direito, escolhe **Inspecionar (Inspect)** e vai ao separador **Network (Rede)**.
3. Garante que a opção "Disable cache" está ativa.
4. Executa as ações pedidas na tabela e anota o tempo exato (em milissegundos - _ms_) que o pedido HTTP demorou a ser concluído.

**Para a Parte 2 (Backend):**

1. Abre um novo separador no navegador e acede à rota de monitorização da tua API (Ex: `https://[teu-backend].onrender.com/status`).
2. Fica a observar os gráficos de CPU e Memória.
3. Executa as ações no Frontend e regista os valores de pico que o servidor atingiu no painel de monitorização.

---

### 📋 TEMPLATE DE ENTREGA (Preencher os campos abaixo)

**Nome do Aluno/Grupo:** [ Stiven Delgado Dias]
**URL do Frontend:** [ https://servidor-local-center-three.vercel.app ]
**URL do Status Monitor (Backend):** [ https://servidor-local-center-backend-deer.onrender.com/status ]

#### PARTE 1: Latência no Frontend (Browser Network Tab)

_Mede o tempo que o pedido demora a viajar desde o navegador até ao Render e voltar._

| Rota / Ação | Cenário                                  | Status Code esperado | Tempo de Resposta (ms) |
| :---------- | :--------------------------------------- | :------------------- | :--------------------- |
| `/login`    | **Dados Corretos** (Credenciais válidas) | 200 OK               | [ 447 ms. ] |
| `/login`    | **Dados Errados** (Password incorreta)   | 400 ou 401           | [ 350 ms. ] |
| `/registro` | **Dados Corretos** (Novo utilizador)     | 201 Created          | [ 264 ms. ] |
| `/registro` | **Dados Errados** (Email já existente)   | 400 ou 409           | [ ] |

#### PARTE 2: Saúde do Servidor (Express Status Monitor)

_Observa o comportamento do servidor no momento exato em que fazes os pedidos acima._

| Métrica Observada                        | Valor em Repouso (Antes do teste) | Valor de Pico (Durante os pedidos) |
| :--------------------------------------- | :-------------------------------- | :--------------------------------- |
| **Consumo de Memória (RAM)**             | [93 MB]            | [95.2 MB]             |
| **Uso de CPU (%)**                       | [ 0% ]               | [ 1% ]               |
| **Tempo de Resposta (médio no gráfico)** | [2.51ms]             | [0.81ms]             |

#### PARTE 3: Análise e Conclusão

_(Responde de forma breve às seguintes questões com base nos dados que recolheste)_

1. **Análise de Erros vs. Sucesso:** Notaste alguma diferença significativa de tempo entre um Login com sucesso e um Login falhado? Se sim, porquê? _(Dica: Pensa no trabalho que a Base de Dados ou a encriptação Bcrypt tem de fazer num cenário vs. noutro)._
   - **Resposta:** [Sim, o login com sucesso demorou um tempo maior]

2. **Gargalo de Recursos:** Qual foi o recurso do servidor que mais sofreu alteração durante o registo de um novo utilizador: a Memória RAM ou o CPU?
   - **Resposta:** [A memória RAM]
