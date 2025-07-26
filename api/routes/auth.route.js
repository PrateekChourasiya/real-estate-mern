import express from 'express';
import { signup } from '../controllers/auth.controller.js';

const app = express();

const router = express.Router();

app.use(express.json());

router.post("/signup", signup);

export default router;