import { Request, Response } from 'express';
import TipoVaga from '../models/TipoVaga';

export class TipoVagaController {
    static async getAll(req: Request, res: Response): Promise<void> {
        try {
            const tipoVagas = await TipoVaga.findAll();
            res.json(tipoVagas);
        } catch (error: any) {
            res.status(500).send(error.message);
        }
    }

    static async getById(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const tipoVaga = await TipoVaga.findByPk(id);

            if (!tipoVaga) {
                res.status(404).send('Tipo de vaga não encontrado');
                return;
            }

            res.status(200).json(tipoVaga);
        } catch (error: any) {
            res.status(500).send(error.message);
        }
    }

    static async create(req: Request, res: Response): Promise<void> {
        const { descricao } = req.body;
        try {
            const tipoVaga = await TipoVaga.create({ descricao });
            res.status(201).json(tipoVaga);
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    }

    static async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const { descricao } = req.body;

        try {
            const tipoVaga = await TipoVaga.findByPk(id);
            if (!tipoVaga) {
                res.status(404).json({ message: 'Tipo de vaga não encontrado' });
                return
            }

            tipoVaga.descricao = descricao;
            await tipoVaga.save();
            res.status(200).json(tipoVaga);
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    }
}
