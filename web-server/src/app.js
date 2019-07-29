const express = require('express')
const path = require('path')




console.log(__dirname)
console.log(path.join(__dirname, '../public'))


const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')


app.set('view engine','hbs')
app.use(express.static(publicDirectoryPath))


app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather app',
        name: 'Andrew'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Andrew'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help Page',
        name: 'Andrew'
    })
})




// app.get('',(req, res) => {
//     res.send('<h1>Weather</h1>')
// })


// app.get('/help',(req, res) => {
//     res.send({
//         title: 'test',
//         num: 123
//     })
// })


// app.get('/about',(req, res) => {
//     res.send('<h1>About page</h1>')
// })

app.get('/weather',(req, res) => {
    res.send({
        temperature: 23,
        location: 'Hosur'
    })
})




app.listen(3000, () => {
    console.log('Server is up on port 3000.')    
})