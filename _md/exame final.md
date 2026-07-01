# Enunciado: Avaliação Prática Individual (Sessão 17)

**Módulo:** UF 3.1 - Gestão e Automação de Processos de Entrega Web
**Foco:** Deploy Multicloud (Render, Vercel, Google Cloud Shell) e Gestão de Variáveis de Ambiente.

### 🎯 O Desafio
Neste trabalho, terás de duplicar o projeto central (`servidor-local-center`) para a tua própria conta de GitHub e orquestrar o deploy dos seus componentes em diferentes plataformas Cloud. O objetivo é provar que consegues ligar uma Base de Dados, uma API e um Frontend em plataformas distintas, usando apenas Variáveis de Ambiente para a comunicação.

### ⚠️ Regra de Ouro (Fator Eliminatório)
**Nenhuma credencial pode estar escrita diretamente no código.** Todas as ligações (URLs de API e Base de Dados) têm de ser lidas através de variáveis de ambiente (`.env`). Projetos com passwords expostas no GitHub serão invalidados.

### 🛠️ Tarefas a Executar

**1. Preparação (GitHub)**
* Faz a duplicação (Fork/Clone) do repositório `servidor-local-center` para a tua conta do GitHub.
<!-- feito -->
**2. Base de Dados (Render)**
* Cria uma nova instância de PostgreSQL no Render (Plano Free).
* Guarda o **External Database URL** gerado. ????

**3. Deploy do Backend - Opção Cloud (Render)**
* Cria um Web Service no Render associado ao teu repositório.
* Configura o Root Directory para a pasta onde está a API (`servidor-local`).
* Adiciona a variável de ambiente da Base de Dados para conectar ao PostgreSQL criado no passo 2.

**4. Deploy do Backend - Opção Ephemeral (Google Cloud Shell)**
* Abre o Google Cloud Shell, clona o teu repositório e navega para a pasta do backend (`servidor-local`).
* Cria um ficheiro `.env` localmente no terminal com a ligação à Base de Dados do Render.
* Instala as dependências, inicia o servidor (`npm run start` ou PM2) e usa a funcionalidade "Web Preview" na porta da API para gerar o link temporário.
<!-- ? -->
**5. Deploy do Frontend (Vercel)**
* Importa o mesmo repositório na Vercel.
* Configura o Root Directory para a pasta do Frontend.
* Adiciona a variável de ambiente da API, apontando para o URL público do **Backend no Render** gerado no passo 3.

---

# Template de Entrega (Ficheiro `.md`)

*Copia o texto abaixo, preenche com os teus dados e links, guarda como `entrega_individual.md` e submete.*

--- 
**CORTAR AQUI - INÍCIO DO TEMPLATE DE ENTREGA**
---

# 🚀 Entrega de Projeto Individual - Deploy Multicloud

**Nome do Aluno:** [O teu nome completo]
**Data:** [Data da entrega]

---

## 1. Repositório (GitHub)
* **Link do Projeto Duplicado:** [Cola aqui o link do teu repositório servidor-local-center]
* **Branch Principal:** [Ex: main]

---

## 2. Links de Deploy

### Frontend (Vercel)
* **Link de Produção:** [Cola aqui o URL final do Frontend na Vercel]
* **Link de Preview (Dev):** [Cola aqui o URL de preview gerado pela Vercel]

### Backend / API (Render)
* **Link da API no Render:** [Cola aqui o URL público do Render. Ex: https://teu-backend.onrender.com]

### Backend / API (Google Cloud Shell)
* **Link do Web Preview:** [Cola aqui o URL temporário gerado pelo Google Cloud Shell na porta da API]
*(Nota: Este link é efémero, mas serve como prova de execução no ambiente do Google).*

---

## 3. Configuração de Variáveis de Ambiente (.env)
*(Passwords substituídas por ******** por segurança)*

### Variáveis do Frontend (Configuradas na Vercel)
```env
# Aponta obrigatoriamente para o Backend alojado no Render
NEXT_PUBLIC_API_URL=https://[teu-backend-no-render][.onrender.com/api](https://.onrender.com/api)