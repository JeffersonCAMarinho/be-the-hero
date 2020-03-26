const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

/**
 * Rota/Recurso
 */
/**
 * Metodos HTTP:
 * 
 * GET: Buscar/Listar uma informacao do back-end
 * POST: Criar uma informacao no back-end
 * PUT: Alterar uma informacao no back-end
 * DELETE: Deletar uma informacao no back-end
 */
/**
 * Tipos de parametros:
 * 
 * Query Params: Parametros nomeados enviados na rota apos "?" (filtros, paginacao)
 * Route DB, CouchDB, etc
 */
/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users).select('*').where()
 */

