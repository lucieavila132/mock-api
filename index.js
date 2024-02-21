const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const categoryAttributes = [
  {
    attribute_id: 100465,
    original_attribute_name: "Storage Capacity",
    display_attribute_name: "Kapasitas Penyimpanan",
    is_mandatory: true,
    input_validation_type: "FLOAT_TYPE",
    format_type: "QUANTITATIVE",
    input_type: "COMBO_BOX",
    attribute_unit: [
      "GB",
      "TB"
    ],
    attribute_value_list: [
      {
        value_id: 5161,
        original_value_name: "512",
        display_value_name: "512GB",
        value_unit: "GB"
      },
      {
        value_id: 5162,
        original_value_name: "256",
        display_value_name: "256GB",
        value_unit: "GB"
      },
      {
        value_id: 5163,
        original_value_name: "64",
        display_value_name: "64GB",
        value_unit: "GB"
      },
      {
        value_id: 5164,
        original_value_name: "32",
        display_value_name: "32GB",
        value_unit: "GB"
      },
      {
        value_id: 5167,
        original_value_name: "128",
        display_value_name: "128GB",
        value_unit: "GB"
      }
    ],
    max_input_value_number: 1
  },
  {
    attribute_id: 100370,
    original_attribute_name: "Warranty Type",
    display_attribute_name: "Jenis Garansi",
    is_mandatory: true,
    input_validation_type: "STRING_TYPE",
    format_type: "NORMAL",
    input_type: "COMBO_BOX",
    attribute_unit: [],
    attribute_value_list: [
      {
        value_id: 2397,
        original_value_name: "International Warranty",
        display_value_name: "Garansi Internasional"
      },
      {
        value_id: 2419,
        original_value_name: "Manufacturer Warranty",
        display_value_name: "Garansi Produsen"
      },
      {
        value_id: 2437,
        original_value_name: "Supplier Warranty",
        display_value_name: "Garansi Supplier"
      },
      {
        value_id: 5576,
        original_value_name: "No Warranty",
        display_value_name: "Tidak Garansi"
      }
    ],
    max_input_value_number: 1
  },
  {
    attribute_id: 100121,
    original_attribute_name: "Warranty Duration",
    display_attribute_name: "Masa Garansi",
    is_mandatory: true,
    input_validation_type: "STRING_TYPE",
    format_type: "NORMAL",
    input_type: "COMBO_BOX",
    attribute_unit: [],
    attribute_value_list: [
      {
        value_id: 776,
        original_value_name: "1 Month",
        display_value_name: "1 Bulan"
      },
      {
        value_id: 789,
        original_value_name: "2 Months",
        display_value_name: "2 Bulan"
      },
      {
        value_id: 799,
        original_value_name: "3 Months",
        display_value_name: "3 Bulan"
      },
      {
        value_id: 810,
        original_value_name: "6 Months",
        display_value_name: "6 Bulan"
      },
      {
        value_id: 822,
        original_value_name: "12 Months",
        display_value_name: "12 Bulan"
      },
      {
        value_id: 831,
        original_value_name: "24 Months",
        display_value_name: "24 Bulan"
      },
      {
        value_id: 857,
        original_value_name: "3 Years",
        display_value_name: "3 Tahun"
      },
      {
        value_id: 843,
        original_value_name: "5 Years",
        display_value_name: "5 Tahun"
      },
      {
        value_id: 5577,
        original_value_name: "No Warranty",
        display_value_name: "Tidak Garansi"
      }
    ],
    max_input_value_number: 1
  }
]

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

app.get('/inventories/category-attributes', (req, res) => {
  res.status(200).send({
    code: 200,
    status: 'OK',
    data: categoryAttributes
  })
})

app.get('/v1/category-attributes', (req, res) => {
  res.status(200).send({
    code: 200,
    status: 'OK',
    data: categoryAttributes
  })
})

// Start the server
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
