const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

const API_KEY = process.env.API_KEY;

console.log('API_KEY:', API_KEY);

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

module.exports = router;
