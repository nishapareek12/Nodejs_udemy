const  express = require('express')
const router = new express.Router()
const User = require('../models/user')
const auth = require('../middleware/auth')
const multer = require('multer')
const sharp = require('sharp')
const { sendWelcomeEmail, cancelEmail } = require('../emails/account')
router.get('/test', (req,res) => {
    res.send('from a new file')
} )

router.get('/users/me',auth,  async (req, res) => {
     res.send(req.user)
})

router.post('/users/logoutAll', auth, async (req, res) => {
    try{
        req.user.tokens = []
        await req.user.save()
        res.send()
    }catch(e){
        res.status(500).send()
    }
})
router.post('/users/logout', auth, async (req, res) => {
    try{
         req.user.tokens = req.user.tokens.filter((token) => {
              return token.token !== req.token
         })
         await req.user.save()
         res.send()
    }catch(e){
        res.status(500).send()
    }
})

router.get('/users/:id', async (req,res) => {
    const _id = req.params.id
     try{
         const user = await User.findById(_id)
         if(!user){
            return res.status(404).send()
        }
        res.send(user)
     }catch(e){
        res.status(500).send()
     }

})
router.post('/users', async (req, res) => {
    const user = new User(req.body)
    try {
        await user.save()
        sendWelcomeEmail(user.email, user.name)
        const token = await user.generateAuthToken()
        res.status(201).send({user, token}) 
    }catch(e){ 
        res.status(400).send(e)
    }
})

router.post('/users/login', async (req,res) => {
    try{
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken( )
        res.send({user,token})
    }catch(e){
        res.status(404).send()
    } 
}) 
router.patch('/users/me' ,auth, async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name', 'email', 'password', 'age']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
    if(!isValidOperation){
        return res.status(404).send({error:'Invalid Updates!!'})
    }
    try{  
    //   const user = await  User.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
     updates.forEach((update) => req.user[update] = req.body[update])
      await req.user.save() 
      res.send(req.user) 
    }catch(e){ 
           res.status(500).send() 
    }
})  

router.delete('/users/me',auth,  async (req, res) => {
    try{
         await req.user.remove()
         req.user.tokens = [];
         await req.user.save();
         cancelEmail(req.user.email, req.user.name)
        res.send(req.user)
    }catch(e){
        console.error(e);
        res.status(500).send()
    }
}) 
const upload = multer({
    limits: {
        fileSize: 1000000
    },
    fileFilter(req, file, cb){
        if(!file.originalname.match(/\.(jpg|jpeg|png)$/)){
               return cb(new Error('please upload .jpg/.jpeg/.png file!!'))
        }
        cb(undefined, true)
    }
}) 

router.post('/users/me/avatar',auth, upload.single('avatars'), async (req,res) => {
    const buffer = await sharp(req.file.buffer).resize({width: 250, height: 250}).png().toBuffer()
    req.user.avatar = buffer
    await req.user.save()
    res.send()
}, (error, req, res, next) => {
    res.status(400).send({error: error.message})
} )

router.delete('/users/me/avatar', auth, async (req,res) => {
    req.user.avatar = undefined
    await req.user.save()
    res.send()
})

router.get('/users/:id/avatar', async (req,res) => {
    try{
        const user = await User.findById(req.params.id)
        if(!user || !user.avatar){
             throw new Error()
        }
        res.set('Content-Type', 'image/png')
        res.send(user.avatar)
    }catch(e){
        res.status(404).send()
    }
})
module.exports = router  

