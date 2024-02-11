const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const address = process.argv[2]
if(!address){
    console.log("please provide the address")
}else{
    geocode(address, (error, {latitude, longitude, location} = {}) => {
        if(error){
            return console.log('Error' ,error);
        }
        forecast( latitude, longitude, (error, forecastData) => {
            if(error){
                return console.log('error', error)
            }
            console.log(location)
            console.log(forecastData)
        })
    })
    
}
// const request =  require("request")
// const url = 'http://api.weatherstack.com/current?access_key=77fb19be89048ea119222f0e624b4968&query=37.8267,-122.4233&units=f'
// request({url : url, json: true}, (error, response) => {
//     if(error){
//         console.log("can't connect to weather api")
//     }else if(response.body.error){
//         console.log('unable to find location')
//     }
//     else{
//    console.log(`${response.body.current.weather_descriptions[0]} .It is currently ${response.body.current.temperature} degrees out.There is ${response.body.current.precip}% chances of rain`)
//     }
// })


// pk.eyJ1IjoibmlzaGExNyIsImEiOiJjbHMxY28waDIwODZuMmxxeDJwNHg4dmp1In0.MxkkysWK2xSJBaI6EzFIWw
// const geoCode = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibmlzaGExNyIsImEiOiJjbHMxY28waDIwODZuMmxxeDJwNHg4dmp1In0.MxkkysWK2xSJBaI6EzFIWw&limit=1'
// request({url: geoCode, json: true}, (error, response) => {
//     if(error){
//         console.log('cant connect to network')
//     } else if(response.body.features.length === 0){
//         console.log('unable to find location')
//     }else{
//         const latitude = response.body.features[0].center[1]
//         const longitude  = response.body.features[0].center[0]
//         console.log(latitude,longitude)
//     }
// })



