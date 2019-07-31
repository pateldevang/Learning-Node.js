console.log('Client side java script file loaded!')

fetch('http://localhost:3000/weather?address=Mumbai').then((response) => {
    response.json().then((data) => {
        if (data.error) {
            console.log(data.error)
        } else {
            console.log(data.location)
            console.log(data)
        }
    })
})