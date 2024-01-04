const express=require('express')
const server =express()
const allUsers=require('./routes/userRoutes.js')
const careerPostUsers = require('./routes/CareerRouter.js')
const userModel = require('./model/ContactModel.js')
const cors=require('cors')
 



server.use(express.json())
const corsOptions = {
    origin: 'http://localhost:3000', // Replace with your frontend URL
  };
  
  server.use(cors(corsOptions));
  


server.use('/userinformation', allUsers.router )
server.use('/career', careerPostUsers.router )


  










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



server.listen(9200, () => {
    console.log('Server is running on port 9200');
  });
  


 