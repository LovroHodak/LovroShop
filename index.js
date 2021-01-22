require('dotenv').config()
require('./config/db.config')

const express = require('express')
const app = express()

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server LH running on port ${PORT}`))
