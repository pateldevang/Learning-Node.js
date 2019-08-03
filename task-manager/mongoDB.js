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

    // db.collection('tasks').findOne({ _id: new ObjectID("5d45243f586c380475bd0365") }, (error, user) => {

    //     if (error) {
    //         return console.log(error)
    //     }
    //     console.log(user)
    // })

    // db.collection('tasks').find({ completed: false }).toArray((error, users) => {
    //     console.log(users)
    // })

})