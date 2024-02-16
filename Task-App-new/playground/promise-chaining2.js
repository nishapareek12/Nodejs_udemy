require('../src/db/mongoose')
const Task = require('../src/models/tasks')

Task.findByIdAndDelete('65c5f8f03743ee0d5047645f').then(() => {
    console.log("deleted..")
    return Task.countDocuments({completed: false})
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})