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

const searchProductsResponse = {
  code: 0,
  data: {
    next_page_token: "WzAsIjE3MzA0ODE0NTMyMzk5OTQyMTAiXQ==",
    products: [
      {
        create_time: 1728455772,
        id: "1730258731339712354",
        is_not_for_sale: false,
        recommended_categories: [],
        sales_regions: ["ID"],
        skus: [
          {
            id: "1730258812394899298",
            inventory: [
              {
                quantity: 703,
                warehouse_id: "7419669855966447366"
              }
            ],
            price: {
              currency: "IDR",
              tax_exclusive_price: "75000"
            },
            seller_sku: "POLBLACK"
          },
          {
            id: "1730258812394964834",
            inventory: [
              {
                quantity: 393,
                warehouse_id: "7419669855966447366"
              }
            ],
            price: {
              currency: "IDR",
              tax_exclusive_price: "75000"
            },
            seller_sku: "POLWHITE"
          },
          {
            id: "1730258812395030370",
            inventory: [
              {
                quantity: 186,
                warehouse_id: "7419669855966447366"
              }
            ],
            price: {
              currency: "IDR",
              tax_exclusive_price: "75000"
            },
            seller_sku: "POLTERRA"
          }
        ],
        status: "ACTIVATE",
        title: "Kaos Polos Tipis Dingin Nyaman Pria dan Wanita - Oblong",
        update_time: 1728456308
      },
      {
        create_time: 1727694311,
        id: "1730208665281595234",
        is_not_for_sale: false,
        recommended_categories: [],
        sales_regions: ["ID"],
        skus: [
          {
            id: "1730208664297637730",
            inventory: [
              {
                quantity: 1,
                warehouse_id: "7419669855966447366"
              }
            ],
            price: {
              currency: "IDR",
              tax_exclusive_price: "1000"
            },
            seller_sku: "BOXSAMPLE"
          }
        ],
        status: "FAILED",
        title: "Sample Product Retail Ops Shop",
        update_time: 1727694422
      },
      {
        create_time: 1732070123,
        id: "1730481453239994210",
        is_not_for_sale: false,
        recommended_categories: [],
        sales_regions: ["ID"],
        skus: [
          {
            id: "1730481446765758306",
            inventory: [
              {
                quantity: 0,
                warehouse_id: "7419669855966447366"
              }
            ],
            seller_sku: ""
          }
        ],
        status: "DRAFT",
        title: "Adidas Footware Samba Man Indoesia Y-2029",
        update_time: 1732070183
      }
    ],
    total_count: 3
  },
  message: "Success",
  request_id: "20241122023149B0FD47CAA8187405FC8F"
};

