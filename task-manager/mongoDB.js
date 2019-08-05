//CRUD create read update delete


const { MongoClient, ObjectID } = require('mongodb')

const connectioURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectioURL, { useNewUrlParser: true }, (error, client) => {

    if (error) {
        return console.log('Unable to connect to the database!')
    }

    const db = client.db(databaseName)

    db.collection('users').updateOne({
        _id: new ObjectID("5d452c432d7750054d6af2a0")
    }, {
        $inc: {
            age: 1
        }
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })

    
})