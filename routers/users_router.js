const router = require('express').Router();
const { getUsers, getUserById, addUser, updateUser, deleteUserById } = require("../controllers/users_controller");

router.get('/', getUsers);
router.get('/:id', getUserById);
router.post('/add', addUser);
router.put('/:id/update', updateUser);
router.delete('/:id/delete', deleteUserById);

module.exports = router;