const productData1730258731339712354 = {
  code: 0,
  data: {
    category_chains: [
      {
        id: "824328",
        is_leaf: false,
        local_name: "Pakaian & Pakaian Dalam Pria",
        parent_id: "0"
      },
      {
        id: "839944",
        is_leaf: false,
        local_name: "Atasan Pria",
        parent_id: "824328"
      },
      {
        id: "601226",
        is_leaf: true,
        local_name: "T-shirt",
        parent_id: "839944"
      }
    ],
    create_time: 1728455772,
    description: "<p>Kaos Polos Unisex Katun Tipis Dingin Nyaman adalah pilihan sempurna untuk gaya kasual sehari-hari Anda.</p><ul><li>Desain Unisex:</li><li>Sesuai untuk pria dan wanita, memberikan fleksibilitas dalam gaya berpakaian.</li></ul><p>Dibuat dari bahan katun tipis yang lembut dan nyaman di kulit, menjadikan kaos ini ideal untuk menemani aktivitas sehari-hari Anda.</p><ul><li>Dingin dan Nyaman:</li><li>Mampu menjaga kehangatan tubuh Anda tanpa membuat Anda merasa gerah.</li><li>Cocok untuk musim panas</li><li>Cocok untuk anda yang tinggal di kota panas seperti Jakarta Bekasi Surabaya</li></ul>",
    id: "1730258731339712354",
    is_cod_allowed: true,
    is_not_for_sale: false,
    is_pre_owned: false,
    main_images: [
      {
        height: 720,
        thumb_urls: [
          "https://p16-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/038b2d0587934e4e9b3c0e96e60434b2~tplv-aphluv4xwc-resize-jpeg:300:300.jpeg?from=520841845",
          "https://p19-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/038b2d0587934e4e9b3c0e96e60434b2~tplv-aphluv4xwc-resize-jpeg:300:300.jpeg?from=520841845"
        ],
        uri: "tos-alisg-i-aphluv4xwc-sg/038b2d0587934e4e9b3c0e96e60434b2",
        urls: [
          "https://p16-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/038b2d0587934e4e9b3c0e96e60434b2~tplv-aphluv4xwc-origin-jpeg.jpeg?from=520841845",
          "https://p19-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/038b2d0587934e4e9b3c0e96e60434b2~tplv-aphluv4xwc-origin-jpeg.jpeg?from=520841845"
        ],
        width: 720
      },
      {
        height: 700,
        thumb_urls: [
          "https://p16-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/1def4f88f5be47bbad15d3f94d80e20d~tplv-aphluv4xwc-resize-jpeg:300:300.jpeg?from=520841845",
          "https://p19-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/1def4f88f5be47bbad15d3f94d80e20d~tplv-aphluv4xwc-resize-jpeg:300:300.jpeg?from=520841845"
        ],
        uri: "tos-alisg-i-aphluv4xwc-sg/1def4f88f5be47bbad15d3f94d80e20d",
        urls: [
          "https://p16-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/1def4f88f5be47bbad15d3f94d80e20d~tplv-aphluv4xwc-origin-jpeg.jpeg?from=520841845",
          "https://p19-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/1def4f88f5be47bbad15d3f94d80e20d~tplv-aphluv4xwc-origin-jpeg.jpeg?from=520841845"
        ],
        width: 700
      },
      {
        height: 800,
        thumb_urls: [
          "https://p16-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/2a9f39a31a1442d79ea872c7037e29fb~tplv-aphluv4xwc-resize-jpeg:300:300.jpeg?from=520841845",
          "https://p19-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/2a9f39a31a1442d79ea872c7037e29fb~tplv-aphluv4xwc-resize-jpeg:300:300.jpeg?from=520841845"
        ],
        uri: "tos-alisg-i-aphluv4xwc-sg/2a9f39a31a1442d79ea872c7037e29fb",
        urls: [
          "https://p16-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/2a9f39a31a1442d79ea872c7037e29fb~tplv-aphluv4xwc-origin-jpeg.jpeg?from=520841845",
          "https://p19-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/2a9f39a31a1442d79ea872c7037e29fb~tplv-aphluv4xwc-origin-jpeg.jpeg?from=520841845"
        ],
        width: 800
      },
      {
        height: 800,
        thumb_urls: [
          "https://p16-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/25f7b960b6074a528ed8533c2c59b150~tplv-aphluv4xwc-resize-jpeg:300:300.jpeg?from=520841845",
          "https://p19-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/25f7b960b6074a528ed8533c2c59b150~tplv-aphluv4xwc-resize-jpeg:300:300.jpeg?from=520841845"
        ],
        uri: "tos-alisg-i-aphluv4xwc-sg/25f7b960b6074a528ed8533c2c59b150",
        urls: [
          "https://p16-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/25f7b960b6074a528ed8533c2c59b150~tplv-aphluv4xwc-origin-jpeg.jpeg?from=520841845",
          "https://p19-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/25f7b960b6074a528ed8533c2c59b150~tplv-aphluv4xwc-origin-jpeg.jpeg?from=520841845"
        ],
        width: 800
      },
      {
        height: 1742,
        thumb_urls: [
          "https://p16-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/c68c7d566c2541a1b3627ccf78801d90~tplv-aphluv4xwc-resize-jpeg:300:300.jpeg?from=520841845",
          "https://p19-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/c68c7d566c2541a1b3627ccf78801d90~tplv-aphluv4xwc-resize-jpeg:300:300.jpeg?from=520841845"
        ],
        uri: "tos-alisg-i-aphluv4xwc-sg/c68c7d566c2541a1b3627ccf78801d90",
        urls: [
          "https://p16-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/c68c7d566c2541a1b3627ccf78801d90~tplv-aphluv4xwc-origin-jpeg.jpeg?from=520841845",
          "https://p19-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/c68c7d566c2541a1b3627ccf78801d90~tplv-aphluv4xwc-origin-jpeg.jpeg?from=520841845"
        ],
        width: 1742
      }
    ],
    manufacturer_ids: [],
    package_dimensions: {
      height: "0",
      length: "0",
      unit: "CENTIMETER",
      width: "0"
    },
    package_weight: {
      unit: "KILOGRAM",
      value: "0.2"
    },
    recommended_categories: [],
    responsible_person_ids: [],
    size_chart: {
      template: {
        id: "7423657180433532693"
      }
    },
    skus: [
      {
        global_listing_policy: {
          inventory_type: "EXCLUSIVE",
          price_sync: false
        },
        id: "1730258812394899298",
        inventory: [
          {
            quantity: 701,
            warehouse_id: "7419669855966447366"
          }
        ],
        pre_sale: {
          fulfillment_type: {
            handling_duration_days: 0
          },
          type: "PRE_ORDER"
        },
        price: {
          currency: "IDR",
          sale_price: "75000",
          tax_exclusive_price: "75000"
        },
        sales_attributes: [
          {
            id: "100000",
            name: "Warna",
            sku_img: {
              height: 700,
              thumb_urls: [
                "https://p16-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/71d54d094f0e47468cc9c18524c23f28~tplv-aphluv4xwc-resize-jpeg:300:300.jpeg?from=520841845",
                "https://p19-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/71d54d094f0e47468cc9c18524c23f28~tplv-aphluv4xwc-resize-jpeg:300:300.jpeg?from=520841845"
              ],
              uri: "tos-alisg-i-aphluv4xwc-sg/71d54d094f0e47468cc9c18524c23f28",
              urls: [
                "https://p16-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/71d54d094f0e47468cc9c18524c23f28~tplv-aphluv4xwc-origin-jpeg.jpeg?from=520841845",
                "https://p19-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/71d54d094f0e47468cc9c18524c23f28~tplv-aphluv4xwc-origin-jpeg.jpeg?from=520841845"
              ],
              width: 700
            },
            value_id: "6926865475716531970",
            value_name: "Hitam"
          }
        ],
        seller_sku: "POLBLACK"
      },
      {
        global_listing_policy: {
          inventory_type: "EXCLUSIVE",
          price_sync: false
        },
        id: "1730258812394964834",
        inventory: [
          {
            quantity: 393,
            warehouse_id: "7419669855966447366"
          }
        ],
        pre_sale: {
          fulfillment_type: {
            handling_duration_days: 0
          },
          type: "PRE_ORDER"
        },
        price: {
          currency: "IDR",
          sale_price: "75000",
          tax_exclusive_price: "75000"
        },
        sales_attributes: [
          {
            id: "100000",
            name: "Warna",
            sku_img: {
              height: 720,
              thumb_urls: [
                "https://p16-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/13739e6f8f1146feb7c9c14b9bb9a501~tplv-aphluv4xwc-resize-jpeg:300:300.jpeg?from=520841845",
                "https://p19-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/13739e6f8f1146feb7c9c14b9bb9a501~tplv-aphluv4xwc-resize-jpeg:300:300.jpeg?from=520841845"
              ],
              uri: "tos-alisg-i-aphluv4xwc-sg/13739e6f8f1146feb7c9c14b9bb9a501",
              urls: [
                "https://p16-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/13739e6f8f1146feb7c9c14b9bb9a501~tplv-aphluv4xwc-origin-jpeg.jpeg?from=520841845",
                "https://p19-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/13739e6f8f1146feb7c9c14b9bb9a501~tplv-aphluv4xwc-origin-jpeg.jpeg?from=520841845"
              ],
              width: 720
            },
            value_id: "6930950974764861185",
            value_name: "Putih"
          }
        ],
        seller_sku: "POLWHITE"
      },
      {
        global_listing_policy: {
          inventory_type: "EXCLUSIVE",
          price_sync: false
        },
        id: "1730258812395030370",
        inventory: [
          {
            quantity: 186,
            warehouse_id: "7419669855966447366"
          }
        ],
        pre_sale: {
          fulfillment_type: {
            handling_duration_days: 0
          },
          type: "PRE_ORDER"
        },
        price: {
          currency: "IDR",
          sale_price: "75000",
          tax_exclusive_price: "75000"
        },
        sales_attributes: [
          {
            id: "100000",
            name: "Warna",
            sku_img: {
              height: 800,
              thumb_urls: [
                "https://p16-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/ff5323adc8f94d7f93dac14c70af72ef~tplv-aphluv4xwc-resize-jpeg:300:300.jpeg?from=520841845",
                "https://p19-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/ff5323adc8f94d7f93dac14c70af72ef~tplv-aphluv4xwc-resize-jpeg:300:300.jpeg?from=520841845"
              ],
              uri: "tos-alisg-i-aphluv4xwc-sg/ff5323adc8f94d7f93dac14c70af72ef",
              urls: [
                "https://p16-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/ff5323adc8f94d7f93dac14c70af72ef~tplv-aphluv4xwc-origin-jpeg.jpeg?from=520841845",
                "https://p19-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/ff5323adc8f94d7f93dac14c70af72ef~tplv-aphluv4xwc-origin-jpeg.jpeg?from=520841845"
              ],
              width: 800
            },
            value_id: "6926865445131781889",
            value_name: "Terracota"
          }
        ],
        seller_sku: "POLTERRA"
      }
    ],
    status: "ACTIVATE",
    title: "Kaos Polos Tipis Dingin Nyaman Pria dan Wanita - Oblong",
    update_time: 1728456308
  },
  message: "Success",
  request_id: "20241122060159919C693D6FD568083F50"
};

