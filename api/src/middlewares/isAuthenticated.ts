// src/middleware/isAuthenticated.ts
import { Request, Response, NextFunction } from 'express';
import passport from 'passport';

interface User {
  id: number;
  nome: string;
  cpf: string;
  cargo: string;
  permissao: {
    descricao: string;
  };
}

passport.initialize();

/**
 * Middleware para verificar se o usuário está autenticado via JWT.
 */
function isAuthenticated(req: Request, res: Response, next: NextFunction) {
  passport.authenticate('jwt', { session: false }, (err: Error | null, user: User | false, info: any) => {
    if (err) {
      return res.status(500).json({ message: 'Erro interno do servidor', error: err.message });
    }

    if (!user) {
      if (info && info.name === 'TokenExpiredError') {
        return res.status(401).json({ message: 'Seu token expirou. Por favor, faça login novamente.' });
      } else {
        return res.status(401).json({ message: 'Não autorizado. Por favor, faça login para acessar este recurso.' });
      }
    }

    // Anexar o usuário ao objeto request para uso em controladores subsequentes.
    req.user = user;
    console.log(req.user)
    next();
  })(req, res, next);
}

export default isAuthenticated;
