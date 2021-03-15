const express = require('express')
const config = require('config')

const app = express()

const PORT  = config.get('PORT')

app.listen(5000, () => console.log(`App has been started on port ${PORT}`))