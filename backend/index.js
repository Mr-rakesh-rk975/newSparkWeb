
const express = require('express');
const app = express();
const socketIO = require('socket.io');
const allUsers = require('./routes/userRoutes.js');
const careerPostUsers = require('./routes/CareerRouter.js');
const userModel = require('./model/ContactModel.js');
const cors = require('cors');
app.use(express.json());




app.use(cors({origin: ['http://localhost:3000','http://localhost:3001']}));



// Define routes
app.use('/userinformation', allUsers.router);
app.use('/career', careerPostUsers.router);

// Handle user POST request
app.post('/user', async (req, resp) => {
  try {
    const data = new userModel(req.body);
    const result = await data.save();
    resp.send(result);
    console.log(result);
  } catch (error) {
    console.error('Server error:', error);
    resp.status(500).send('Internal Server Error');
  }
});

app.get('/getuser', async (req, res) => {
    try {
      // Assuming you're using Mongoose for MongoDB
      const users = await userModel.find(); 
      res.send(users);
      console.log(users);
    } catch (error) {
      console.error('Server error:', error);
      res.status(500).send('Internal Server Error');
    }
  });


const PORT = process.env.PORT || 9200;

const server= app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const io = socketIO(server,{
  cors:{
    origin : '*'
  }
});

io.on('connection',(socket)=>{
  console.log(socket.id);

  socket.on('join_room',(data)=>{
    socket.join(data);
    })
    socket.on('send_message',(data)=>{
      socket.to(data.room).emit('receive_message',data);
      })

      socket.on('disconnect',()=>{
        console.log('User disconnect')
      })
})