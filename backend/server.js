const http = require('http');
const app = require('./app');
const { log } = require('console');
const port = process.env.port || 3000;


const server = http.createServer(app);

server.listen(port, () => {
    console.log(`server is running on port ${port}`);
    
})