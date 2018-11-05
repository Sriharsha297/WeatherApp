const request = require('request');

const getCurrentTemperature = (lat,lng) =>{
    return new Promise((resolve,reject) => {

        request({
            url: `https://api.darksky.net/forecast/API-KEY-HERE/${lat},${lng}`,
            json: true
        },(error,response,body) => {
            if(!error && response.statusCode === 200) {
                resolve({
                    temperature: body.currently.temperature,
                    apparentTemperature: body.currently.apparentTemperature
                });
            }else{
                reject('Unable to fetch weather.');
            }
        });
    });
}

module.exports.getCurrentTemperature = getCurrentTemperature;