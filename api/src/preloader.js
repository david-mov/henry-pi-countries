const axios = require('axios');
const { Country, Region, Subregion } = require('./db.js');

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

    console.log('Preloading successfully completed')
  }
  catch (error) {
    console.error({message: 'An error occurred', error})
  }  
}

preloader()