const fs = require('fs');

for (let i = 1; i < 221; i++) {
    const data = `{
        "name": "Ta Gatakia Voucher #${i}",
        "symbol": "TGK",
        "description": "A voucher for a free mint in the $ETH Ta Gatakia collection",
        "seller_fee_basis_points": 1000,
        "image": "https://tagatakia.com/assets/images/voucher.png",
        "external_url": "https://tagatakia.com",
        "edition": ${i},
        "creator": "Cats of Cyprus",
        "attributes": [
          {
            "trait_type": "Text",
            "value": "voucher"
          }
        ],
        "properties": {
          "files": [
            {
              "uri": "https://tagatakia.com/assets/images/voucher.png",
              "type": "image/png"
            }
          ],
          "category": "image",
          "creators": [
            {
              "address": "EArh9eNuddAtosQzDNE56iEYChCet6b12tPfGcBvN85y",
              "share": 100
            }
          ]
        }
      }`;


    fs.writeFile(`${i}.json`, data, err => {
        if (err) {
            console.error(err);
        }
        // file written successfully
    });
}