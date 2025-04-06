// src/routes/transactionRoutes.ts
import express from 'express';
import {
  createTransaction,
  getTransactionById,
  updateTransaction,
  deleteTransaction
} from '../controllers/transactionController';

const router = express.Router();

// Création d'une transaction
router.post('/', createTransaction);

// Récupérer une transaction par ID
router.get('/:id', getTransactionById);

// Mettre à jour une transaction par ID
router.put('/:id', updateTransaction);

// Supprimer une transaction par ID
router.delete('/:id', deleteTransaction);

export default router;
