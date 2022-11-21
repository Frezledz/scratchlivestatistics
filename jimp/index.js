const Jimp = require("jimp");
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
const main = async()=> {
    get("https://scratchdb.lefty.one/v3/user/info/xX_Freezer_Xx").then(res=>{
        const db = res;
            Jimp.read('bg.png').then(async image=>{
                const count = await get("https://api.scratch.mit.edu/users/xX_Freezer_Xx/messages/count");
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
                image.print(font, 250, pos[5], `${db.statistics.followers}`);
                image.writeAsync("a.png").then(res=>{console.log("done")});
        
            })

    })

}
  main();