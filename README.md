# Documentação do Projeto React - StoreCar

## Visão Geral
O projeto StoreCar é uma aplicação web desenvolvida em ReactJS, utilizando Material UI para o design e Axios para fazer requisições HTTP. O objetivo da aplicação é fornecer uma plataforma para uma loja de venda de carros online, permitindo que os usuários visualizem carros ofertados e que os administradores gerenciem as ofertas através de um CRUD (Create, Read, Update, Delete).

## Configuração do Ambiente de Desenvolvimento
Antes de começar a desenvolver e executar o projeto, é necessário garantir que você tenha o Node.js e o npm (Node Package Manager) instalados em seu computador. Você pode baixá-los e instalá-los no site oficial do Node.js: [Node.js](https://nodejs.org/).

Após instalar o Node.js, você pode seguir os passos abaixo para configurar o ambiente de desenvolvimento:

1. Clone o repositório do projeto StoreCar do GitHub: [StoreCar GitHub Repository](https://github.com/ferreiranatan/carstore).

2. Navegue até o diretório raiz do projeto no seu terminal.

3. Execute o seguinte comando para instalar as dependências do projeto: `npm install`

## Inicialização do Servidor de Desenvolvimento
Depois de configurar o ambiente de desenvolvimento, você pode iniciar o servidor de desenvolvimento para executar a aplicação localmente. Siga os passos abaixo:

1. No diretório raiz do projeto, execute o seguinte comando: `npm start`

2. Isso iniciará o servidor de desenvolvimento e abrirá a aplicação no seu navegador padrão. Se o navegador não abrir automaticamente, você pode acessar a aplicação manualmente em `http://localhost:3000` (ou na porta que você especificou).

## Inicialização do Servidor JSON Server
Para fornecer dados à aplicação, você também precisa iniciar o servidor JSON Server. Siga os passos abaixo:

1. No diretório raiz do projeto, onde está localizado o arquivo `db.json`, execute o seguinte comando para instalar o JSON Server globalmente:  `npm install -g json-server`

2. Após a instalação, inicie o JSON Server executando o seguinte comando: `json-server --watch db.json --3001`

3. Isso iniciará o JSON Server e ele estará ouvindo na porta 3001 por padrão. Certifique-se de manter o terminal aberto enquanto estiver desenvolvendo e testando sua aplicação.

## Estrutura do Projeto
A estrutura do projeto é organizada da seguinte forma:

- `src/`: Contém o código-fonte da aplicação.
- `components/`: Pasta contendo componentes React reutilizáveis.
- `pages/`: Pasta contendo as páginas principais da aplicação.
- `services/`: Pasta contendo arquivos de serviços para interação com APIs externas.
- `App.js`: Arquivo principal que configura as rotas da aplicação.

## Desenvolvimento de Recursos
Durante o desenvolvimento do projeto, os seguintes recursos foram implementados:

1. **Visualização de Carros Ofertados:**
- A página inicial permite que os usuários visualizem carros ofertados.
- Os carros são exibidos em formato de lista ou grade, com informações como marca, modelo, ano e preço.
- Os usuários podem clicar em um carro para visualizar mais detalhes.

2. **Administração de Ofertas (CRUD):**
- A página de administração permite que os administradores gerenciem as ofertas de carros.
- Os administradores podem adicionar, editar e excluir ofertas de carros.
- As ofertas são exibidas em uma tabela, onde os administradores podem filtrar por texto e realizar ações de edição e exclusão.

## Bibliotecas e Ferramentas Utilizadas
O projeto StoreCar utiliza as seguintes bibliotecas e ferramentas principais:

- **ReactJS**: Biblioteca JavaScript para criar interfaces de usuário.
- **Material UI**: Biblioteca de componentes React para um design visual atraente e responsivo.
- **Axios**: Cliente HTTP baseado em Promises para fazer requisições para APIs externas.
- **JSON Server**: Pacote para criar um servidor RESTfull com base em um arquivo JSON.

## Autor
Este projeto foi desenvolvido por [Natanael Ferreira](https://www.linkedin.com/in/natanael-ferreira-67b86268/) e está disponível sob a [Licença MIT](LICENSE).
