const app = require("express")();
const cors = require("cors")

app.use(cors())

app.get("/delivery-notes", (req,res) => {

  res.json({
    "results": [
      {
        "supplierOrderNumber": "LOP-795425",
        "supplierDeliveryNoteNumber": "LOP-795425/DN-1",
        "supplierDeliveryNoteDate": "2021-04-14",
        "supplier": {
          "code": "ADM",
          "name": "ADM Distributor"
        },
        "lines": [
          {
            "product": {
              "itemNumber": "1",
              "automotiveSupplierCode": "FILT",
              "reference": "LS932",
              "ean": "1234567890130",
              "designation": "COURROIE D'ACCESSOIRE"
            },
            "quantity": {
              "delivered": 1
            },
            "order": {
              "quantity": {
                "delivered": 5,
                "notified": 1,
                "returned": 1
              }
            },
            "purchasePrice": {
              "exVAT": 133.14
            }
          }
        ]
      },
      {
        "supplierOrderNumber": "LOP-795425",
        "supplierDeliveryNoteNumber": "LOP-795425/DN-1",
        "supplierDeliveryNoteDate": "2021-04-14",
        "supplier": {
          "code": "ADM",
          "name": "ADM Distributor"
        },
        "lines": [
          {
            "product": {
              "itemNumber": "1",
              "automotiveSupplierCode": "FILT",
              "reference": "LS93002",
              "ean": "1234567890890",
              "designation": "COD'ACCESSOIRE"
            },
            "quantity": {
              "delivered": 1
            },
            "order": {
              "quantity": {
                "delivered": 15,
                "notified": 1,
                "returned": 1
              }
            },
            "purchasePrice": {
              "exVAT": 133.14
            }
          }
        ]
      }
    ]
  })
})

app.post("/pre-demands", (req,res) => {
  setTimeout(() => {
    res.json({
      "supplierOrderNumber": "LOP-795425",
      "selectedDeliveryNoteNumber": "LOP-795425/DN-1",
      "selectedDeliveryNoteDate": "2021-04-14",
      "supplier": {
        "code": "ADM",
        "name": "ADM Distributor"
      },
      "plannedDate": "2021-04-15",
      "credit": {
        "amount": {
          "exVAT": 106.51
        }
      },
      "lines": [
        {
          "product": {
            "itemNumber": "1",
            "automotiveSupplierCode": "FILT",
            "reference": "LS932",
            "ean": "1234567890128",
            "designation": "COURROIE D'ACCESSOIRE"
          },
          "quantity": {
            "delivered": 1,
            "notified": 1
          },
          "return": {
            "reason": "PART_BROKEN",
            "discountRate": 20
          },
          "purchasePrice": {
            "exVAT": 133.14
          },
          "credit": {
            "amount": {
              "exVAT": 106.51
            }
          }
        }
      ]
    })
  }, 3000)
})
app.listen(8080)