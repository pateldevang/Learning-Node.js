//CRUD create read update delete

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const { MongoClient, ObjectID } = require('mongodb')

const connectioURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID()
console.log(id.id.length)
console.log(id.toHexString().length)

MongoClient.connect(connectioURL, { useNewUrlParser: true }, (error, client) => {

    if (error) {
        return console.log('Unable to connect to the database!')
    }

    const db = client.db(databaseName)



})