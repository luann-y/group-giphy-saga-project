const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  const queryText = `
    SELECT * FROM "favorites"
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

// add a new favorite
router.post('/', (req, res) => {
  console.log('in router post++++');
  const giphy_id = req.body.id;
  const name = req.body.name;
  const url = req.body.url;
  const queryText =
    'INSERT INTO favorites (giphy_id, name, url) VALUES ($1, $2, $3)';

  pool
    .query(queryText, [giphy_id, name, url])
    .then((result) => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.error('ERROR ADDING FAVORITE', error);
      res.sendStatus(500);
    });
});

// update a favorite's associated category
router.put('/:id', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  res.sendStatus(200);
});

// delete a favorite
router.delete('/:id', (req, res) => {
  const giphy_id = req.params.id;
  const queryText = 'DELETE FROM favorites WHERE giphy_id = $1';

  pool
    .query(queryText, [giphy_id])
    .then(() => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.error('++++error deleting favorite:', error);
      res.sendStatus(500);
    });
});

module.exports = router;
