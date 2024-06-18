// src/routes/pagamentoRoutes.ts
import { Router } from 'express';
import { PagamentoController } from '../controllers/PagamentoController';

const router = Router();

router.post('/', PagamentoController.create);
router.put('/:id', PagamentoController.update);
router.get('/:id', PagamentoController.getById);
router.get('/', PagamentoController.getAll);

export default router;
