import express from 'express';
const app = express();
const port = 4000;
import fs from 'fs';
import { EventEmitter } from 'events';

// ***************Try...Catch***************

app.get("/", async (req, res) => {
    try {
        res.status(201).json({ message: "Hello, from server" })
    } catch (e) {
        return res.status(401).json(e);
    }
});

// ***********Callback Error Handling***********
fs.readFile('file.txt', "utf-8", (err, data) => {
    if (err) {
        console.error(err);
    } else {
        console.log(data);
    }
});

// ******************Promises******************
const getData = () => {
    return new Promise((resolve, reject) => {
        resolve("Hello World");
    });
};

getData().then((val) => {
    console.log(val);
}).catch((e) => {
    console.log(e);
})

// ****************Event Emitters****************
const emitter = new EventEmitter();

emitter.on('error', (error) => {
    console.log(error);
});

emitter.emit('error', new Error('An error occurred'));

// **************Global Unhandled Exception Handler**************
process.on('uncaughtException', (error) => {
    console.error('Uncaught Exception:', error);
    process.exit(1);
});

// *************Global Promise Rejection Handler*************
process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection:', reason);
});


app.listen(port, () => {
    console.log(`Application Listening on port ${port}`);
});
