const express = require('express')
const{MongoClient, ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const database = 'gigo-binance'

// MongoClient.connect(connectionURL,{useNewUrlParser: true}, () => {
//   if (error) {
//     return console.log('Unable to connect to Database')
//   }
//   console.log('Connected Correctly!')
// })

const axios = require('axios');
const url = 'https://api.binance.com/api/v3/ticker/24hr';
const app = express()

function loadPage() {
  axios.get(url)
  
    .then(response => {
      app.get('', (req, res) => {
        res.send(response.data)
        console.log(response.data)
      })
    })

    .catch (error => {
      console.log(error);
    })
  
  }    
setTimeout(loadPage, 5000)


app.listen(3000, () => {
  console.log('server is on port 3000')
})