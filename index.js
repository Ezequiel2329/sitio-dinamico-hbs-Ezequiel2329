const express = require('express');
const hbs = require('hbs');

const app = express();
app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials/');

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res)=>{
    res.render('index', {
        autor: 'Ezequiel Vera A.',
        gg: '4°E',
        year: new Date().getFullYear(),
        title: 'Inicio'
    });
});

app.get('/pintor1', (req, res)=>{
    res.render('pintor1', {
        autor: 'Ezequiel Vera A.',
        gg: '4°E',
        year: new Date().getFullYear(),
        title: 'Rembrandt Harmenszoon van Rijn'
    });
});
app.get('/pintor2', (req, res)=>{
    res.render('pintor2', {
        autor: 'Ezequiel Vera A.',
        gg: '4°E',
        year: new Date().getFullYear(),
        title: 'Raffaello Sanzio'
    });
});

app.get('/pintor3', (req, res)=>{
    res.render('pintor3', {
        autor: 'Ezequiel Vera A.',
        gg: '4°E',
        year: new Date().getFullYear(),
        title: 'John Singer Sargent'
    });
});

app.get('/pintor4', (req, res)=>{
    res.render('pintor4', {
        autor: 'Ezequiel Vera A.',
        gg: '4°E',
        year: new Date().getFullYear(),
        title: 'Juan Gris'
    });
});

app.listen(3000, ()=>{
    console.log('Escuchando el puerto 3000');
});