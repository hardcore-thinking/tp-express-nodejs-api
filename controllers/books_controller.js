const { getBooks, getBookById } = require("../services/books_services");

exports.getBooks = (request, response) => {
    console.log("GET request received for /books");
    response.status(200).json({
        status: 200,
        books: getBooks()
    });
}

exports.getBookById = (request, response) => {
    console.log(`GET request received for /books/${request.params.id}`);
    response.status(200).json({
        status: 200,
        book: getBookById(request.params.id)
    });
}

exports.addBook = (request, response) => {
    
}

exports.deleteBookById = (request, response) => {
    
}