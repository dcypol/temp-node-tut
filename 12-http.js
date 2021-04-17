const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('welcome to our homepage')

    }
    if(req.url==='/about'){
        res.end('here is our short history')
    }

    res.end(`
        <h1> OOOPS!!!</h1>
        <p>PAGE NOT FOUND</p>
        <a href="/">BACK HOME</a>
    `)
})

server.listen(5000)