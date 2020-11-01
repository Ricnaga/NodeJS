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
Antes de começar é necessário instalar algumas ferramentas, tais como um editor de códigos para realizar compilação dos mesmos. Os códigos desse repositório foi utilizado o [Visual Studio Code](https://code.visualstudio.com/), [NodeJS](https://nodejs.org/en/), [Git Bash](https://gitforwindows.org/) e [Docker](https://docs.docker.com/docker-for-windows/install-windows-home/). Após instalados, será necessário instalar o também o [Yarn](https://yarnpkg.com/) para que seja possível automatizar as instalações de todas as dependências que foram usadas nessa aplicação.

No terminal, realize a clonagem do repositório.\
$ git clone <https://github.com/Ricnaga/NodeJS> \
Acesse o projeto.\
$ cd NodeJS \
Execute o comando yarn para reaver todos as dependências instaladas dessa aplicação.

### <div align="center">MongoDB</div>
Com o docker instalado, abra o terminal e baixe a imagem do que contém o mongodb.\
$ docker pull mongo \
Após baixado, inicie o container baixado.\
$ docker run --name mongodb -p 27017:27017 -d mongo \
para ter certeza que o container foi iniciado, ao acessar o endereço localhost:27017 via navegador deve ocorrer a frase. \
"It look like you are trying to access MongoDB over http on the native drive port"\
Feito todos os passos, é hora de executar a aplicação.\
$ yarn svrun

## <div align="center">Tecnologias utilizadas<div>
- [NodeJS](https://nodejs.org/en/)
- [Git Bash](https://gitforwindows.org/)
- [Javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [ECMAscript](https://www.ecma-international.org/publications/standards/Standard.htm)
- [Yarn](https://yarnpkg.com/getting-started/install)
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