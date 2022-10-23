const https = require('https');

const gettn = (count)=>{
    return new Promise((resolve)=>{
        https.get(`https://dummyimage.com/400x300/fff/000.png&text=${count}+followers`, (resp)=>{
          let chunks = [];
          resp.on('data', (chunk) => {
            
            chunks.push(chunk);
          }).on("end",()=>{
            const data = Buffer.concat(chunks);
            resolve(data);
          })
        
        
          
        }).on("error", (err) => {
            console.log("Error: " + err.message);
        });

    })
}


const jsdom = require("jsdom");
const {JSDOM} = jsdom;

const fetch = (username)=>{
  return new Promise((resolve)=>{
      https.get(`https://scratch.mit.edu/users/${username}/followers/`,(resp)=>{
          let chunks = [];
          resp.on('data', (chunk) => {
          
              chunks.push(chunk);
            }).on("end",()=>{
              const data = Buffer.concat(chunks);
              const reg = Buffer.from(data,"utf-8").toString();
              resolve(reg);
            })
      });
  })
}

const parse = (data)=>{
  return new Promise((resolve)=>{
      const html = data;
      const document = new JSDOM(html);
      const followertext = document.window.document.querySelector("h2").textContent;
      const follower = followertext.match(/[0-9]+/g)[0];
      resolve(follower);
      })

}
const func = (username)=>{
  return new Promise((resolve)=>{
      fetch(username).then((resp)=>{parse(resp).then((res)=>{resolve(res)})});

  })
}

exports._getfollower = func;
exports._gettn=gettn;