const productData1730208665281595234 = {
  code: 0,
  data: {
    integrated_platform_statuses: [
      {
        platform: "TOKOPEDIA",
        status: "FAILED"
      }
    ],
    audit_failed_reasons: [
      {
        listing_platform: "TIKTOK_SHOP",
        position: "Product",
        reasons: ["Insufficient or Incomplete Product Information"],
        suggestions: [
          "Sellers must ensure all product titles and descriptions contain complete information that accurately describes the product being sold. \n\nBefore listing, please ensure: \n(1) Your product title includes the name, brand, and model (if applicable) of your product. \n(2) Your product description has complete details such as material, size, quantity, color, design, product images, and any other relevant information customers may need to make an informed purchase."
        ]
      }
    ],
    brand: {
      id: "7265141763801646854",
      name: "\\bGozen"
    },
    category_chains: [
      {
        id: "600001",
        is_leaf: false,
        local_name: "Perlengkapan Rumah",
        parent_id: "0"
      },
      {
        id: "851848",
        is_leaf: false,
        local_name: "Home Organizer",
        parent_id: "600001"
      },
      {
        id: "852744",
        is_leaf: true,
        local_name: "Kantong Penyimpanan",
        parent_id: "851848"
      }
    ],
    create_time: 1727694311,
    description: "<p><span>Penyimpanan yang nyaman dan cantik adalah kunci dari Produk Sample Retail Ops Shop ini.</span></p><ul><li><strong>Pengaturan:</strong> Toilet</li><li><strong>Kegunaan:</strong> Kebutuhan Rumah</li><li><strong>Kuantitas per Kemasan:</strong> 1</li></ul><p><span>Dibuat dari bahan katun yang berkualitas, tas penyimpanan ini menawarkan fitur dapat disesuaikan untuk memenuhi kebutuhan Anda.</span></p>",
    id: "1730208665281595234",
    is_cod_allowed: true,
    is_not_for_sale: false,
    is_pre_owned: false,
    main_images: [
      {
        height: 900,
        thumb_urls: [
          "https://p16-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/4b8cc7949ba743b19b6404be9e6beb82~tplv-aphluv4xwc-resize-jpeg:300:300.jpeg?from=520841845",
          "https://p19-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/4b8cc7949ba743b19b6404be9e6beb82~tplv-aphluv4xwc-resize-jpeg:300:300.jpeg?from=520841845"
        ],
        uri: "tos-alisg-i-aphluv4xwc-sg/4b8cc7949ba743b19b6404be9e6beb82",
        urls: [
          "https://p16-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/4b8cc7949ba743b19b6404be9e6beb82~tplv-aphluv4xwc-origin-jpeg.jpeg?from=520841845",
          "https://p19-oec-sg.ibyteimg.com/tos-alisg-i-aphluv4xwc-sg/4b8cc7949ba743b19b6404be9e6beb82~tplv-aphluv4xwc-origin-jpeg.jpeg?from=520841845"
        ],
        width: 900
      }
    ],
    manufacturer_ids: [],
    package_dimensions: {
      height: "10",
      length: "10",
      unit: "CENTIMETER",
      width: "10"
    },
    package_weight: {
      unit: "KILOGRAM",
      value: "0.001"
    },
    product_attributes: [
      {
        id: "100779",
        name: "Pengaturan",
        values: [
          {
            id: "1004368",
            name: "Toilet"
          }
        ]
      },
      {
        id: "100875",
        name: "Kegunaan",
        values: [
          {
            id: "1004502",
            name: "Kebutuhan Rumah"
          }
        ]
      },
      {
        id: "100347",
        name: "Kuantitas per Kemasan",
        values: [
          {
            id: "1000256",
            name: "1"
          }
        ]
      },
      {
        id: "100443",
        name: "Fitur",
        values: [
          {
            id: "1002432",
            name: "Dapat Disesuaikan"
          }
        ]
      },
      {
        id: "100701",
        name: "Bahan",
        values: [
          {
            id: "1000039",
            name: "Katun"
          }
        ]
      },
      {
        id: "100198",
        name: "Pola",
        values: [
          {
            id: "1004314",
            name: "Cat Air"
          }
        ]
      },
      {
        id: "100702",
        name: "Jenis Wadah Penyimpanan",
        values: [
          {
            id: "1004294",
            name: "Dengan Tutup"
          }
        ]
      },
      {
        id: "100398",
        name: "Gaya",
        values: [
          {
            id: "1004422",
            name: "Antik"
          }
        ]
      }
    ],
    recommended_categories: [],
    responsible_person_ids: [],
    skus: [
      {
        global_listing_policy: {
          inventory_type: "EXCLUSIVE",
          price_sync: false
        },
        id: "1730208664297637730",
        inventory: [
          {
            quantity: 1,
            warehouse_id: "7419669855966447366"
          }
        ],
        pre_sale: {
          fulfillment_type: {
            handling_duration_days: 0
          },
          type: "PRE_ORDER"
        },
        price: {
          currency: "IDR",
          sale_price: "1000",
          tax_exclusive_price: "1000"
        },
        sales_attributes: [],
        seller_sku: "BOXSAMPLE"
      }
    ],
    status: "FAILED",
    title: "Sample Product Retail Ops Shop",
    update_time: 1727694422
  },
  message: "Success",
  request_id: "202411220242393CB0DC850C51ED06328F"
};

