// Importar o roteador...
const router = require('./router');

const express = require('express');
const app = express();

// Dizer para o express qual o template engine (ejs)
app.set('view engine', 'ejs');

// Dizer para o express qual é a pasta de arquivos estáticos
app.use(express.static('public'));

// Fazer uso do meu roteador
app.use('/', router);


app.listen(3000,()=>{console.log("Servidor escutando na porta 3000")})
