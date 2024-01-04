const express = require('express');
const booksRouter = require('./routers/books_router');

const PORT = 8080;

const app = express();
app.use(express.json());

app.use("/books", booksRouter);

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});