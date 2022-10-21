const login = require("./libraries/login").login;
const setthumb = require("./libraries/setthumb")._setthumb;
const getfollower = require("./libraries/getfollower")._getfollower;
const secrets = require("dotenv").config().parsed;
const username =secrets.username;
const password = secrets.password;
const projectid=secrets.projectid;
const _setthumb = async() =>{
    const sessionid = await login(username,password);
    const count = await getfollower(username);
    const image = await fetch(`https://dummyimage.com/400x300/fff/000.png&text=${count}+followers`);
    await setthumb(image.body,projectid,sessionid);
      
}

_setthumb();

setInterval(() => {
    _setthumb();
}, 1000000);
