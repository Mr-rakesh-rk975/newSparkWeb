// ChatDBController.js
const Message = require('../model/ChatDBModel');

// Function to store a new chat message
const storeMessage = async (req, res) => {
    try {
        const data = req.body;
        const message = new Message(data);
        const result = await message.save();
        res.status(201).json(result);
    } catch (error) {
        console.error('Error storing message:', error);
        res.status(500).send('Internal Server Error');
    }
};

// Function to get chat history
const getChatHistory = async (req, res) => {
    try {
        const { sender, receiver } = req.params;
        const history = await Message.find({
            $or: [
                { sender, receiver },
                { sender: receiver, receiver: sender }
            ]
        }).exec();
        res.json(history);
    } catch (error) {
        console.error('Error retrieving chat history:', error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = { storeMessage, getChatHistory };
