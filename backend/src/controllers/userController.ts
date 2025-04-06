// src/controllers/userController.ts
import { Request, Response } from 'express';
import userService from '../services/userService';

class UserController {
  // Création d'un utilisateur
  static async createUser(req: Request, res: Response) {
    try {
      const user = await userService.createUser(req.body);
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ message: 'Erreur lors de la création de l\'utilisateur.', error });
    }
  }

  // Récupération des détails d'un utilisateur
  static async getUser(req: Request, res: Response) {
    try {
      const user = await userService.getUserById(req.params.id);
      if (!user) {
        return res.status(404).json({ message: 'Utilisateur non trouvé' });
      }
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: 'Erreur lors de la récupération de l\'utilisateur.', error });
    }
  }

  // Modification d'un utilisateur
  static async updateUser(req: Request, res: Response) {
    try {
      const updatedUser = await userService.updateUser(req.params.id, req.body);
      if (!updatedUser) {
        return res.status(404).json({ message: 'Utilisateur non trouvé' });
      }
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(500).json({ message: 'Erreur lors de la mise à jour de l\'utilisateur.', error });
    }
  }

  // Suppression d'un utilisateur
  static async deleteUser(req: Request, res: Response) {
    try {
      const deletedUser = await userService.deleteUser(req.params.id);
      if (!deletedUser) {
        return res.status(404).json({ message: 'Utilisateur non trouvé' });
      }
      res.status(200).json({ message: 'Utilisateur supprimé avec succès' });
    } catch (error) {
      res.status(500).json({ message: 'Erreur lors de la suppression de l\'utilisateur.', error });
    }
  }
}

export default UserController;
