const path = require('path')
const express = require('express')
const app = express()

const PORT = +process.env.PORT || 3000

app.use(express.static(path.resolve(__dirname, 'src')))

app.listen(PORT, () => {
  console.log(`Server started at "http://0.0.0.0:${PORT}/".`)
})
