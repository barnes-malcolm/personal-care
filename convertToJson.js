const CSVToJSON = require('csvtojson');
const fs = require('fs');

// convert users.csv file to JSON array
CSVToJSON().fromFile('./businesses.csv')
    .then(businesses => {

        // users is a JSON array
        // log the JSON array
        console.log(businesses);
    }).catch(err => {
        // log error if any
        console.log(err);

    });

// fs.writeFile('beauty_tx.json', JSON.stringify(businesses, null, 200), (err) => {
//         if (err) {
//             throw err;
//         }
//         console.log("JSON array is saved.");
//     });