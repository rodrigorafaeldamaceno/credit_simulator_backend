const PORT = 3333

const express = require('express')

const app = express()
app.disable('X-Powered-By')

app.get('/', (req, res) => {
  res.send({ "status": "ok" })
})

app.listen(PORT)