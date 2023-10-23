const express = require('express');
const axios = require('axios');
const app = express();
const port = 3002;

app.get('/', async (req, res) => {
    try {
        const { data } = await axios.get('http://localhost:3001');
        res.json({ message: 'Service B is up and running.', serviceAMessage: data.message });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Service B encountered an error while communicating with Service A.' });
    }
});

app.listen(port, () => {
    console.log(`Service B is running on port ${port}`);
});
