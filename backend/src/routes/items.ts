import express from 'express';
import { getItems } from '../controllers/items';

const router = express.Router();

router.get('/', getItems);

export { router };
