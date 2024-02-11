const express = require('express')
const path  = require('path')
const hbs = require('hbs')
const geocode  = require('./utils/geocode')
const forecast = require('./utils/forecast')
// console.log(path.join(__dirname,'../public'))

//defining paths for  express config
const publicDirPath = path.join(__dirname,'../public')
const viewsDirPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname,'../templates/partials')
// console.log(__filename)
const app = express()

//setup handlebars engines and location
app.set('view engine', 'hbs')
app.set('views', viewsDirPath);
hbs.registerPartials(partialsPath)
//setup static directory to serve
app.use(express.static(publicDirPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'weather app',
        name: 'Nisha pareek'
    })
})
app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About me',
        name:'Nisha pareek'
    })
})
app.get('/weather', (req, res) => {
    if(!req.query.address){
       return  res.send({
            error:'you must provide address'
        })
    }
    geocode(req.query.address, (error, {latitude, longitude, location}) => {
          
        if(error){
            return res.send({error})
        }
        forecast(latitude, longitude, (error, forecastData) => {
            if(error){
                return res.send({error})
            }
            res.send({
                forecast: forecastData,
                location,
                address:req.query.address
            })
        })
    })

})

app.get('/products', (req, res) => {
    if(!req.query.search){
        return res.send({
            error:'you must provide the search term'
        })
    }

console.log(req.query.name)    
res.send({
    products: []
})
})



app.get('/help', (req, res) => {
    res.render('help', {
        help_paragraph: "please provide me guidence for learning node js",
        title:'Help',
        sender: "nisha pareek"
    })
})

app.get('/help/*', (req, res) => {
    res.render("404",{
        title:'404',
        name:'nisha pareek',
        errorMessage:'help article not found'
    })
})

app.get('*', (req, res) => {
    res.render('404',{
        title:'404',
        name:'nisha pareek',
        errorMessage:'page not found'
    })
})
app.listen(3000 , () => {
    console.log('app is listening to port')
})