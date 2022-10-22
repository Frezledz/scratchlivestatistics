const https = require("https");
const setthumb = async(file,projectId,sessionid)=>{
  return new Promise((resolve) =>{
    const reqoptions = {
        hostname: 'scratch.mit.edu',
        port: 443,
        path: `/internalapi/project/thumbnail/${projectId}/set/`,
        headers: {
          "x-csrftoken": "a",
          "x-requested-with": "XMLHttpRequest",
          "Cookie": `scratchcsrftoken=a;scratchlanguage=en;scratchsessionsid=${sessionid};`,
          "referer": "https://scratch.mit.edu"
        },
        method: "POST"
      }
      const req = https.request(reqoptions, res => {
  
          res.on('data', () => {
            resolve(res.statusCode);
          });
      })
        
      req.on('error', error => {
        console.error(error);
      })
        
      req.write(file);
      req.end();
  
  })
  

}


exports._setthumb=setthumb;

