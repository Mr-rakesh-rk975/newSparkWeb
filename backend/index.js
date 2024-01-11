
const express = require('express');
const http = require('http');
const app = express();
const socketIO = require('socket.io');
const allUsers = require('./routes/userRoutes.js');
const careerPostUsers = require('./routes/CareerRouter.js');
const userModel = require('./model/ContactModel.js');
const cors = require('cors');
app.use(express.json());
const server = http.createServer(app); 
const io = socketIO(server);



const corsOptions = {
    origin: ['http://localhost:3000', 'http://localhost:3001'],
  };
app.use(cors(corsOptions));

const chatHistory = [];

io.on('connection', (socket) => {
  console.log('User Connected via WebSocket');

  socket.emit('chat-history', chatHistory);

  socket.on('user-message', async (message) => {
    console.log('User Message:', message.message);
    chatHistory.push({ role: 'user', message: message.message })

    io.emit('admin-message', { role: 'user', message: message.message });
  });

  function broadcastMessage(role, message) {
    io.emit('admin-message', { role, message });
  }
  return broadcastMessage();
});

// Define routes
app.use('/userinformation', allUsers.router);
app.use('/career', careerPostUsers.router);

// Handle user POST request
app.post('/user', async (req, resp) => {
  try {
    const data = new userModel(req.body);
    const result = await data.save();
    
    // Broadcast the new data to all connected clients
    io.emit('new-data', result);

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
      const users = await userModel.find(); // Fetch all users
  
      // Broadcast the new data to all connected clients
      io.emit('new-data', users);
  
      res.send(users);
      console.log(users);
    } catch (error) {
      console.error('Server error:', error);
      res.status(500).send('Internal Server Error');
    }
  });


const PORT = process.env.PORT || 9200;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});