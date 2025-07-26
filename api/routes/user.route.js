import express from 'express';
import { test } from '../controllers/user.controller.js';

const app = express();

const router = express.Router();

app.use(express.json());

router.get('/test', test);

export default router;