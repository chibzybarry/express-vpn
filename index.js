const express = require('express'); //import express

const app = express(); //create express app
const port = 3000; //set port


// define routes
app.get('/', (req, res) => {
    res.sendFile('index.html', {root: __dirname});
});

app.get('/about', (req, res) => {
    res.sendFile('about.html', {root: __dirname});
})
app.get('/contact', (req, res) => {
    res.sendFile('contact.html', {root: __dirname});
});

app.get('/services', (req, res) => {
    res.sendFile('services.html', {root: __dirname});
});


// listen to the port
app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`);
})