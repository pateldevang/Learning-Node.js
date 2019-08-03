//CRUD create read update delete

const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectioURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectioURL, { useNewUrlParser: true }, (error, client) => {

    if (error) {
        return console.log('Unable to connect to the database!')
    }

    const db = client.db(databaseName)

    // db.collection('users').insertOne({
    //     name: 'Devang',
    //     age: 19
    // }, (error, result) => {
    //     if (error) {
    //         console.log('Unable to insert user')
    //     }
    //     console.log(result.ops)
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Jen',
    //         age: 28
    //     }, {
    //         name: 'Andrew',
    //         age: 27
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log(error)
    //     }
    //     console.log(result.ops)
    // })


    db.collection('users').insertMany([
        {
            description: 'Buy milk & eggs',
            completed: false
        }, {
            description: 'Prepare egg',
            completed: false
        }, {
            description: 'Eat food',
            completed: false
        }
    ], (error, result) => {
        if (error) {
            return console.log('Unable to add the job.')
        }
        console.log(result.ops)
    })



})