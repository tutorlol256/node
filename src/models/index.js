//data sample
const fs = require('fs');

let townImg = fs.readFileSync('./images/town.jpg', { encoding: 'base64' });

let towns = {
    1: {
        title: 'Split',
        link: 'https://visitsplit.com/en/1/welcome-to-split',
        image: townImg,
    },
    2: {
        title: 'Medulin',
        link: 'http://medulin.hr/opcina-medulin/',
        image: townImg,
    },
    3: {
        title: 'Ražanac',
        link: 'https://www.opcina-razanac.hr/',
        image: townImg,
    },
    4: {
        title: 'Zadar',
        link: 'http://www.zadar.hr/',
        image: townImg,
    },
};

export default {
    towns,
};