// ***************Asynchronous Operations***************

const fetchData = async () => {
    const result = await fetch('https://jsonplaceholder.typicode.com/todos');
    return await result.json();
};


// **********************caching**********************
const NodeCache = require('node-cache');
const myCache = new NodeCache({ stdTTL: 600 });

const getCachedData = async () => {
    const data = myCache.get("data");
    if (data) {
        return data;
    } else {
        const newData = await fetchData();
        myCache.set("data", newData);
        return newData;
    }
}

getCachedData();


// *********************Database Optimization*********************

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, index: true },
    email: { type: String, unique: true },
});

const User = mongoose.model('User', userSchema);


// ************************Using Streams************************
const fs = require('fs');
const readStream = fs.createReadStream('text.txt');

readStream.on('data', (chunk) => {
    console.log(chunk);
});
