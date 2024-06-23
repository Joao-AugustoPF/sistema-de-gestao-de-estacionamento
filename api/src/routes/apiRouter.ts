import { Router } from 'express';
import permissaoRoutes from './permissaoRoutes';
import funcionarioRoutes from './funcionarioRoutes';
import tipoVagaRoutes from './tipoVagaRoutes';
import tarifaRoutes from './tarifaRoutes';
import veiculoRoutes from './veiculoRoutes';
import vagaRoutes from './vagaRoutes';
import movimentacaoRoutes from './movimentacaoRoutes';
import pagamentoRoutes from './pagamentoRoutes';

const router = Router();

router.use('/permissoes', permissaoRoutes);
router.use('/funcionarios', funcionarioRoutes);
router.use('/tipovagas', tipoVagaRoutes);
router.use('/tarifas', tarifaRoutes);
router.use('/veiculos', veiculoRoutes);
router.use('/vagas', vagaRoutes);
router.use('/movimentacoes', movimentacaoRoutes);
router.use('/pagamentos', pagamentoRoutes);

export default router;
