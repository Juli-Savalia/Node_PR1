const http = require('http')
const fs = require("fs")
const port = 8000;

http.createServer((req,res)=>{
    // res.write(`<h2>Hello</h2>`)

    let fileName = " ";
    console.log(req.url);
    switch (req.url) {
        case '/Home':
            fileName='./Home.html';
            break;
    
        case '/About':
            fileName='./About.html';
            break;

        case '/Contact':
            fileName='./Contact.html';
            break;
        
        default:
            fileName='./404.html';
            break;
    }
    fs.readFile(fileName,(err,data)=>{
        if(err)
        {
            console.log("File Not Found");
            return false;
        }
    res.end(data);
    })
}).listen(port)