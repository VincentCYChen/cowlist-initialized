const express = require('express');
const app = express();
const port = 3000;
const models = require('./models');
const parser = require('body-parser');

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(express.static('./client/dist'));

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/api/cows', (req, res) =>
  models.readAll((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  })
);

app.post('/api/cows', (req, res) => {
  console.log('app.post', req.body);
  models.create(req.body, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).json(data);
    }
  });
});

app.put('/api/cows/:id', (req, res) => {
  models.update(req.body, req.params.id, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).json(data);
    }
  });
});

app.delete('/api/cows/:id', (req, res) => {
  models.delete(req.params.id, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json(data);
    }
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
