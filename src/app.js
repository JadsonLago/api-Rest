import express from 'express'
const app = express()


// Rota GET padrão
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/curso', (req, res) => {
    res.send('Este é o curso de NodeJs!')
  })

export default app  


