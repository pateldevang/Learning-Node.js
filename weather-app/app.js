const request = require('request')

const url = 'https://api.darksky.net/forecast/0f80134fe8fcc07592bece6452314334/37.8267,-122.4233?units=si'

request({ url: url, json: true}, (error, response) => {

// console.log(response.body.currently.temperature)

console.log(response.body.daily.data[0].summary + ' Its currently '+response.body.currently.temperature+' degress out. There is a '+response.body.currently.precipProbability+'% chance of rain');

})


// Geocoding

const geocodeurl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZGV2YW5ncGF0ZWwiLCJhIjoiY2p5bHNjd3p5MGJwYzNpcXI5bDA0bnhxOCJ9.Sf-JnXE2_TAU6ohmMvxphA'
request({url : geocodeurl, json: true}, (error, response) => {
  const latitude = response.body.features[0].center[1]
  const longitude = response.body.features[0].center[0]
  console.log(latitude,longitude)
})
