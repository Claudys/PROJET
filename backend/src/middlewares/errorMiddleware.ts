// src/middlewares/errorMiddleware.ts
import { Request, Response, NextFunction } from 'express';

// Middleware de gestion des erreurs
const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);

  // Vérifie si l'erreur est une validation d'erreur ou une erreur générique
  if (err.name === 'ValidationError') {
    return res.status(400).json({ message: err.message });
  }

  // Erreur 500 pour les erreurs internes du serveur
  res.status(500).json({ message: 'Something went wrong!', details: err.message });
};

export default errorHandler;
