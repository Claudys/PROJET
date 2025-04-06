// src/routes/userRoutes.ts
import express from 'express';
import UserController from '../controllers/userController';
import authenticateToken from '../middlewares/authMiddleware';  // Si nécessaire pour l'authentification

const router = express.Router();

// Routes pour gérer les utilisateurs
router.post('/create', authenticateToken, UserController.createUser);   // Création d'un utilisateur
router.get('/:id', authenticateToken, UserController.getUser);          // Récupérer un utilisateur par ID
router.put('/:id', authenticateToken, UserController.updateUser);       // Mettre à jour un utilisateur
router.delete('/:id', authenticateToken, UserController.deleteUser);    // Supprimer un utilisateur

export default router;
