const express = require('express');
const app =  express();
app.use(express.json());

// Importamos el router de los libros
const librosRouter = require('./routes/libros');

// Importamos el Middleware Error Handler 
const errorHandler = require ('./middlewares/errorHandler');

app.use('/libros', librosRouter);
app.use(errorHandler);
app.listen(3000, () =>{
    console.log('Servidor iniciiiado en el puerto 3000')
})