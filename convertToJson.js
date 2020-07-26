const CSVToJSON = require('csvtojson');
const fs = require('fs');

// convert users.csv file to JSON array
CSVToJSON().fromFile('./beauty_tx.csv')
    .then(beauty_tx => {

        // users is a JSON array
        // log the JSON array
        console.log(beauty_tx);
    }).catch(err => {
        // log error if any
        console.log(err);

    });

// fs.writeFile('beauty_tx.json', JSON.stringify(beauty_tx, null, 200), (err) => {
//         if (err) {
//             throw err;
//         }
//         console.log("JSON array is saved.");
//     });