const { getReviews, addReview, deleteReview } = require("../services/reviews_services");
const getBooks = require("../services/books_services").getBooks;
const getUsers = require("../services/users_services").getUsers;

exports.getReviews = (request, response) => {
    console.log("GET request received for /reviews");
    response.status(200).json({
        status: 200,
        books: getReviews()
    });
}

exports.addReview = (request, response) => {
    console.log("POST request received for /reviews");
    // Some data are missing or are invalid
    if (request.body.userId === undefined || request.body.bookId === undefined || request.body.note === undefined) {
        response.status(400).json({
            status: 400,
            details: "Invalid data provided or missing datas for the review creation"
        });
    } 
    // A non existant user cannot review a book and a non existant book cannot be reviewed
    else if (!getUsers().map((user) => user.id).includes(parseInt(request.body.userId)) ||
             !getBooks().map((book) => book.id).includes(parseInt(request.body.bookId))) {
        response.status(404).json({
            status: 404,
            details: "Either the userId doesn't exist or the bookId doesn't exist"
        });
    }
    // only one review from a specific user is done for a specific book
    else if (getReviews().find((review) => review.userId === parseInt(request.body.userId) && review.bookId === parseInt(request.body.bookId)) !== undefined) {
        response.status(304).json({
            status: 304,
            details: "A review already exists for the given userId and bookId"
        });
    }
    // in any other cases, we add the datas to the avalaible reviews and move on
    else {
        addReview(parseInt(request.body.userId), parseInt(request.body.bookId), parseInt(request.body.note));
        response.status(201).json({
            status: 201,
            details: "The review has been added successfully"
        });
    }
}

exports.deleteReview = (request, response) => {
    console.log(`DELETE request received for /reviews/${request.params.userId}/${request.params.bookId}/delete`);
    // only one review from a specific user is done for a specific book
    if (getReviews().find((review) => review.userId === parseInt(request.params.userId) && review.bookId === parseInt(request.params.bookId)) === undefined) {
        response.status(404).json({
            status: 404,
            details: "The review with the given userId and bookId doesn't exist "
        });
    }
    // in any other cases, we get rid of the review and move on
    else {
        deleteReview(parseInt(request.params.userId), parseInt(request.params.bookId));
        response.status(200).json({
            status: 200,
            details: "The review has been deleted successfully"
        });
    }
}