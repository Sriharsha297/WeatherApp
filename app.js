const request = require('request');
const yargs  =require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather.js');
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
geocode.geoCodeAddress(argv.a,(errorMessage,results) => {
  if(errorMessage){
    console.log(errorMessage);
  }
  else{
    console.log(results.address);
    weather.getCurrentTemperature(results.latitude,results.longitude,(errorMessage,currentTemperature) => {
      if(errorMessage){
        console.log(errorMessage);
      }
      else{
        console.log(`It's currently ${currentTemperature.temperature}. It feels like ${currentTemperature.apparentTemperature}`);
      }
    })
  }
});

