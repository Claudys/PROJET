// src/routes/walletRoutes.ts
import express from 'express';
import {
  createWallet,
  getWalletById,
  updateWallet,
  deleteWallet
} from '../controllers/walletController';

const router = express.Router();

// Création d'un wallet
router.post('/', createWallet);

// Récupérer un wallet par ID
router.get('/:id', getWalletById);

// Mettre à jour un wallet par ID
router.put('/:id', updateWallet);

// Supprimer un wallet par ID
router.delete('/:id', deleteWallet);

export default router;
