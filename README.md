# Plano Wi-fi   :zap: 

Desafio Wooza, Single Page Application para planos de wi-fi. 

## Tecnologias utilizadas 
* AngularJS 1.6
* JSHint
* CSSLint
* CSS 
* Jasmine 
* Karma
* Grunt
* NPM 5
* HTML5 

## Configurando ambiente 

1. Instalar o [node js](http://nodejs.org/)  
2. Clonar o repositorio [https://github.com/jacobsenanaizabel/celular-plano](https://github.com/jacobsenanaizabel/celular-plano)
3. Instalar as dependencias 
```bash
$ npm i 
```
4. Instalar o grunt 

```bash
$ npm install -g grunt
```
5. Instalar o grunt-cli 
```bash
$ npm install -g grunt-cli
```
6 . Servidor com o comando 
```bash
$ grunt alive 
```

> Para teste de unidade vá para a pasta 'test/unit' e use o comando 'karma start  karm.conf.js' :bowtie:

localhost:9001... e seja bem-vindo. 🎉


## Services
### Requests utilizados no sistema 

### Pega todas plataformas disponiveis 

| Field            | Value                                                                 |
|----------------- |-----------------------------------------------------------------------|
| **URL Template** | http://private-59658d-celulardireto2017.apiary-mock.com/plataformas   |
| **Method**       | GET                                                                   |
| **Security**     | public                                                                |


### Lista de planos disponiveis de acordo com a plataforma selecionada 

| Field            | Value                                                                 |
|----------------- |-----------------------------------------------------------------------|
| **URL Template** |http://private-59658d-celulardireto2017.apiary-mock.com/planos/{{plat}}|
| **Method**       | GET                                                                   |
| **Security**     | public                                                                |







