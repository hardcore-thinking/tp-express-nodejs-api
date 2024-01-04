const { getReviews, addReview, deleteReview } = require("../services/reviews_services");

exports.getReviews = (request, response) => {
    console.log("GET request received for /reviews");
    response.status(200).json({
        status: 200,
        books: getReviews()
    });
}

exports.addReview = (request, response) => {

}

exports.deleteReview = (request, response) => {

}