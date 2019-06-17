const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
var request = require('request');
const fetch = require('node-fetch');
const https = require('https');
const resNow = require('./response')
//console.log(resNow.data)

// console.log that my server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

app.get('/api/shops', (req, res) => {
    /* const URL = 'https://jsonplaceholder.typicode.com/photos';
   fetch(URL)
    .then(res => res.json())
    .then(data => {
        console.log('data',{data})
       res.send({ data });
    })
    .catch(err => {
       res.redirect('/error');
    }); */
    res.send({data:resNow.data})
});
app.get('/api/shops/:query', (req, res) => {
    var data = resNow.data
    var objSearch = data.filter(element=> element.name === req.params.query)
    res.send({data: objSearch} )
});