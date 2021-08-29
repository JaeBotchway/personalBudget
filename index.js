const express = require('express');
const app = express();
const PORT = 3001;

const envelope = require('./src/controllers/routes/envelope')


app.get('/', (req, res) => {
    res.send('Hello World!')
  })

  app.use(express.json())
  app.use(express.urlencoded({ extended: false}))

  app.use('/envelopes', envelope)
  

  app.listen(PORT, () => {
    console.log(`Listening at ${PORT}`)
  });