# Enunciado: Avaliação Prática Individual (Sessão 17)

## Módulo: UF 3.1 - Gestão e Automação de Processos de Entrega Web

## Duração: 4 horas

## Foco: CI/CD, Gestão de Ambientes (Produção vs. Preview) e Segurança de Credenciais.

## 🎯 O Desafio

Cada aluno deve demonstrar autonomia na configuração de um pipeline de entrega contínua para o ecossistema do projeto. Terás de configurar os repositórios do Gulugulu (Frontend) e do servidor-local-center (Backend), garantindo que a aplicação é publicada automaticamente com base na branch em que estás a trabalhar.

## ⚠️ Regra de Ouro (Fator Eliminatório)

Nenhuma credencial pode estar hardcoded (escrita diretamente) no código-fonte. As ligações à Base de Dados e os URLs da API têm de ser obrigatoriamente lidos através de variáveis de ambiente (process.env). Se o código contiver passwords ou chaves de API visíveis nos ficheiros enviados para o GitHub, o projeto será invalidado por quebra de segurança (DevSecOps).

## 🛠️ Tarefas a Executar

- Preparação dos Repositórios: Garante que o código do Gulugulu e do servidor-local-center estão no teu GitHub, na branch correta.

- Segurança: Substitui qualquer URL estático ou credencial no código por variáveis de ambiente.

- Deploy (Vercel): Configura o deploy de ambos os projetos na Vercel.

- Gestão de Ambientes: Configura o teu pipeline para gerar dois links distintos:
- Produção (Prod): O link oficial gerado a partir da branch principal (main).

- Preview (Dev): O link de testes gerado automaticamente pela Vercel quando usas uma branch de desenvolvimento ou abres um Pull Request.

- Entrega: Preencher o template .md fornecido e submeter na plataforma da escola.

# Template de Entrega (Ficheiro .md)

Fornece este bloco de texto aos alunos. Eles devem copiar, preencher com os seus dados, guardar como entrega_nome_apelido.md e entregar.

## 🚀 Entrega de Projeto Individual - UF 3.1

**Nome do Aluno:** [O teu nome completo]
**Data:** [Data da entrega]

---

## 1. Repositórios (GitHub)

_Os links diretos para o código-fonte._

- **Repositório Gulugulu (Frontend):** [Cola aqui o link do GitHub]
- **Repositório servidor-local-center (Backend):** [Cola aqui o link do GitHub]
- **Branch utilizada para Produção:** [Ex: main]
- **Branch utilizada para Preview/Dev:** [Ex: develop ou nome da feature branch]

---

## 2. Ambientes de Deploy (Vercel)

_Os links públicos onde a aplicação está a correr._

### Gulugulu (Frontend)

- **Link de Produção (Prod):** [Cola aqui o URL final da Vercel]
- **Link de Preview (Dev):** [Cola aqui o URL de preview gerado pela Vercel]

### servidor-local-center (Backend / API)

- **Link de Produção (Prod):** [Cola aqui o URL final da API]
- **Link de Preview (Dev):** [Cola aqui o URL de preview gerado pela Vercel]

---

## 3. Variáveis de Ambiente (.env)

_Declaração das chaves de ambiente utilizadas nos projetos. **Atenção:** Por questões de segurança, substitui as passwords reais por "**\*\*\*\***", mostrando apenas a estrutura das variáveis._

### Variáveis do Frontend (Gulugulu)

```env
NEXT_PUBLIC_API_URL=https://[teu-link-do-backend-na-vercel].vercel.app/api
# Adiciona outras variáveis do frontend aqui, se existirem
```
