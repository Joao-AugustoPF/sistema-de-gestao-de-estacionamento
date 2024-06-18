// src/controllers/VagaController.ts
import { Request, Response } from 'express';
import Vaga from '../models/Vaga';

export class VagaController {
    static async getAll(req: Request, res: Response): Promise<void> {
        try {
            const vagas = await Vaga.findAll();
            res.json(vagas);
        } catch (error: any) {
            res.status(500).send(error.message);
        }
    }

    static async getById(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const vaga = await Vaga.findByPk(id);

            if (!vaga) {
                res.status(404).send('Vaga não encontrada');
                return;
            }

            res.status(200).json(vaga);
        } catch (error: any) {
            res.status(500).send(error.message);
        }
    }

    static async create(req: Request, res: Response): Promise<void> {
        const { numero, tipoId, veiculoId, disponivel } = req.body;
        try {
            const vaga = await Vaga.create({ numero, tipoId, veiculoId, disponivel });
            res.status(201).json(vaga);
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    }

    static async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const { numero, tipoId, veiculoId, disponivel } = req.body;

        try {
            const vaga = await Vaga.findByPk(id);
            if (!vaga) {
                res.status(404).json({ message: 'Vaga não encontrada' });
                return 
            }

            vaga.numero = numero;
            vaga.tipoId = tipoId;
            vaga.veiculoId = veiculoId;
            vaga.disponivel = disponivel;
            await vaga.save();
            res.status(200).json(vaga);
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    }
}
