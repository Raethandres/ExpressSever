import { Router } from 'express';
import jwt from 'jsonwebtoken'
import User from '../models/user'
const routes = Router();



routes.get('/',(req, res) => {
   res.json({
      message: 'I am a server route and can also be hot reloaded!'
    })


});

routes.post('/user',verifyToken,validate,(req,res)=>{
  let user = new User({email:req.body.email,password:req.body.password})
  user.save().then(()=>{
    res.json({status:200,token:req.token})

  })

})

routes.post('/login',(req,res)=>{
  User.find({email:req.body.email}).exec()
  .then((user)=>{
    if (user<1) {
      res.status(403).json({message:'user not found'})
    }
    if(user[0].password==req.body.password){
       jwt.sign({user},'secret',(err,token)=>{
       token?res.json({token}):res.json({user})
      })
    }else{
      res.status(403).json({message:'auth fail'})

    }

   
  })

  

})

function verifyToken(req,res,next){
   let auth = req.headers['authorization']
   if(typeof auth !== 'undefined'){
    req.token=auth
    next()

   }else{
    res.status(403)
   }

}

function validate(req,res,next){
  jwt.verify(req.token,'secret',(err,auth)=>{
    if(err)
      res.sendStatus(403)
    next()
  })
}

export default routes;