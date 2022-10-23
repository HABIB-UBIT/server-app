import express from 'express'
const app = express()
const port = 3000

app.get('/water', (req, res) => {
    console.log(`${req.ip} Is asking for water`)
  res.send('Hello Water!')
})
app.get('/food', (req, res) => {
    console.log(`${req.ip} Is asking for food`)
  res.send('Hello food!')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})