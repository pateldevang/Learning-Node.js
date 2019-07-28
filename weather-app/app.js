const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

geocode('VIT University', (error,data) => {
  console.log('Error',error);
  console.log('Data',data);
})

forecast(-75,44, (error,data) => {
  console.log('Error',error)
  console.log('Data',data)
})
