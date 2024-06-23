import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Funcionario from '../models/Funcionario';
import Permissao from '../models/Permissao';

import * as dotenv from "dotenv"

dotenv.config()

const SECRET_KEY = `${process.env.SECRET_KEY}`;

export async function register(req: Request, res: Response) {
  try {
    const { nome, cpf, cargo, permissaoId, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const funcionario = await Funcionario.create({ nome, cpf, cargo, permissaoId, password: hashedPassword });
    res.status(201).json(funcionario);
  } catch (error: any) {
    res.status(500).json({ message: 'Error creating employee.', error: error.message });
  }
}

export const login = async (req: Request, res: Response) => {
  try {
    const { cpf, password } = req.body;
    const funcionario = await Funcionario.findOne({ where: { cpf }, include: [Permissao] });

    if (!funcionario) {
      return res.status(401).json({ message: 'Funcionário não encontrado' });
    }

    const isMatch = await bcrypt.compare(password, funcionario.password);

    if (!isMatch) {
      return res.status(401).json({ message: 'Senha incorreta' });
    }

    const payload = {
      id: funcionario.id,
      nome: funcionario.nome,
      cpf: funcionario.cpf,
      cargo: funcionario.cargo,
      permissao: funcionario.permissaoId
    };

    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' });

    res.json({ auth: true, message: 'Login bem-sucedido', token });
  } catch (error: any) {
    res.status(500).json({ message: 'Erro no servidor', error: error.message });
  }
};
