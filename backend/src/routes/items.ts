import express from 'express';
import { getItems, getItem } from '../controllers/items';

const router = express.Router();

router.get('/', getItems);
router.get('/:id', getItem);

module.exports = router;
