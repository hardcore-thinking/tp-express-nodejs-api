const router = require('express').Router();
const { getReviews, addReview, deleteReview } = require("../controllers/reviews_controller");

router.get('/', getReviews);
router.post('/add', addReview);
router.delete('/:userId/:bookId/delete', deleteReview);

module.exports = router;