const productData1730481453239994210 = {
  code: 0,
  data: {
    integrated_platform_statuses: [
      {
        platform: "TOKOPEDIA",
        status: "DRAFT"
      }
    ],
    category_chains: [
      {
        id: "601352",
        is_leaf: false,
        local_name: "Sepatu",
        parent_id: "0"
      },
      {
        id: "900616",
        is_leaf: false,
        local_name: "Sepatu Pria",
        parent_id: "601352"
      },
      {
        id: "601357",
        is_leaf: true,
        local_name: "Sepatu Kasual",
        parent_id: "900616"
      }
    ],
    create_time: 1732070123,
    description: "<p>Stay stylish and comfortable with the Adidas Footware Samba Man Indonesia Y-2029. Perfect for casual events, these shoes offer great value for money.</p><ul><li>Durable Construction: Made to last through daily wear</li><li>Comfortable Fit: Ensures all-day comfort</li><li>Casual Style: Perfect for various casual occasions</li></ul>",
    id: "1730481453239994210",
    is_cod_allowed: false,
    is_not_for_sale: false,
    is_pre_owned: false,
    main_images: [],
    manufacturer_ids: [],
    package_dimensions: {
      height: "0",
      length: "0",
      unit: "CENTIMETER",
      width: "0"
    },
    package_weight: {
      unit: "KILOGRAM",
      value: "1"
    },
    recommended_categories: [],
    responsible_person_ids: [],
    size_chart: {
      template: {
        id: "7423657180433532693"
      }
    },
    skus: [
      {
        global_listing_policy: {
          inventory_type: "EXCLUSIVE",
          price_sync: false
        },
        id: "1730481446765758306",
        inventory: [
          {
            quantity: 0,
            warehouse_id: "7419669855966447366"
          }
        ],
        pre_sale: {
          fulfillment_type: {
            handling_duration_days: 0
          },
          type: "PRE_ORDER"
        },
        sales_attributes: [],
        seller_sku: ""
      }
    ],
    status: "DRAFT",
    title: "Adidas Footware Samba Man Indonesia Y-2029",
    update_time: 1732070183
  },
  message: "Success",
  request_id: "20241122030544A22EAD6247F13C069471"
};




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

app.post('/product/202312/products/search', (req, res) => {
  res.status(200).send({
    code: 200,
    status: 'OK',
      data: searchProductsResponse
  })
})

app.get('/product/202309/products/1730258731339712354', (req, res) => {
  res.status(200).send({
    code: 200,
    status: 'OK',
      data: productData1730258731339712354
  })
})

app.get('/product/202309/products/1730258731339712354', (req, res) => {
  res.status(200).send({
    code: 200,
    status: 'OK',
      data: productData1730258731339712354
  })
})

app.get('/product/202309/products/1730208665281595234', (req, res) => {
  res.status(200).send({
    code: 200,
    status: 'OK',
      data: productData1730208665281595234
  })
})

app.get('/product/202309/products/1730481453239994210', (req, res) => {
  res.status(200).send({
    code: 200,
    status: 'OK',
      data: productData1730481453239994210
  })
})

// Start the server
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
