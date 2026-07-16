# Guia Prático - UF 3.2 (Aula 8)

## O Salto para a Nuvem: Infraestrutura Zero-Cost 🌍

- **Objetivo:** Resolver a falha na nossa pipeline de CI/CD conectando a API a uma Base de Dados real na nuvem. Em seguida, vamos abandonar o nosso _localhost_ e simular o deploy para um servidor remoto (VPS) utilizando ambientes gratuitos.

### Parte 1: O Resgate do CI/CD (A Base de Dados Live) 🟢

Na última aula, o nosso Docker correu no GitHub, mas o k6 falhou. Porquê? O GitHub levantou uma base de dados completamente **vazia**. Não existiam tabelas nem o nosso utilizador de testes. Precisamos de uma base de dados real, que viva na internet e mantenha os nossos dados.

#### Passo 1: O Servidor de Base de Dados (Neon.tech)

O **Supabase** é um serviço moderno de PostgreSQL _Serverless_ que é gratuito.

1. Acedam a [supabase] e façam login com a vossa conta GitHub.
2. Criem um novo projeto chamado `marketplace-live`.
3. No painel principal, copiem a vossa **Connection String** (vai ser algo como `postgresql://usuario:senha@ep-nome-xyz.neon.tech/neondb?sslmode=require`).

_(Atenção: A vossa base de dados está vazia! No terminal do vosso computador local, devem correr o comando de migração/sincronização do Prisma ou correr o vosso script SQL usando esta nova Connection String para criar as tabelas)._

#### Passo 2: O Cofre do GitHub (Secrets)

Para o robô do GitHub se ligar a esta nova base de dados, precisamos de lhe dar a chave.

1. Vão ao vosso repositório no GitHub > **Settings** > **Secrets and variables** > **Actions**.
2. Cliquem em **New repository secret**.
3. **Name:** `DATABASE_URL` | **Secret:** [Colem o URL do supabase]
4. Façam o mesmo para o `JWT_SECRET` (colem a chave secreta da vossa API).

#### Passo 3: Atualizar o YAML da Pipeline

Abram o vosso `.github/workflows/performance.yaml`. Vamos injetar as variáveis e dizer ao Docker para não levantar o serviço de base de dados local:

```yaml
- name: 🐳 Levantar API (Ligada à BD Live)
  env:
    DATABASE_URL: ${{ secrets.DATABASE_URL }}
    JWT_SECRET: ${{ secrets.JWT_SECRET }}
  # Passamos as variáveis para o contentor da API e levantamos apenas a API
  run: DATABASE_URL=$DATABASE_URL JWT_SECRET=$JWT_SECRET docker compose up -d api
```

Façam git push. O GitHub Actions vai finalmente conectar-se à BD na nuvem e o vosso pipeline vai ficar Verde!

### Parte 2: O Nosso Primeiro "VPS" (GitHub Codespaces) 🚀

Temos a base de dados na nuvem, mas a API continua presa no nosso computador local. Como não queremos pagar por um VPS (Servidor Virtual Privado) real neste laboratório, vamos usar uma ferramenta brutal que o GitHub nos dá gratuitamente: o GitHub Codespaces.

O Codespaces cria um servidor Linux (Ubuntu) real na nuvem, já com o Docker instalado, atribuído à vossa conta gratuitamente (até 120 horas por mês).

#### Passo 1: Criar o Servidor na Cloud

- Abram o vosso repositório da API no GitHub.

- Cliquem no botão verde <> Code.

- Mudem para o separador Codespaces.

- Cliquem em Create codespace on main.

O GitHub vai abrir um VS Code diretamente no navegador. O que estão a ver não é o vosso computador – é um servidor na Cloud!

#### Passo 2: O Deploy da Infraestrutura

O servidor já clonou o vosso código automaticamente. No terminal do Codespace (em baixo), vamos preparar as credenciais e levantar a API.

```bash
# 1. Criar o ficheiro .env com as credenciais (Usem o URL do Neon.tech)
echo "DATABASE_URL=postgresql://..." > .env
echo "JWT_SECRET=supersegredo" >> .env

# 2. Levantar a API no servidor remoto!
docker compose up -d api
```

#### Passo 3: Mostrar ao Mundo

Assim que o contentor arrancar no Codespace, precisamos de abrir a "porta" para a internet ver a nossa API.

- No VS Code do navegador, procurem o separador Ports (ao lado do Terminal).

- Vão ver a porta 8080 listada.

- Na coluna Visibility, cliquem em Private e mudem para Public.

- Na coluna Local Address, cliquem no ícone de "Globo" (Open in Browser) ou copiem o URL gerado (vai terminar em .github.dev).

Essa é a vossa API, a correr num servidor remoto, aberta para o mundo inteiro aceder! Podem enviar este link a um colega e ele conseguirá interagir com a vossa plataforma.

### Parte 3: Introdução à Orquestração de Contentores 🚢

Conseguimos simular a ida para a Cloud. Mas o que acontece se o vosso projeto crescer e tiverem de gerir 10 servidores destes ao mesmo tempo? Fazer git clone e docker compose up em todos eles à mão é impossível.

É aqui que entram os Orquestradores (os "Maestros" dos servidores):

- Kubernetes (K8s): O gigante da Google. Se um servidor falhar, o Kubernetes deteta e levanta a API noutro servidor automaticamente. É poderoso, mas extremamente complexo e caro de manter.

- Docker Swarm: A versão do Docker para juntar vários servidores. Mais simples, mas menos usado no mercado atual.

- PaaS Self-Hosted (Coolify / Dokploy): A solução moderna para startups.
  Instalamos este painel num VPS nosso, ligamos ao GitHub, e sempre que fazemos um push, ele atualiza a API, cria os certificados SSL de segurança e reinicia os contentores sozinho. É ter o poder da Cloud, mas no nosso próprio servidor.
