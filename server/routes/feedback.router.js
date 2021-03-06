const router = require('express').Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
  const query = `
    SELECT *
    FROM "feedback";
  `;
  pool.query(query)
    .then((results) => {
      res.send(results.rows);
    })
    .catch((error) => {
      res.sendStatus(500);
      console.log(error);
    })
})

router.post('/', (req, res) => {
  const query = `
    INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4);
  `;
  pool.query(query, [req.body.feeling, req.body.understanding, req.body.supported, req.body.comments])
    .then(() => {
      res.sendStatus(201);
    })
    .catch((error) => {
      res.sendStatus(500);
      console.log(error);
    })
})

router.delete('/:id', (req, res) => {
  const query = `
    DELETE FROM "feedback"
    WHERE "id" = $1;
  `;
  pool.query(query, [req.params.id])
    .then(() => {
      res.sendStatus(200);
    })
    .catch((error) => {
      res.sendStatus(500);
      console.log(error);
    })
})

module.exports = router;