const mongoose = require('mongoose');

const careerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  applicationType: {
    type: String,
    required: true,
  },
  selectedField: {
    type: String,
    required: true,
  },
  experience: {
    type: String,  // Update the type according to your requirements
    required: true,
  },
  resume: {
    fileName: {
      type: String,
      required: true,
    },
    filePath: {
      type: String,
      required: true,
    },
  },
  certificate: {
    fileName: {
      type: String,
      required: true,
    },
    filePath: {
      type: String,
      required: true,
    },
  },
});






module.exports = mongoose.model('careerdatas', careerSchema);
