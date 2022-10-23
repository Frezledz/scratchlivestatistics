const Login = require("./libraries/login")._login;
const gettn =require("./libraries/get")._gettn;
const settn = require("./libraries/setthumb")._setthumb;
const getfollower =require("./libraries/get")._getfollower;
const dotenv = require("dotenv").config().parsed;
const username= dotenv.username;
const password= dotenv.password;
const projectId= dotenv.projectid;

const task = ()=>{
  let sessionid = "";
  Login(username,password)
  .then((result)=> {
    sessionid = result;
    getfollower(username)
    .then((res)=>{
      gettn(res)
      .then((res)=>{
      settn(res,projectId,sessionid)
      .then((res)=>{
        console.log(res);
      })
    })
  })
})
}
task();

setInterval(() => {
    task();
}, 1000000);


setInterval(() => {
  console.log("active");//to run it 24/7 on glitch.
}, 100000);