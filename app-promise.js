const request = require('request');
const yargs  =require('yargs');
const geocode = require('./geocode/geocodeWithPromises');
const weather = require('./weather/weatherWithPromises');
const argv = yargs.options({
  a:{
    demand: true,
    alias :'address',
    string: true,
    describe: 'Address to fetch weather for'
  }
})
.help()
.alias('help','h')
.argv;
geocode.geoCodeAddress(argv.address).then((res)=>{
  console.log(res.address);
  return weather.getCurrentTemperature(res.latitude,res.longitude);
}).then((currentTemperature) =>{
  console.log(`It's currently ${currentTemperature.temperature}. It feels like ${currentTemperature.apparentTemperature}`);
}).catch((errorMessage) => {
  console.log(`Error: ${errorMessage}`);
})
