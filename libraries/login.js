const https = require("https");
const login = (name,pass)=>{
  return new Promise((resolve) =>{
    const reqoptions = {
        hostname: 'scratch.mit.edu',
//        port: 443,
        path: '/login/',
        headers: {
          "x-csrftoken": "a",
          "x-requested-with": "XMLHttpRequest",
          "Cookie": "scratchcsrftoken=a;scratchlanguage=en;",
          "referer": "https://scratch.mit.edu"
        },
        method: "POST"
      }
      const data = JSON.stringify({ username:name, password:pass, useMessages: true })
      const req = https.request(reqoptions, res => {
  
          res.on('data', () => {
            for(c of res.rawHeaders){
              if(c.includes("scratchsessionsid")){
                resolve(c.match(/\"(.*)\"/g)[0]);
                break;
              }
            }
              resolve(res.rawHeaders[15].includes(""));
          });
      })
        
      req.on('error', error => {
        console.error(error);
      })
        
      req.write(data);
      req.end();
  
  })
  

}



exports._login = login;