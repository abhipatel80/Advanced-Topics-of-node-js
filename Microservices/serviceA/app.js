const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
    res.json({ message: 'Service A is up and running.' });
});

app.listen(port, () => {
    console.log(`Service A is running on port ${port}`);
});
