// //CRUD operations
// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient

// const connectionURL = 'mongodb://localhost:27017'
// const databaseName = 'task-manager'

// MongoClient.connect(connectionURL, (error, client) => {
     
//     if(error) {
//         return console.log('Unable to connect to database')
//     }
//     console.log('connected correctly')
//     const db = client.db(databaseName)
//     // db.collection('users').insertOne({
//     //     "name":"nisha",
//     //     "age":32
//     // }, (error, result) => {
//     //    if(error){
//     //     return console.log('unable to insert user')
//     //    }
//     //    console.log(result.ops)
//     // } )

//     //     db.collection('users').insertMany([{
//     //         "name":"monu",
//     //         "age":17
//     //     }, 
//     //     {
//     //         "name":"akshu",
//     //         "age":12
//     //     }

//     // ], (error, result) => {
//     //        if(error){
//     //         return console.log('unable to insert user')
//     //        }
//     //        console.log(result.ops)
//     //     } )
    
//     // db.collection('users').findOne({"name" : "nisha"}, (error, user) => {
//     //     if(error){
//     //         return console.log('unable to fetch')
//     //     }
//     //     console.log(user)
//     // })

//     // const updatePromise = db.collection('users').updateOne({
//     //     _id: new mongodb.ObjectId('65c5b0e39e8590a06c38c507')
//     // },{
//     //     $inc: {
//     //         age:1
//     //     }
//     // })
//     // updatePromise.then((result) => {
//     //        console.log(result)
//     // }).catch((error) => {
//     //        console.log(error)  
//     // })

//     // db.collection('users').deleteOne({
//     //     age: 33
//     // }).then((result) => {
//     //    console.log(result)
//     // }).catch((error) => {
//     //     console.log(error)
//     // })
// })