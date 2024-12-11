
# Guia para Executar o Projeto

Este projeto é composto por um frontend em Next.js e um backend em Python, utilizando Docker para facilitar a execução de ambos os componentes. A seguir, você encontrará as instruções detalhadas sobre como executar o projeto localmente.

## Estrutura do Projeto

O projeto está organizado da seguinte maneira:

- `frontend/` - Contém o código do frontend (Next.js).
- Backend - Contém o código do backend em Python.
- `docker-compose.yml` - Arquivo para configurar e executar o backend com Docker.

## Executando o Frontend

O frontend é desenvolvido com Next.js. Para executá-lo localmente, siga os passos abaixo:

### Passo 1: Instalar as dependências

Acesse a pasta `frontend` e instale as dependências necessárias com o comando:

```bash
cd frontend
npm install
```

### Passo 2: Iniciar o servidor de desenvolvimento

Após a instalação das dependências, inicie o servidor de desenvolvimento com o comando:

```bash
npm run dev
```

Agora, o frontend estará disponível em `http://localhost:3000`.

## Executando o Backend

O backend está configurado para ser executado dentro de um container Docker, facilitando a configuração e execução do ambiente. Para executar o backend, siga os seguintes passos:

### Passo 1: Construir e subir o Docker

Na raiz do projeto, onde está localizado o arquivo `docker-compose.yml`, execute o seguinte comando:

```bash
docker-compose up --build
```

Este comando irá construir as imagens Docker necessárias e iniciar o backend. Após a execução, o backend estará disponível na porta configurada no `docker-compose.yml`.

## Conclusão

Agora você tem o frontend e o backend em execução localmente. Certifique-se de que ambos estão rodando corretamente e comece a desenvolver!

Se precisar de mais alguma coisa, fique à vontade para verificar a documentação do projeto ou abrir uma issue.
