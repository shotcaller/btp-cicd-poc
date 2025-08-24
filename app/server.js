const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send('Hello World from SAP BTP CF via Github Actions. This is an update!')
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
