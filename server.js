const express = require('express');
const app = express();
const port = 8081;
app.use(express.static('public'))
app.listen(port, () => console.log(`listening on port ${port}!`));
app.get("/",(request,response)=>{
response.sendFile(__dirname+'/index.html');
})