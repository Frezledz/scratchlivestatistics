
const setthumb = async (file,projectId,sessionid) =>{
    const resp = await fetch(`https://scratch.mit.edu/internalapi/project/thumbnail/${projectId}/set/`, {
            method: "POST",
            body: file,
            credentials: "include",
            headers: {
                "x-csrftoken": "a",
                "referer": "https://scratch.mit.edu",
                "Cookie": "scratchcsrftoken=a;scratchlanguage=en;scratchsessionsid="+sessionid+";"
            }
        });
        console.log(resp.status);

}


exports._setthumb=setthumb;