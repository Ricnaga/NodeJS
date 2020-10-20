#### <div align="right">- Projeto Finalizado <div>
# <div align="center">NodeJS<div>
## <div align="center">Projeto criado com intuito de exercitar a tecnologia Nodejs<div>
### <div align="center">Sumário <div>
### <div align="center">================= <div>
<!--ts-->
   - [Requisitos](#Requisitos)
   - [Tecnologias utilizadas](#tecnologias-utilizadas)
   - [Autor](#autor)
   - [Licença](#Licença)
<!--te-->
## <div align="center">Requisitos<div>
Antes de começar é necessário instalar algumas ferramentas, tais como um editor de códigos para realizar compilação dos mesmos. Os códigos desse repositório foi utilizado o [Visual Studio Code](https://code.visualstudio.com/), [NodeJS](https://nodejs.org/en/), [Git Bash](https://gitforwindows.org/) e [Docker](https://docs.docker.com/docker-for-windows/install-windows-home/). Após instalados, no prompt de comando será necessário instalar as seguintes dependências.\
OBS:Todas as tecnologias e dependências serão instaladas via prompt de comando (bash ou cmd) e todas foram instaladas a partir da pasta raíz do repositório.

- [Express.js](#express)
- [Nodemon](#nodemon)
- [MongoDB e dependências](#mongodb)
- [Cors](#Cors)


### <div align="center">Express</div>
Clone este repositório: git clone <https://github.com/Ricnaga/NodeJS> \
Acesse o projeto: cd NodeJS \
Inicie um projeto: npm init -y \
Ainda na raíz será necessário entrar com o comando abaixo para instalar o [Express](https://expressjs.com/pt-br/starter/installing.html): \
npm install express \

### <div align="center">Nodemon</div>
Após instalado o Express, é necessário instalar o monitorador [Nodemon](https://nodemon.io/): \
npm install nodemon -D \

### <div align="center">MongoDB</div>
Com o docker instalar, abra o terminal e baixe a imagem do que contém o mongodb.\
docker pull mongo \
Após baixado, inicie o container baixado.\
docker run --name mongodb -p 27017:27017 -d mongo \
para ter certeza que o container foi iniciado, ao acessar o endereço localhost:27017 via navegador deve ocorrer a frase. \
"It look like you are trying to access MongoDB over http on the native drive port"\
Agora instale as seguintes dependências do mongodb para o projeto não ocorre erros de funcionamento.
npm install mongoose \
npm install mongoose-paginate \
npm install require-dir 

### <div align="center">Cors</div>
Após instalado o banco de dados e suas dependências, é necessário instalar o Cors.\
npm install cors

## <div align="center">Tecnologias utilizadas<div>
- [NodeJS](https://nodejs.org/en/)
- [Git Bash](https://gitforwindows.org/)
- [Javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [ECMAscript](https://www.ecma-international.org/publications/standards/Standard.htm)
- [Express](https://expressjs.com/pt-br/starter/installing.html)
- [Nodemon](https://nodemon.io/)
- [Mongoose](https://mongoosejs.com/)
- [Cors](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Controle_Acesso_CORS)
- [Docker](https://docs.docker.com/docker-for-windows/install-windows-home/)


## <div align="center">Autor<div>
Exercício desenvolvido pela equipe [Rocketseat](https://rocketseat.com.br/), realizados por minha pessoa :) \
Gostou? tem alguma sugestão de melhoria? por favor, entre em contato e ja aproveita e me adiciona \
<a href="https://www.linkedin.com/in/ricardo-nagatomy-56553254"><img src="https://img.shields.io/badge/-RicardoNaga-blue?style=flat-square&logo=Linkedin&logoColor=white"></a>
<a href="https://app.rocketseat.com.br/me/ricardo-nagatomy-08130"><img src="https://img.shields.io/badge/-Rocketseat-000?style=flat-square&logo=&logoColor=white"></a>

## <div align="center">Licença<div>

![GitHub](https://img.shields.io/github/license/Ricnaga/NodeJS)