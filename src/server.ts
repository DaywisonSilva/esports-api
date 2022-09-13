import express from 'express'

const app = express()

app.listen(3000, () => {
  console.log('listen on port 3000')
})

app.use(express.json())

app.get('/', (_, res) => {
  return res.send('Hello')
})
