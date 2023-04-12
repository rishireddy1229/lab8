let express=require('express')
let app=express()
let users=[{"id":1,"name":"rishi"},{"id":2,"name":"rishitha"}]
app.get('/users/:id',(req,res)=>{
    //res.send("home page")
//    res.send(req.params);
//    console.log(req.params)
    users.forEach(users=>{
        if(req.params.id==users.id){
            console.log("found");
            res.json(users)
        }
    })
  //  res.sendFile(__dirname + '/index.html')
})
app.post('/users',(req,res)=>{
    let user={
        id:4,
        name:"sidhartha"
    }
    users.push(user)
    res.json(user)
})
app.put('/users/:id',(req,res)=>{
   let user=users.find((user)=>user.id===parseInt(req.params.id))
            if(user){
                user.id=req.body.id,
                user.name=req.body.name
                res.json(user);
            }else{
                res.json({message:"user doesnt exist"})
            }
   
})
app.delete('/users/:id',(req,res)=>{
    let user=users.find((user)=>user.id===parseInt(req.params.id))
             if(user){
                 let index=users.indexOf(user)
                 users.slice(index,1)
                 res.json(user);
             }else{
                 res.json({message:"user doesnt exist"})
             }
    
 })
app.listen(3000,()=>console.log("server started"))
