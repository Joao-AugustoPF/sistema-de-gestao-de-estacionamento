// src/routes/funcionarioRoutes.ts
import { Router } from 'express';
import { FuncionarioController } from '../controllers/FuncionarioController';
import { authorize } from '../middlewares/authorize';
import isAuthenticated from '../middlewares/isAuthenticated';

const router = Router();

router.post('/', isAuthenticated, authorize(['Administrador']), FuncionarioController.create);
router.put('/:id', isAuthenticated, authorize(['Administrador']), FuncionarioController.update);
router.get('/:id', isAuthenticated, authorize(['Administrador', 'Operador']), FuncionarioController.getById);
router.get('/', isAuthenticated, authorize(['Administrador', 'Operador']), FuncionarioController.getAll);

export default router;
