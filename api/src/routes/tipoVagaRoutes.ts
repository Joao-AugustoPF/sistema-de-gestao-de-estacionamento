// src/routes/tipoVagaRoutes.ts
import { Router } from 'express';
import { TipoVagaController } from '../controllers/TipoVagaController';

const router = Router();

router.post('/', TipoVagaController.create);
router.put('/:id', TipoVagaController.update);
router.get('/:id', TipoVagaController.getById);
router.get('/', TipoVagaController.getAll);

export default router;
