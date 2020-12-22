import express from 'express'

const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
  res.send('Typescript Node Template')
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
