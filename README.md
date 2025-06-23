# TaskMasterAPI

Um gerenciador de tarefas full stack, com backend em .NET 8 e frontend em React + TypeScript. Permite criar, listar, remover e marcar tarefas como concluídas, com interface responsiva e API RESTful documentada via Swagger.

## Sumário

- [Visão Geral](#visão-geral)
- [Tecnologias](#tecnologias)
- [Instalação](#instalação)
- [Uso](#uso)
- [Scripts principais](#scripts-principais)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Visão Geral

O TaskMasterAPI é uma aplicação para gerenciamento de tarefas (to-do list), projetada para estudos, testes e pequenas implantações. O backend utiliza um banco de dados em memória para facilitar o desenvolvimento. O frontend se comunica via REST com a API.

## Tecnologias

- **Backend:** .NET 8, Entity Framework Core, Swagger
- **Frontend:** React 18, TypeScript, CSS
- **Ferramentas:** Git, Postman, npm

## Instalação

### Pré-requisitos

- [.NET 8 SDK](https://dotnet.microsoft.com/download)
- [Node.js e npm](https://nodejs.org/)
- Git

### Passos

1. Clone o repositório:
   ```bash
   git clone https://github.com/f-claudiosena/TaskMasterAPI.git
   cd TaskMasterAPI
   ```

2. Instale as dependências do frontend:
   ```bash
   cd client
   npm install
   cd ..
   ```

## Uso

### Backend (.NET 8)

No diretório raiz, rode:

```bash
cd SimpleTodoApi
dotnet run
```

- Acesse o Swagger em: `https://localhost:5001/swagger` (porta pode variar)
- O backend usa banco em memória (os dados são resetados ao reiniciar).

### Frontend (React)

Em outro terminal/aba, rode:

```bash
cd client
npm start
```

- Acesse [http://localhost:3000](http://localhost:3000)
- O frontend consome a API via `/api/todos`

## Scripts principais

No diretório `client`:

- `npm start`: roda o frontend em modo desenvolvimento
- `npm test`: executa testes do frontend
- `npm run build`: gera build de produção do frontend

No diretório `SimpleTodoApi`:

- `dotnet run`: executa o backend em modo desenvolvimento

## Estrutura do Projeto

```
TaskMasterAPI/
├── SimpleTodoApi/   # Backend .NET 8
│   ├── Controllers/
│   ├── Data/
│   ├── Models/
│   └── Program.cs
├── client/          # Frontend React
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── tsconfig.json
├── README.md
└── requirements.txt  # (Node/Python apenas se necessário)
```

## Contribuição

1. Fork este repositório
2. Crie sua branch (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'feat: nova feature'`)
4. Faça push para sua branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.
