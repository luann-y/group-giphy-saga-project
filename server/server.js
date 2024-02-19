const API_KEY = process.env.API_KEY;

console.log('API_KEY:', API_KEY);

const express = require('express');
const app = express();
const favoriteRouter = require('./routes/favorite.router');
const categoryRouter = require('./routes/category.router');
const PORT = process.env.PORT || 5001;

/** ---------- MIDDLEWARE ---------- **/
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
app.use('/api/favorites', favoriteRouter);
app.use('/api/categories', categoryRouter);

/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
