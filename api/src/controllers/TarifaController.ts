// src/controllers/TarifaController.ts
import { Request, Response } from 'express';
import Tarifa from '../models/Tarifa';

export class TarifaController {
    static async getAll(req: Request, res: Response): Promise<void> {
        try {
            const tarifas = await Tarifa.findAll();
            res.json(tarifas);
        } catch (error: any) {
            res.status(500).send(error.message);
        }
    }

    static async getById(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const tarifa = await Tarifa.findByPk(id);

            if (!tarifa) {
                res.status(404).send('Tarifa não encontrada');
                return;
            }

            res.status(200).json(tarifa);
        } catch (error: any) {
            res.status(500).send(error.message);
        }
    }

    static async create(req: Request, res: Response): Promise<void> {
        const { tipoId, valorPorHora } = req.body;
        try {
            const tarifa = await Tarifa.create({ tipoId, valorPorHora });
            res.status(201).json(tarifa);
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    }

    static async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const { tipoId, valorPorHora } = req.body;

        try {
            const tarifa = await Tarifa.findByPk(id);
            if (!tarifa) {
                res.status(404).json({ message: 'Tarifa não encontrada' });
                return
            }

            tarifa.tipoId = tipoId;
            tarifa.valorPorHora = valorPorHora;
            await tarifa.save();
            res.status(200).json(tarifa);
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    }
}
