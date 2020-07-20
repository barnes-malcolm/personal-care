const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const writeStream = fs.createWriteStream('post.csv')

axios.get('https://houston.craigslist.org/d/beauty-services/search/bts').then((res) => {
    const $ = cheerio.load(res.data);

    $('.result-row').each((i, el) => {
        const businessName = $(el)
            .find('a')
            .text()
            .replace(/\s\s+/g, '').replace('restorerestore this posting', "");
        // console.log(businessName); 

        const links = $(el)
            .find('a')

            .attr('href')
        // console.log(links);

        //Write to csv
        writeStream.write(`${businessName}, ${links} \n`)
    });

    console.log('Scraping Done...')

});