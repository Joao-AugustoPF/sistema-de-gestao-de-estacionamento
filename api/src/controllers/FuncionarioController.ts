import { Request, Response } from 'express';
import Funcionario from '../models/Funcionario';

export class FuncionarioController {
    static async getAll(req: Request, res: Response): Promise<void> {
        try {
            const funcionarios = await Funcionario.findAll();
            res.json(funcionarios);
        } catch (error: any) {
            res.status(500).send(error.message);
        }
    }

    static async getById(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const funcionario = await Funcionario.findByPk(id);

            if (!funcionario) {
                res.status(404).send('Funcionário não encontrado');
                return;
            }

            res.status(200).json(funcionario);
        } catch (error: any) {
            res.status(500).send(error.message);
        }
    }

    static async create(req: Request, res: Response): Promise<void> {
        const { nome, cpf, cargo, permissaoId } = req.body;
        try {
            const funcionario = await Funcionario.create({ nome, cpf, cargo, permissaoId });
            res.status(201).json(funcionario);
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    }

    static async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const { nome, cpf, cargo, permissaoId } = req.body;

        try {
            const funcionario = await Funcionario.findByPk(id);
            if (!funcionario) {
                res.status(404).json({ message: 'Funcionário não encontrado' });
                return
            }

            funcionario.nome = nome;
            funcionario.cpf = cpf;
            funcionario.cargo = cargo;
            funcionario.permissaoId = permissaoId;

            await funcionario.save();
            res.status(200).json(funcionario);
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    }
}
