const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
var request = require('request');

const resNow = require('./response')
//console.log(resNow.data)

// console.log that my server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

app.get('/api/shops', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    if (req.query.query) {
      let name = req.query.query
   
      var data = resNow.data
      var objSearch = data.filter(element=> {
        return String(element.name).toLowerCase().includes(name.toLowerCase());
      })
   
      res.send({ data: objSearch })
    } else {
      res.send({ data: resNow.data })
    }
   });
   