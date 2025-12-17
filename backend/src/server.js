const express = require('express')
const app = express()

app.get('/health', (req, res) => {
  res.send('ok')
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
