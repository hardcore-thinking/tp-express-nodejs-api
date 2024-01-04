const { getBooks, getBookById, addBook, deleteBookById } = require("../services/books_services");

exports.getBooks = (request, response) => {
    console.log("GET request received for /books");
    response.status(200).json({
        status: 200,
        books: getBooks()
    });
}

exports.getBookById = (request, response) => {
    console.log(`GET request received for /books/${request.params.id}`);
    if (!getBooks().map((book) => book.id).includes(parseInt(request.params.id))) {
        response.status(404).json({
            status: 404,
            details: "The given id doesn't exist"
        });
    }
    else {
        response.status(200).json({
            status: 200,
            book: getBookById(parseInt(request.params.id))
        });
    }
}

exports.addBook = (request, response) => {
    console.log(`PUT request received for /books`);
    if (request.body.title !== undefined && request.body.release_year !== undefined) {
        addBook(request.body.title, request.body.release_year);
        response.status(201).json({
            status: 201,
            details: "The book has been added successfully"
        });
    } else {
        response.status(400).json({
            status: 400,
            details: "Title and/or release year is/are missing"
        });
    }
}

exports.deleteBookById = (request, response) => {
    console.log(`DELETE request received for /books/${request.params.id}/delete`);
    if (!getBooks().map((book) => book.id).includes(parseInt(request.params.id))) {
        response.status(404).json({
            status: 404,
            details: "The given id doesn't exist"
        });
    }
    else {
        deleteBookById(parseInt(request.params.id));
        response.status(200).json({
            status: 200,
            details: "The book has been deleted successfully"
        });
    }
}