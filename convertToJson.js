const CSVToJSON = require("csvtojson");
const csvFilePath = "./data/beauty_tx.csv";
const fs = require("fs");

// convert users.csv file to JSON array
CSVToJSON()
    .fromFile("./beauty_tx.csv")
    .then((jsonObj) => {
        // console.log(jsonObj);
        for (var key in jsonObj[0]) {
            console.log(key, jsonObj[0][key]);
        }
        var newData = [];
        jsonObj.map((item) => {
            var newPlace = {
                name: item["all_list"],
                description: item["business description"],
                phone: item["phone number"],
                address: item.business_address,
                website: item["website-href"],
                image: item["image-Url-href"],
            };
            var isUnique = true;
            newData.filter((item) => {
                //console.log(item);
                var count = 0;
                for (var key in item) {
                    if (item[key] == newPlace[key]) {
                        count++;
                    }
                }
                if (count >= 6) {
                    isUnique = false;
                }
            });
            if (isUnique) {
                newData.push(newPlace);
            }
        });
        console.log(newData);
        fs.writeFile(
            "./seed_data.json",
            JSON.stringify(newData, null, 200),
            (err) => {
                if (err) {
                    throw err;
                }
                console.log("JSON array is saved.");
            }
        );
    })
    .catch((err) => {
        // log error if any
        console.log(err);
    });

// const csv = require("csvtojson");
// //TODO Finish Casting from CSV
// csv()
//   .fromFile(csvFilePath)
//   .then((jsonObj) => {
//     console.log(jsonObj);
//     const newData = jsonObj.map((item) => {
//       return {
//         name: item.name,
//         description: item.description,
//         phone: item["phone number"],
//         address,
//       };
//     });
//     //TODObulkCreate
//   });
