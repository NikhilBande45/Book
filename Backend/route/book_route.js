import express from 'express'
const router = express.Router();
import { getBook } from '../controller/book_controller.js'
import { addbook } from '../controller/book_controller.js';
import { getSpecificBook } from '../controller/book_controller.js';
import { updateBook } from '../controller/book_controller.js';
import { deleteBook } from '../controller/book_controller.js';
import { searchBook } from '../controller/book_controller.js';

router.route('/search').get(searchBook)
router.route('/').get(getBook);
router.route('/').post(addbook)
router.route('/:id').get(getSpecificBook)
router.route('/:id').put(updateBook)
router.route('/:id').delete(deleteBook)


export default router;
