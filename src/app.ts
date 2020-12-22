import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('Typescript Node Template')
})

app.listen(6000, () => console.log('Server running on port 6000'))
