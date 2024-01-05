const express = require('express');
const careerModel = require('../model/CareerModel.js');
const CareerModelTwo = require('../model/CareerModelTwo.js')
const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const destinationPath = path.resolve(__dirname, '../uploads/');
    cb(null, destinationPath);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const ext = path.extname(file.originalname);
    cb(null, file.fieldname + '-' + uniqueSuffix + ext);
  },
});

const upload = multer({ storage: storage });

exports.postCareer = async (req, resp) => {
  try {
    // Multer upload middleware for 'resume' and 'certificate' fields
    upload.fields([
      { name: 'resume', maxCount: 1 },
      { name: 'certificate', maxCount: 1 },
    ])(req, resp, async (err) => {
      if (err) {
        return resp.status(400).send('Error processing file upload.');
      }

      // Destructuring request body
      const { name, email, phone, applicationType, selectedField, experience } = req.body;

      // Declare newUser variables outside the conditional blocks
      let InternShipData, JobData;

      if (applicationType === 'internship') {
        InternShipData = new CareerModelTwo({
          name,
          email,
          phone,
          applicationType,
          selectedField,
          resume: {
            fileName: req.files['resume'][0].originalname,
            filePath: req.files['resume'][0].path,
          },
        });
      }

      if (applicationType === 'job') {
        JobData = new careerModel({
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
      }

     

      // Save to the database
      if (InternShipData) {
        await InternShipData.save();
      }

      if (JobData) {
        await JobData.save();
      }

      // Send a success response
      resp.status(201).send({ InternShipData, JobData });
    });
  } catch (error) {
    console.error(error);
    resp.status(500).send('Internal Server Error: ' + error.message);
  }
};
