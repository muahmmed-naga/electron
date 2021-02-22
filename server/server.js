const app = require('./app')

// Server
const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Running at  ${PORT}`)
})
