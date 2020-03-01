const express = require('express');
const app = express();
const port = 3000;
let models = require('./models');

app.use(express.json());
app.use(express.static('./client/dist'));

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/api/cows', (req, res) =>
  res.send(
    JSON.stringify([
      { name: 'Buttercup', description: '...' },
      { name: 'Daisy', description: '...' }
    ])
  )
);

app.post('/api/cows', (req, res) => {
  models.create(req.body, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).json(data);
    }
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
