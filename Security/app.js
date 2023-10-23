const express = require('express');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const csurf = require('csurf');

const app = express();
const port = 3000;

// Adds various HTTP headers for security
app.use(helmet());

// Parse cookies
app.use(cookieParser());

// CSRF protection
app.use(csurf());

// Routes
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Error handling
app.use((err, req, res, next) => {
    if (err.code === 'EBADCSRFTOKEN') {
        res.status(403).send('CSRF Attack Detected');
    } else {
        res.status(500).send('Internal Server Error');
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
