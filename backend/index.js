require('dotenv').config()
require('./config/db.config')

const express = require('express')
const app = express()

const cors = require('cors')
app.use(cors({
  credentials: true, 
  origin: ['http://localhost:3000']
}))

const productRoutes = require('./routes/productRoutes')
app.use('/api', productRoutes)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server LH running on port ${PORT}`))
