let reviews = [
    {
        userId: 0,
        bookId: 0,
        date: new Date().toISOString(),
        note: 9
    }
];

exports.getReviews = () => {
    return reviews;
}

exports.addReview = (userId, bookId, note) => {
    reviews.push({
        userId,
        bookId,
        date: new Date().toISOString(),
        note
    });
}

exports.deleteReview = (userId, bookId) => {
    reviews.splice(reviews.findIndex((review) => review.userId === userId && review.bookId === bookId), 1);
}