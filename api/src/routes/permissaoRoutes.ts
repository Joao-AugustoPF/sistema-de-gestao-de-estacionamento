// src/routes/permissaoRoutes.ts
import { Router } from 'express';
import { PermissaoController } from '../controllers/PermissaoController';

const router = Router();

router.post('/', PermissaoController.create);
router.put('/:id', PermissaoController.update);
router.get('/:id', PermissaoController.getById);
router.get('/', PermissaoController.getAll);

export default router;
