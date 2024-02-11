const request = require('request')
// const chalk = require('chalk')
const forecast  = (latitude, longitude, callback) => {
   const url =  "http://api.weatherstack.com/current?access_key=77fb19be89048ea119222f0e624b4968&query=" + latitude+ "," +longitude
   request({url, json: true}, (error, {body}) => {
    if(error){
        callback('unable to connect to weather service', undefined)
       }else if(body.error){
        callback('unable to find location', undefined)
       } else{
        callback(undefined,`${body.current.weather_descriptions[0]} .It is currently ${body.current.temperature} degrees out.There is ${response.body.current.precip}% chances of rain`)
       }

   })
}

module.exports = forecast