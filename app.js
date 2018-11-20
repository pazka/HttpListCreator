const express = require('express')
const app = express()
const bodyParser = require('body-parser')
var fs = require('fs')
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());



app.get('/',function(req,res){
    res.sendFile("index.html", { root: __dirname });
})

app.post('/maillist', function (req, res) {

    //if mdp is correct
    if(req.body.mdp == process.env.MDPINS ? process.env.MDPINS : "osef"){
        res.sendFile("maillist.txt", { root: __dirname })
    }
})

app.post('/new', function (req, res) {
        console.log(req.body)
        fs.appendFile("maillist.txt",req.body.mail + "\r\n", (err)=> {
            if (err) res.send(err)
            else  res.sendStatus(200)
        });
})
  
app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})
