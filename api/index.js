//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn } = require('./src/db.js');

const axios = require('axios');
const { Country, Activity } = require('./src/db.js');

const preloader = async () => {
  try {
    const countries = await axios.get('https://restcountries.eu/rest/v2/all');
    for (let country of countries.data) {
      let { alpha3Code, name, flag, capital, region, subregion, area, population } = country;
      let [countryRes, created] = await Country.findOrCreate({
        where: {
          id: alpha3Code,
        },
        defaults: {
          name,
          flag,
          capital,
          region,
          subregion,
          area,
          population,
        }
      });
    }
  }
  catch (err) {
    console.error(err);
  }  
}

// Syncing all the models at once.
conn.sync({ force: true })
.then(() => {
  preloader();
  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});
