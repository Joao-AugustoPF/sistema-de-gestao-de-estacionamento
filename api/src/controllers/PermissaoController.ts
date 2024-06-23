import { Request, Response } from 'express';
import Permissao from '../models/Permissao';

export class PermissaoController {
    static async getAll(req: Request, res: Response): Promise<void> {
        try {
            const permissoes = await Permissao.findAll();
            res.json(permissoes);
        } catch (error: any) {
            res.status(500).send(error.message);
        }
    }

    static async getById(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const permissao = await Permissao.findByPk(id);

            if (!permissao) {
                res.status(404).send('Permissão não encontrada');
                return;
            }

            res.status(200).json(permissao);
        } catch (error: any) {
            res.status(500).send(error.message);
        }
    }

    static async create(req: Request, res: Response): Promise<void> {
        const { descricao } = req.body;
        try {
            const permissao = await Permissao.create({ descricao });
            res.status(201).json(permissao);
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    }

    static async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const { descricao } = req.body;

        try {
            const permissao = await Permissao.findByPk(id);
            if (!permissao) {
                res.status(404).json({ message: 'Permissão não encontrada' });
                return
            }

            permissao.descricao = descricao;
            await permissao.save();
            res.status(200).json(permissao);
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    }
}
