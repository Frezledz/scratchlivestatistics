const getfollower = async (username) =>{
    const resp = await fetch(`https://scratchdb.lefty.one/v3/user/info/${username}`);
    const follower = (await resp.json()).statistics.followers;
    return follower;
    
}
exports._getfollower = getfollower;