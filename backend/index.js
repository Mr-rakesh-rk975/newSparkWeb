const express=require('express')
const server =express()
const allUsers=require('./routes/userRoutes.js')
 const userModel = require('./model/ContactModel.js')
const cors=require('cors')
 

 

server.use(express.json())
server.use(cors())

server.use('/userinformation', allUsers.router )


server.post('/user',async(req,resp)=>{
    try {
        const data = new userModel(req.body);
    const result = await data.save();
    resp.send(result)
    console.log(result)
    } catch (error) {
        console.error('server error')
    }
    
})



server.listen(9300, () => {
    console.log('Server is running on port 9300');
  });
  


 