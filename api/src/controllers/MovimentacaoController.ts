// src/controllers/MovimentacaoController.ts
import { Request, Response } from 'express';
import Movimentacao from '../models/Movimentacao';

export class MovimentacaoController {
    static async getAll(req: Request, res: Response): Promise<void> {
        try {
            const movimentacoes = await Movimentacao.findAll();
            res.json(movimentacoes);
        } catch (error: any) {
            res.status(500).send(error.message);
        }
    }

    static async getById(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const movimentacao = await Movimentacao.findByPk(id);

            if (!movimentacao) {
                res.status(404).send('Movimentação não encontrada');
                return;
            }

            res.status(200).json(movimentacao);
        } catch (error: any) {
            res.status(500).send(error.message);
        }
    }

    static async create(req: Request, res: Response): Promise<void> {
        const { vagaId, veiculoId, pagamentoId, entrada, saida } = req.body;
        try {
            const movimentacao = await Movimentacao.create({ vagaId, veiculoId, pagamentoId, entrada, saida });
            res.status(201).json(movimentacao);
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    }

    static async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const { vagaId, veiculoId, pagamentoId, entrada, saida } = req.body;

        try {
            const movimentacao = await Movimentacao.findByPk(id);
            if (!movimentacao) {
                res.status(404).json({ message: 'Movimentação não encontrada' });
                return 
            }

            movimentacao.vagaId = vagaId;
            movimentacao.veiculoId = veiculoId;
            movimentacao.pagamentoId = pagamentoId;
            movimentacao.entrada = entrada;
            movimentacao.saida = saida;
            await movimentacao.save();
            res.status(200).json(movimentacao);
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    }
}
