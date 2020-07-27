const cheerio = require('cheerio');
const fs = require('fs');
const writeStream = fs.createWriteStream('post.csv')
const {
    Builder,
    By,
    until
} = require('selenium-webdriver');
const email = "";
const pass = "";
(async function example() {
    const driver = await new Builder().forBrowser('chrome').build();
    const url = 'https://member.angieslist.com/app/search?category=261';
    try {
        await driver.get(url);
        await driver.wait(until.titleIs("Login - Angie's List"), 10000);
        await driver.findElement(By.id('login--login-email')).sendKeys(email);
        await driver.findElement(By.id('login--login-password')).sendKeys(pass);
        await driver.findElement(By.id('login--login-button')).click();
        // scrape
        await driver.wait(until.titleIs("Search - Angie's List"), 10000);
        driver.sleep(5000);
        const html = await driver.getPageSource();
        const $ = cheerio.load(html);
        // $('.spsearch--resdesigned-list-item').each(function (i, el) {
        //     const title = $(el).find('a').text();
        //     console.log(title);
        // });
        $('.spsearch--resdesigned-list-item').each(function (i, el) {
            const description = $(el).find('div').children().text();
            console.log(description);
        });
    } catch (err) {
        console.log(err);
    }
})();
//jquery here