# date-string
Formats date according to RFC2822

This function is needed to get correct Date string used in email Date header.

## Installation
Install Date String as an npm module and save it to your package.json file as a dependency:
    
    npm install --save email-syntax

## Usage

```javascript
    const dateString = require('date-string');
    let ds = dateString(new Date());

    //now in ds string in format 'Thu, 17 Aug 2017 17:38:21 +0300'
```


## Tests

    npm test

