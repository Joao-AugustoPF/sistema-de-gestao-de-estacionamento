declare namespace Express {
    export interface Request {
      file?: {
        fieldname: string;
        originalname: string;
        encoding: string;
        mimetype: string;
        size: number;
        destination: string;
        filename: string;
        path: string;
        buffer?: Buffer; // Se necessário para armazenar o arquivo na memória
      };
    }
  }
  