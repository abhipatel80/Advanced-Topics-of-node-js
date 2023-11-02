const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if (cluster.isPrimary) {
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }
} else {
    http.createServer((req, res) => {
        res.writeHead(200);
        res.end('Hello, World!');
    }).listen(8000);

    console.log(`Worker ${process.pid} started`);
}
