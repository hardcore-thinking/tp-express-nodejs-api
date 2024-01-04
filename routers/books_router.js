const router = require('express').Router();
const { getBooks, getBookById, addBook, deleteBookById } = require('../controllers/books_controller');

router.get('/', getBooks);
router.get('/:id', getBookById);
router.post('/add', addBook);
router.delete('/:id/delete', deleteBookById);

module.exports = router;