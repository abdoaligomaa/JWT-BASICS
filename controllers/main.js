const custumError=require('../errors/custom-error')
const jwt=require('jsonwebtoken')

const login=async(req,res)=>{
    const {username,password}=req.body
    if(!username||!password){
        throw new custumError('you should add name and password',400)
    }
    const token= jwt.sign({username,password},'abdoaligomaaalimohamed',{expiresIn:'1d'})
    


    res.json({msg:'done',token})
}

const dashboard=async(req,res)=>{
    const authHeader=req.headers.autherization
    console.log(authHeader)
    if(!authHeader){
        throw new custumError('you should put a correct token',400)

    }
    const token=authHeader.split(' ')[1]
    const verify=jwt.verify(authHeader,'abdoaligomaaalimohamed')

    if(!verify){
        throw new custumError("you can't pass to this route",400)

    }
    const randomNumber=Math.floor(Math.random()*100)
    res.json({msg:'done.......',secret:authHeader})
}
module.exports={
    login,dashboard
}