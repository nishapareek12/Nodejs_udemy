const express = require('express')  
require('./db/mongoose')
const  userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
const app = express()
const port = process.env.PORT 

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)
app.listen(port, () => {
    console.log('server is on port ' +port)
})


//difference between hashing and encryption is that, after encryption we can 
// always get back original value but in case of hashing we cannot get back original value...it is like one way algorithm 


