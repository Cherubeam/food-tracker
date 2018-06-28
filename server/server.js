const path = require('path')
const express = require('express')
const app = express()

const publicPath = path.join(__dirname, '../public');
const port = 3000

app.use(express.static(publicPath));

// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

app.listen(port, () => {
	console.log(`Server is up and running on port ${port}!`)
})
