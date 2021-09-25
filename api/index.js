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
const { Country, Activity, Region, Subregion } = require('./src/db.js');

const preloader = async () => {
  try {
    const countries = await axios.get('https://restcountries.com/v3/all');
    for (let country of countries.data) {
      let { cca3, name, flags, capital, region, subregion, area } = country;
      let [countryRes, created] = await Country.findOrCreate({
        where: {
          id: cca3,
        },
        defaults: {
          name: name.official,
          flag: flags ? flags[0] : null,
          capital: capital ? capital[0] : null,
          area,
        }
      });
      let [regionRes, rCreated] = await Region.findOrCreate({ where: { name: region || 'Unknown' } });
      let [subregionRes, srCreated] = await Subregion.findOrCreate({ where: { name: subregion || 'Unknown' } });
      if (srCreated) regionRes.addSubregion(subregionRes);
      subregionRes.addCountry(countryRes);
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
