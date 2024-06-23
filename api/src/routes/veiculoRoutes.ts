import { Router } from 'express';
import { VeiculoController } from '../controllers/VeiculoController';

const router = Router();

router.post('/', VeiculoController.create);
router.put('/:id', VeiculoController.update);
router.get('/:id', VeiculoController.getById);
router.get('/', VeiculoController.getAll);

export default router;
