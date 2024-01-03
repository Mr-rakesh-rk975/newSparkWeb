const express=require('express')
const server =express()
const allUsers=require('./routes/userRoutes.js')
 const userModel = require('./model/ContactModel.js')
const cors=require('cors')
 
const multer = require('multer');
const path = require('path');
const careerModel = require('./model/CareerModel.js')

server.use(express.json())
server.use(cors())

server.use('/userinformation', allUsers.router )


// Set up multer for file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads/'); // Choose the folder where you want to store uploads
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      const ext = path.extname(file.originalname);
      cb(null, file.fieldname + '-' + uniqueSuffix + ext);
    },
  });
  
  const upload = multer({ storage: storage });
  
  server.post('/career', upload.fields([{ name: 'resume', maxCount: 1 }, { name: 'certificate', maxCount: 1 }]), async (req, res) => {
    try {
      const { name, email, phone, applicationType, selectedField, experience } = req.body;
  
      const newUser = new careerModel({
        name,
        email,
        phone,
        applicationType,
        selectedField,
        experience,
        resume: {
          fileName: req.files['resume'][0].originalname,
          filePath: req.files['resume'][0].path,
        },
        certificate: {
          fileName: req.files['certificate'][0].originalname,
          filePath: req.files['certificate'][0].path,
        },
      });
  
      await newUser.save();
      res.status(201).send(newUser);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });










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
  


 