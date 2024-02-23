const express = require('express');
const pool = require('../modules/pool');
const axios = require('axios');

const router = express.Router();

const API_KEY = process.env.API_KEY;

console.log('API_KEY:', API_KEY);

//url for endpoint
const BASE_URL_GIFS = 'api.giphy.com/v1/gifs/search';

//GET for DOM render??
router.get('/', (req, res) => {
  const queryText = `
    SELECT * FROM "categories"
      ORDER BY "name" ASC;
  `;
  pool
    .query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`Error on query ${error}`);
      res.sendStatus(500);
    });
});

//POST route for search endpoint
router.post('/search', (req, res) => {
  const { searchAPI } = req.body;
  // axios call and params
  axios
    //query
    .get(`https://${BASE_URL_GIFS}/?api_key=${API_KEY}&q=${searchAPI}&limit=15`)
    //success response
    .then((gifsResponse) => {
      console.log('SUCCESS', gifsResponse.data);
      //map API to filter out and minimize data points
      const apiResults = gifsResponse.data.data.map((imageData) => {
        return {
          id: imageData.id,
          url: imageData.images.original.url,
          alt: imageData.title,
        };
      });
      res.send(apiResults);
    })
    //catch errors
    .catch((error) => {
      console.log('OH NO!!!:', error);
      res.sendStatus(500);
    });
});

module.exports = router;
