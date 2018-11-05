const request = require('request');

const geoCodeAddress = (address,callback) => {
    let encodedAddress  = encodeURIComponent(address);

    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?key=API-KEY-HERE&address=${encodedAddress}`,
        json: true
    },(error,response,body) => {
    
      if(error){
        callback('Unable to connect to servers');
      }
      else if(body.status === 'ZERO_RESULTS'){
        
        callback('Unable to find that address');
      }
      else if(body.status === 'OK'){
        callback(undefined,
            {
            address: body.results[0].formatted_address,
            latitude: body.results[0].geometry.location.lat,
            longitude: body.results[0].geometry.location.lng
            }
        );
      }
      else{
            callback('Your API key sucks!');
        }
    });
}

module.exports.geoCodeAddress = geoCodeAddress;