var http = require('http');
var hostname='127.0.0.1';
var port=8083;

const server=http.createServer(function(req,res){
    // console.log("request : ", req);
    // res.end("hello client!");

    const path=req.url;
    const method=req.method;
    if(path === '/products'){
        if(method==='GET'){
            
            res.writeHead(200,{'Content-Type':'application/json'});
            const products=JSON.stringify([{
                name:"농구공",
                price:5000
            }]);//node 배열보내기
            res.end(products);
        }else if(method ==='POST'){

        }
    }

});

server.listen(port, hostname);

console.log('server on!');