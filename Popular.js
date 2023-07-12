// const fetch = require('node-fetch');


const express = require('express');
const app = express();

const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYmM1ZTgwYjg3Mzg4MmY4Nzk5ODJjOTgzNzFjODNjNiIsInN1YiI6IjY0YWJmYWEwZTI0YjkzMDBjNmFmZGJiZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.C92AIRmURLE3BvtGZoritqbRYUilboN9tKlOZlQQl6Y'
  }
};


const a = "Buka /data untuk melihat nya"

app.get('/', (req, res) => {
    res.send(a);
});


app.listen(3000, () => {
    console.log('Server is listening on port 3000');
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