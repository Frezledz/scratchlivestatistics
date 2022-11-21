const https = require("https");
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

get("https://api.scratch.mit.edu/users/xX_Freezer_Xx/messages/count").then(res=>{console.log(res)})