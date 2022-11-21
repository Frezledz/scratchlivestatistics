const fs = require("fs");
const https = require('https');
const Jimp = require("jimp");
const date = new Date();


const get = (link)=>{
    return new Promise((resolve)=>{
        https.get(link, (resp)=>{
          let chunks = [];
          resp.on('data', (chunk) => {
            chunks.push(chunk);
          }).on("end",()=>{
            const data = Buffer.concat(chunks);
              const reg = JSON.parse(Buffer.from(data,"utf-8").toString());
            
            resolve(reg);
          })
        
        
          
        }).on("error", (err) => {
            console.log("Error: " + err.message);
        });

    })
}
const gettn = async(follower,username)=> {
  return new Promise((resolve,reject)=>{
    get(`https://scratchdb.lefty.one/v3/user/info/${username}`).then(res=>{
        const db = res;
            Jimp.read('bg.png').then(async image=>{
                const count = await get(`https://api.scratch.mit.edu/users/${username}/messages/count`);
                const font = await Jimp.loadFont(Jimp.FONT_SANS_32_BLACK);  
                let pos=[];
                for(let i=0;i<6;i++){
                    pos.push(85+i*33);
                }
                image.print(font, 250, pos[0], `${db.statistics.followers}`);
                image.print(font, 250, pos[1], `${db.statistics.views}`);
                image.print(font, 250, pos[2], `${db.statistics.loves}`);
                image.print(font, 250, pos[3], `${db.statistics.favorites}`);
                image.print(font, 250, pos[4], `${count.count}`);
                image.print(font, 250, pos[5], `${follower}`);
                image.print(font, 10, 300, `last modified(UTC): ${date.getUTCHours()}:${date.getUTCMinutes()}:${date.getUTCSeconds()}`);
                image.writeAsync("a.png").then(()=>{
                  fs.readFile("a.png",(err,data)=>{
                    resolve(data)
                  })
                });
        
            })

    })


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