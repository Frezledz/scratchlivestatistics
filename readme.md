# Scratch Live Statics  
Scratchのプロジェクトのサムネイルを定期的に変更することによって自分のScratchアカウントの統計を表示します。  
This project will show us LIVE statistics by changing Scratch project's thumbnail periodic.  

## requirement
Node.js (it should work on widely used version./よく使われているバージョンなら大体動くはずです。)
## Usage
1. Download files
```
git clone https://github.com/Frezledz/scratchlivestatistics.git
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
起動すると一度だけ変更されます。定期的に変更したいならindex.js上でSetintervalの中で関数を実行すればいいでしょう。  
It will change the thumbnail ONLY ONCE when you start up. If you want to change it periodic, go to index.js and setinterval the function specified(or other way you know)
## Credit
Jimp
