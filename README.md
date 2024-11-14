# Tests API locale

## initialisation du projet

```sh
mkdir api-rest-example
cd api-rest-example
npm init -y

npm install express
```

## Lancement de l'API

```sh
node server.js
```

## Appels de l'API

```sh
node ./api-test/get/articles.js
node ./api-test/get/articles{id}.js
node ./api-test/post/articles.js
node ./api-test/put/articles{id}.js
node ./api-test/delete/articles{id}.js
```

## Adresse sur les autres appareils

Lancer `ipconfig` dans un terminal et récupérer l'IPv4 de **Carte réseau sans fil Connexion au réseau local\* 1**. \
L'adresse sera alors http://255.255.255.255:3000
