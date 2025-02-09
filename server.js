// server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5500
;

app.get('/', (req, res) => {
    res.send('Hello, Jenkins!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Export for testing
module.exports = app;
