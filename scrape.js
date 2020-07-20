const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const writeStream = fs.createWriteStream('post.csv')

request('URL', (err, res, html) => {
    if (!err && res.statusCode == 200) {
        const $ = cheerio.load(html);
        //jquery here


        //Write to csv
        writeStream.write(`${}, ${} \n`)
    });

console.log('Scraping Done...')
}
});