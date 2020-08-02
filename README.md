# Personal-care

## Description

This app is designed for business owners that operate in beauty industry in the Houston market. The App is able to host the services offered, prices, location, business website and reviews for these businesses. The app would only allow business owners the edit-rights to their business page and other users can leave reviews for the business on our website. The content is user-generated and will offer member profiles for customer engagement.

## Table of Contents (Optional)

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Contributing](#contributing)
- [Tests](#Tests)
- [License](#license)
- [Future Development](#future-development)

## Installation

# LiveLink

Navigate to the website [Personal Care](https://personal-care1.herokuapp.com/).

## Usage

After navigating to the website

- Type in the Search term and query by by business name and/or service type

Install the dependencies and devDependencies and start the server in CLI

```sh
$ npm install
$ node server.js
```

## Credits

List of collaborators

- [Nicholas Foreman](https://github.com/nickforeman4)
- [Malcolm Barnes](https://github.com/barnes-malcolm)
- [Elizabeth Sosa](https://github.com/lisasosa)
- [Ehson Raza](https://github.com/ehsonraza1)

Third-party assets:

- [Node/Express Servers](https://expressjs.com/)
- [Handlebars.js](https://handlebarsjs.com/)
- [Seqeulize ORM](https://sequelize.org/)
- [Axios + Cheerio](https://browntreelabs.com/scraping-sites-with-node/)
- [CSV to Json](https://www.npmjs.com/package/csvtojson)

Third-party assets:

## Contributing

This application is for educational purposes, please refer to the LICENSE tab and [Github](https://github.com/barnes-malcolm/personal-care) for further information related to reaching out to developers for collaboration.

## Tests

## License

MIT License

Copyright (c) 2020 Malcolm Barnes, Ehson Raza, Elizabeth Sosa, Nicholas Foreman

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Future Development

#### Login Security

Any future future team working building on this code base will need to implement OAuth authorization and will need to configure security around logins and user-profile for Business Owners, that restricts their edit access to their business page.

#### Data Quality

Any future development team will need to conduct an audit of the data periodically and will need the appropriate fields on the business page to be appropriately populated such as making Business-Website page, Description and Location as required fields in order to be hosted on the website.

#### User Reviews

Any future development team will need to develop and simplify the UI for leaving reviews on the business page. We recommend implementing a 5-Star rating systems with a description field, as this will conform to the standards we have implemented for front for our UI. We recommend that the developers leverage the Handelbars framework to achieve scale and effeciency.

#### Search Optimization

Any future development team will need to work on optimizing the search results that we receive from our database, specially when searching for All Local Businesses, we believe this will become increasingly important as the business database hosts an increasing amount of data in the future.

#### © 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.
