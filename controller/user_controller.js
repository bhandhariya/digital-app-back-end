var User=require('../model/user_model');


exports.test=function(req,res,next){
    var data=req.body;
    console.log(data)
}







exports.register=function(req,res,next){
 var data=req.body;
 console.log(data)
 var user=new User({
    name:data.name,
    email:data.email,
    firebaseProviderId:data.providerId,
    uid:data.uid,
    emailVerified:data.emailVerified
 })
 user.save(function(err,u){
     if(!err && u){
        
         res.send(u)
     }else{
        return res.send(err)
     }
 })
}
