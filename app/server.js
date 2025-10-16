const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  //Return a pretty UI message
  res.send(`
    <html>
      <head>
        <title>Hello World</title>
      </head>
      <body>
        <h1>Hello World from SAP BTP CF via Github Actions</h1>
        <p>This is an update!</p>
      </body>
    </html>
  `)
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
