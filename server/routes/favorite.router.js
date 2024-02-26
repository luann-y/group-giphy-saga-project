const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/favorites', (req, res) => {
  res.sendStatus(200);
});

// add a new favorite
router.post('/', (req, res) => {
  console.log('in router post++++');
  const id=req.body.id;
  const name = req.body.name;
  const url=req.body.url;
  const queryText = 'INSERT INTO favorites (id, name, url) VALUES ($1, $2, $3)'

  pool.query(queryText, [id, name, url])
    .then(result => {
      res.sendStatus(201)
    })
    .catch(error => {
      console.error('ERROR ADDING FAVORITE', error);
      res.sendStatus(500);
    });
});

// update a favorite's associated category
router.put('/favorites/:id', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  res.sendStatus(200);
});

// delete a favorite
router.delete('/:id', (req, res) => {
  const favoriteId = req.params.id;
  const queryText = 'DELETE FROM favorites WHERE id = $1';

  pool.query(queryText, [favoriteId])
    .then(() => {
      res.sendStatus(200);
    })
    .catch(error => {
      console.error("++++error deleting favorite:", error);
      res.sendStatus(500);
    });
});

module.exports = router;