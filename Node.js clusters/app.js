const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
    // If the current process is the master process (parent), fork workers
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} died`);
    });
} else {
    // If the current process is a worker, create an HTTP server
    http.createServer((req, res) => {
        res.writeHead(200);
        res.end('Hello, World!');
    }).listen(8000);

    console.log(`Worker ${process.pid} started`);
}
