const express = require('express')
const bodyParser = require('body-parser')

const app = express()

// Parse JSON and url-encoded bodies
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Route to handle POST requests
app.post('/v1/product-stocks/bulk-update', (req, res) => {
  console.log('Received POST request:', req.body)
  console.log('Total products:', req.body.stocks?.length || 0)

  // Send JSON response
  res.status(200).json({
    message: 'Success'
  })
})

app.post('/v1/product-stocks/bulk-get', (req, res) => {
  const skus = req.body.sku_list
  console.log('Received POST request:', req.body)
  console.log('Total products:', skus.length)

  const master_sku = {
    "BMM-NQP": 20,
    "KMM-NQ3": 30,
    "MMM-BES-NPV": 40,
    "AYAM-2023-11": 15,
    "TELUR-2023-11": 20,
  }

  const mockResponse = skus.map((sku) => ({ sku, stock: master_sku[sku] != undefined ? master_sku[sku] : 0 }))

  res.status(200).send({
    stocks: mockResponse
  })
})

app.get('/', (req, res) => {
  res.send('Hey this is my API running 🥳')
})

// Start the server
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
