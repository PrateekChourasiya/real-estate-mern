import express from 'express';
import { signin, signup } from '../controllers/auth.controller.js';

const app = express();

const router = express.Router();

app.use(express.json());

router.post("/signup", signup);
router.post("/signin", signin);

export default router;