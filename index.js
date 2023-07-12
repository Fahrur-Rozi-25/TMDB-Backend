const express = require('express');
const app = express();




const dotenv = require('dotenv');
dotenv.config();



const test = process.env.API
console.log(test);

const url = process.env.TMDB_URL+'/account/null';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: process.env.API_KEY_TMDB
  }
};


// const a = "Buka /data untuk melihat nya"

// app.get('/', (req, res) => {
//     res.send(a);
// });

app.get('/', (req, res) => {
  // Melakukan fetch ke URL yang diinginkan
  fetch(url, options)
    .then(res => res.json())
    .then(json => {
      // Mengirimkan response dengan data yang telah diparsing ke browser
      res.send(json);
    })
    .catch(err => {
      console.error('error:' + err);
      res.status(500).send('Error occurred');
    });
});


app.get('/data', (req, res) => {
  // Melakukan fetch ke URL yang diinginkan
  fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
    .then(res => res.json())
    .then(json => {
      // Mengirimkan response dengan data yang telah diparsing ke browser
      res.send(json);
    })
    .catch(err => {
      console.error('error:' + err);
      res.status(500).send('Error occurred');
    });
});
  

  app.listen(3000, () => {
    console.log('Server is listening on port 3000');
  });

  
  

