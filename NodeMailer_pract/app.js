const express =  require("express")
const app = express()
const sendMail = require("./sendMail")
app.get('/', (req, res) => {
    res.send("welcome to home page")
})

app.get('/mail', sendMail)

const start = async () => {
    try{
        app.listen('8000' , () => {
            console.log("app is listening to port 8000")
        })
    }catch(e){
        console.log(e)
    }
}

start();