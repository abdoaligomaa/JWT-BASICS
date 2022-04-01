

const login=async(req,res)=>{
    res.send('log in function')
}

const dashboard=async(req,res)=>{
    const randomNumber=Math.floor(Math.random()*100)
    res.json({msg:'done.......',secret:randomNumber})
}
module.exports={
    login,dashboard
}