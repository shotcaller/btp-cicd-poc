const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  //Return a pretty UI message, with good styling
  res.send('<h1 style="color:blue;text-align:center;">Welcome to the CAP Sample Application!</h1><p style="text-align:center;">This is a simple Express server running on port ' + port + '.</p>')
})


app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
