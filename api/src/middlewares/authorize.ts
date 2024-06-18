// src/middleware/authorize.ts
import { Request, Response, NextFunction } from 'express';

interface User {
  id: number;
  nome: string;
  cpf: string;
  cargo: string;
  permissao: {
    descricao: string;
  };
}

export function authorize(allowedRoles: string[]) {
  return (req: Request, res: Response, next: NextFunction) => {
    const user = req.user as User;

    if (!user) {
      return res.status(401).json({ message: 'Não autorizado. Por favor, faça login para acessar este recurso.' });
    }

    if (allowedRoles.includes(user.permissao.descricao)) {
      next();
    } else {
      return res.status(403).json({ message: 'Você não tem permissão para acessar este recurso.' });
    }
  };
}
