// src/middlewares/roleMiddleware.ts
import { Request, Response, NextFunction } from 'express';

const checkRole = (role: string) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const userRole = req.user?.role;  // Assure-toi que l'utilisateur est dans `req.user` après l'authentification

    if (userRole !== role) {
      return res.status(403).json({ message: 'Accès interdit.' });
    }

    next();
  };
};

export default checkRole;
