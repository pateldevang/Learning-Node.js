//CRUD create read update delete

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const { MongoClient, ObjectID } = require('mongodb')

const connectioURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectioURL, { useNewUrlParser: true }, (error, client) => {

    if (error) {
        return console.log('Unable to connect to the database!')
    }

    const db = client.db(databaseName)

    // db.collection('users').findOne({ _id: new ObjectID("5d452c432d7750054d6af2a0") }, (error, user) => {

    //     if (error) {
    //         return console.log(error)
    //     }
    //     console.log(user)
    // })

    db.collection('users').find({ age: 19 }).toArray((error, users) => {
        console.log(users)
    })

    db.collection('users').find({ age: 19 }).count((error, count) => {
        console.log(count)
    })

})