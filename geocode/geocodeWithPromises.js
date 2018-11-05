const request = require('request');

const geoCodeAddress = (address) => {
    return new Promise((resolve,reject) => {
    let encodedAddress  = encodeURIComponent(address);

    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?key=API-KEY-HERE&address=${encodedAddress}`,
        json: true
    },(error,response,body) => {
    
      if(error){
        reject('Unable to connect to servers');
      }
      else if(body.status === 'ZERO_RESULTS'){
        
        reject('Unable to find that address');
      }
      else if(body.status === 'OK'){
        resolve(
            {
            address: body.results[0].formatted_address,
            latitude: body.results[0].geometry.location.lat,
            longitude: body.results[0].geometry.location.lng
            }
        );
      }
      else{
            reject('Your API key sucks!');
        }
    });

});
}
// geoCodeAddress(500035).then((res) => {
//     console.log(JSON.stringify(res,undefined,2));
// },(errorMessage) =>{
//     console.log(`ERROR: ${errorMessage}`);
// });
module.exports.geoCodeAddress = geoCodeAddress;