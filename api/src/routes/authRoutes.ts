import express from 'express';
import { login } from '../controllers/AuthController';

const router = express.Router();


router.post('/login', login);

router.get('/logout', (req, res) => {
  req.logout(() => {
    res.redirect('/login');
  });
});

export default router;