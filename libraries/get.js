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

const getfollower = (username)=>{
  return new Promise((resolve)=>{
      https.get(`https://scratchdb.lefty.one/v3/user/info/${username}`, (resp)=>{
        let chunks = [];
        resp.on('data', (chunk) => {
          chunks.push(chunk);
        }).on("end",()=>{
          const data =JSON.parse(Buffer.concat(chunks)).statistics.followers;
           resolve(data);
        })
      
      
        
      }).on("error", (err) => {
          console.log("Error: " + err.message);
      });

  })
}

exports._gettn=gettn;
exports._getfollower=getfollower;