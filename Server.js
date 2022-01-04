 const express = require('express');
 const app = express();
 const routes = require('./routes');
 const path = require('path');
 const meuMiddleware = require('./src/middleware/middleware');


 app.use(express.urlencoded({extended: true}));
 app.use(express.static('./public'));
 app.use(meuMiddleware)

 app.set('views', path.resolve(__dirname, 'src', 'views'));
 app.set('view engine', 'ejs');
 app.use(routes);

app.listen(3000, ()=>{
    console.log('Aberto, na porta http://localhost:3000');
    console.log('Servidor sendo executado');
});