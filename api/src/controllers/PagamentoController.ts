// src/controllers/PagamentoController.ts
import { Request, Response } from 'express';
import Pagamento from '../models/Pagamento';

export class PagamentoController {
    static async getAll(req: Request, res: Response): Promise<void> {
        try {
            const pagamentos = await Pagamento.findAll();
            res.json(pagamentos);
        } catch (error: any) {
            res.status(500).send(error.message);
        }
    }

    static async getById(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const pagamento = await Pagamento.findByPk(id);

            if (!pagamento) {
                res.status(404).send('Pagamento não encontrado');
                return;
            }

            res.status(200).json(pagamento);
        } catch (error: any) {
            res.status(500).send(error.message);
        }
    }

    static async create(req: Request, res: Response): Promise<void> {
        const { movimentacaoId, metodoPagamento, valorPago } = req.body;
        try {
            const pagamento = await Pagamento.create({ movimentacaoId, metodoPagamento, valorPago });
            res.status(201).json(pagamento);
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    }

    static async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const { movimentacaoId, metodoPagamento, valorPago } = req.body;

        try {
            const pagamento = await Pagamento.findByPk(id);
            if (!pagamento) {
                res.status(404).json({ message: 'Pagamento não encontrado' });
                return;
            }

            pagamento.movimentacaoId = movimentacaoId;
            pagamento.metodoPagamento = metodoPagamento;
            pagamento.valorPago = valorPago;
            await pagamento.save();
            res.status(200).json(pagamento);
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    }
}
