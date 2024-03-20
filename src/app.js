const express = require('express')
const app = express()
const port = 3000

// Rota GET padrão
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/curso', (req, res) => {
    res.send('Este é o curso de NodeJs!')
  })

app.listen(port, () => {
  console.log(`Example app listening on  port http://localhost:${port}`)
})