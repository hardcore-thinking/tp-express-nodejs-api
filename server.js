const express = require('express');
const booksController = require('');

const PORT = 8080;

const app = express();
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});