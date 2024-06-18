// src/routes/tarifaRoutes.ts
import { Router } from 'express';
import { TarifaController } from '../controllers/TarifaController';

const router = Router();

router.post('/', TarifaController.create);
router.put('/:id', TarifaController.update);
router.get('/:id', TarifaController.getById);
router.get('/', TarifaController.getAll);

export default router;
