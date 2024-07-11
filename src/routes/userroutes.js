const express=require('express');
const signup = require('../controllers/signupcontroller');
const signin = require('../controllers/signincontroller');
const userDetails = require('../controllers/userdetailscontroller');
const verifycontroller = require('../controllers/verifycontroller');
const fetchController = require('../controllers/fetchnewscontroller');
const routes=express.Router();

routes.post('/signup',signup);
routes.post('/signin',signin);
routes.post('/userdetails',verifycontroller,userDetails);
routes.post('/fetchnews',fetchController);
module.exports=routes;