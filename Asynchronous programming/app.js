
// ***************Callbacks***************
const fs = require('fs');
fs.readFile('file.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});


// ***************Promises***************
const file = require('fs').promises;

file.readFile('file.txt', 'utf8')
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.error(err);
    });


// *****************Async/Await*****************
const readFileAsync = async () => {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos");
        const data = await res.json();
        return data;
    } catch (err) {
        console.error(err);
    }
}

readFileAsync();

// *****************Event Emitters*****************
const EventEmitter = require('events');
const customEmitter = new EventEmitter();

customEmitter.on('customEvent', (message, user) => {
    console.log(`${user}: ${message}`);
});

customEmitter.emit('customEvent', 'Hello, World!', 'User123');

