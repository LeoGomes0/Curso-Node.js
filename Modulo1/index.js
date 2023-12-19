const express = require('express');

const app = express();

// Query params = ?nome=NodeJS
// Route params = /curso/2
// Request Body = { nome: 'Nodejs', tipo: 'Backend' }

//localhost:3000/curso
app.get('/curso/:id', (req, res) => {

    //Usando Query params ->
    //const nome = req.query.nome;
    //return res.json({ curso: `Aprendendo ${nome}` });

    const id = req.params.id;

    return res.json({ curso: `Curso: ${id}` })
});

app.listen(3000);