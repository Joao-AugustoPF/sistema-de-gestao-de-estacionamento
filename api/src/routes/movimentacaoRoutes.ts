import { Router } from 'express';
import { MovimentacaoController } from '../controllers/MovimentacaoController';

const router = Router();

router.post('/', MovimentacaoController.create);
router.put('/:id', MovimentacaoController.update);
router.get('/:id', MovimentacaoController.getById);
router.get('/', MovimentacaoController.getAll);

export default router;
