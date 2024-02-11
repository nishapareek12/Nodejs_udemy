const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://localhost:27017/task-manager-api')

// const User = mongoose.model('User', {
//     name: {
//         type: String,
//         required: true
//     },
//     email: {
//          type: String,
//          required: true,
//          trim: true,
//          lowercase: true,
//          validate(value){
//             if(!validator.isEmail(value)){
//                 throw new Error('Email is invalid!!')
//             }
//          }
//     },
//     age: {
//         type: Number,
//         default: 0,
//         validate(value){
//             if(value < 0){
//                 throw new Error('Age must be positive number')
//             }
//         }

//     },
//     password: {
//         type : String,
//         required : true,
//         trim: true,
//         validate(value){
//             if(value.length <= 6){
//                throw new Error('value must be greater than 6')
//             }
//             if(value.includes('password')){
//                 throw new Error('choose another password!!')
//             }
//         }
//     }
// })

// const me = new User({
//     name: 'meera',
//     email: '  MEERA@GMAIL.com',
//     password : 'password'
// })

// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log('Error:', error)
// })
const tasks = mongoose.model('tasks', {
    description:{
        type: String,
        required: true,
        trim: true
    },
    completed: {
         type: Boolean,
         default: false
    }
})  

const mytask = new tasks({
    description:"udemy course",
    completed: true
})

mytask.save().then(() => {
    console.log(mytask)
}).catch((error) => {
    console.log(error)
})


