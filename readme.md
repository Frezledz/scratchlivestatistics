# Scratch Live Follower  
Scratchのプロジェクトのサムネイルを定期的に変更することによって自分のフォロワー数を表示します。  
This project will show us LIVE follower count by changing Scratch project's thumbnail periodic.  

## requirement
Node.js 18.0+  
## Usage
1. Download files
```
git clone https://github.com/xxXFreezerXxx/scratchlivefollowers.git
```  
or download zip  
2. Create `.env`file and edit
```
username=yourusername
password=securepassowrd
projectid=yourprojectid
```
3. Run `npm start`
## LICENCE  
MIT Licence.
## NOTE
1000秒に1回の頻度で変更されます。Replitなどで24時間実行させておくといいでしょう。  
Thumbnail will be changed once in 1000 seconds. I recoomend you to run this on replit or something to run 24/7.