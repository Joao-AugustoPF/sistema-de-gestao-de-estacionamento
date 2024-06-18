// src/controllers/VeiculoController.ts
import { Request, Response } from 'express';
import Veiculo from '../models/Veiculo';

export class VeiculoController {
    static async getAll(req: Request, res: Response): Promise<void> {
        try {
            const veiculos = await Veiculo.findAll();
            res.json(veiculos);
        } catch (error: any) {
            res.status(500).send(error.message);
        }
    }

    static async getById(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const veiculo = await Veiculo.findByPk(id);

            if (!veiculo) {
                res.status(404).send('Veículo não encontrado');
                return;
            }

            res.status(200).json(veiculo);
        } catch (error: any) {
            res.status(500).send(error.message);
        }
    }

    static async create(req: Request, res: Response): Promise<void> {
        const { placa, tipoVeiculo } = req.body;
        try {
            const veiculo = await Veiculo.create({ placa, tipoVeiculo });
            res.status(201).json(veiculo);
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    }

    static async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const { placa, tipoVeiculo } = req.body;

        try {
            const veiculo = await Veiculo.findByPk(id);
            if (!veiculo) {
                res.status(404).json({ message: 'Veículo não encontrado' });
                return 
            }

            veiculo.placa = placa;
            veiculo.tipoVeiculo = tipoVeiculo;
            await veiculo.save();
            res.status(200).json(veiculo);
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    }
}
