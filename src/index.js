const express=require("express");
const {PORT} = require('./config/serverConfig.js')
const setupAndStartServer =async ()=>{
//create express object
const app=express();

app.listen(PORT,()=>{
  console.log(`server is running on port ${PORT}`);
 
});
}
setupAndStartServer();
