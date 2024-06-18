// src/routes/vagaRoutes.ts
import { Router } from 'express';
import { VagaController } from '../controllers/VagaController';

const router = Router();

router.post('/', VagaController.create);
router.put('/:id', VagaController.update);
router.get('/:id', VagaController.getById);
router.get('/', VagaController.getAll);

export default router;
