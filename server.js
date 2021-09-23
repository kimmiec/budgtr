const express = require('express');
const app = express();
const port = 3000;

// database
const budgets = require('./models/budget.js');

// index
app.get('/budgets', (req, res) => {
    res.render('index.ejs', {allBudgets: budgets});
});

// new 
app.get('/budgets/new', (req, res) =>{
    res.render('new.ejs');
});

// create
app.post('/budgets', (req, res) => {
    console.log('hi');
});

// show
app.get('/budgets/:index', (req, res) =>{
    res.render('show.ejs', {
        budget: budgets[req.params.index]
    });
});



app.listen(port, () =>{
    console.log('hi listening to' + port);
});