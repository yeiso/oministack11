const express = require('express');
const cors = require('cors')
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/*
* METODOS HTTP
*GET: Busca dado backend
*POST: Insere dado backend
*PUT: Altera dado backend
*DELETE: Deleta dado backend
*/

/*
*   PARAMETROS
*Querry Params: parametros enviados na rota, apos '?' (filtros / paginacao)
*exem querry: /user?name=Gabs
*Route Params: parametros utilizados para identificar recursos
*exem route: /user/:id
*Request Body: corpo da requisição - para criar ou alterar recursos
*
*/



app.listen(3333);