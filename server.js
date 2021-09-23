const express = require('express');
const app = express();
const port = 3000;

// database
const budgets = require('./models/budget.js');

// index
app.get('/budgets', (req, res) => {
    res.render('index.ejs', {allBudgets: budgets});
});

// show
app.get('/budgets/:index', (req, res) =>{
    res.render('show.ejs', {
        budgets: budgets[req.params.index]
    });
});



app.listen(port, () =>{
    console.log('hi listening to' + port);
});