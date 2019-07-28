const https = require('https')


const url = 'https://api.darksky.net/forecast/0f80134fe8fcc07592bece6452314334/40,-75?units=si'

const request = https.request(url, (response) => {
  let data = ''


  response.on('data', (chunk) => {
    data=data+chunk.toString()
    console.log(chunk);
  })



  response.on('end', () => {
    const body = JSON.parse(data)
    console.log(body);
  })

})

request.on('error', (error) => {
  console.log(error)
})

request.end()
