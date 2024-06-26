const express = require('express');
const booksRouter = require('./routers/books_router');
const usersRouter = require('./routers/users_router');
const reviewsRouter = require('./routers/reviews_router');

const PORT = 8080;

const app = express();
app.use(express.json());

app.use("/books", booksRouter);
app.use("/users", usersRouter);
app.use("/reviews", reviewsRouter);

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});