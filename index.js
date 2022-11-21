const Login = require("./libraries/login")._login;
const gettn =require("./libraries/get")._gettn;
const settn = require("./libraries/setthumb")._setthumb;
const getfollower =require("./libraries/get")._getfollower;
const dotenv = require("dotenv").config().parsed;
const username= dotenv.username;
const password= dotenv.password;
const projectId= dotenv.projectid;

const task = ()=>{  
  Login(username,password)
  .then((result)=> {
    const sessionid = result;
    getfollower(username)
    .then((res=>gettn(res,username)))
    .then(res=>settn(res,projectId,sessionid))
    .then(res=>console.log(res));
})
}
task();//Run this function periodic if you want to change periodic.


const http = require("http");
http.createServer(function(req, res) {
    res.write("nothing here u donkey");
    res.end();
  }).listen(8080);