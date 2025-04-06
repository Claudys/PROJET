// src/controllers/transactionController.ts
import { Request, Response } from 'express';
import TransactionService from '../services/transactionService';

// Créer une transaction
export const createTransaction = async (req: Request, res: Response) => {
  try {
    const transaction = await TransactionService.createTransaction(req.body);
    res.status(201).json(transaction);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Récupérer une transaction par ID
export const getTransactionById = async (req: Request, res: Response) => {
  try {
    const transaction = await TransactionService.getTransactionById(req.params.id);
    if (!transaction) {
      return res.status(404).json({ message: 'Transaction not found' });
    }
    res.status(200).json(transaction);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Mettre à jour une transaction par ID
export const updateTransaction = async (req: Request, res: Response) => {
  try {
    const transaction = await TransactionService.updateTransaction(req.params.id, req.body);
    if (!transaction) {
      return res.status(404).json({ message: 'Transaction not found' });
    }
    res.status(200).json(transaction);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Supprimer une transaction par ID
export const deleteTransaction = async (req: Request, res: Response) => {
  try {
    const transaction = await TransactionService.deleteTransaction(req.params.id);
    if (!transaction) {
      return res.status(404).json({ message: 'Transaction not found' });
    }
    res.status(200).json({ message: 'Transaction deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
