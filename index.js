const http = require('http')
const port = process.env.port || 5000

const server = http.createServer( (req,res) => {
    res.statusCode = 200
    res.setHeader('Content-type', 'text/plain')
    res.end("Hello, world\n")
})

server.listen(port,() => {
    console.log(`server running on port ${port}/`)
})

