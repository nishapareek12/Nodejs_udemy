require('../src/db/mongoose')
const User = require('../src/models/user')
const Task = require('../src/models/tasks')

// 65c5e597958a5b0c9c7bb738

// User.findByIdAndUpdate('65c8976ce807b32cd07d3e1b', {age : 1}).then((user) => {
//     console.log(user)
//     return User.countDocuments({age: 1})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

// const updateAgeAndCount = async (id, age) => {
//     const user = await User.findByIdAndUpdate(id, {age})
//     const count  = await User.countDocuments({age})
//     return count
// }

// updateAgeAndCount('65c8976ce807b32cd07d3e1b', 2).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount  = async (id) => {
     const task = await Task.findByIdAndDelete(id)
     const count = await User.countDocuments({completed: false})
     return count
}

deleteTaskAndCount('65c88e99bb05053498814783').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})