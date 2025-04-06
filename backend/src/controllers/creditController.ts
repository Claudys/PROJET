// src/controllers/creditController.ts
import { Request, Response } from 'express';
import CreditService from '../services/creditService';

// Créer un crédit
export const createCredit = async (req: Request, res: Response) => {
  try {
    const credit = await CreditService.createCredit(req.body);
    res.status(201).json(credit);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Récupérer tous les crédits
export const getCredits = async (req: Request, res: Response) => {
  try {
    const credits = await CreditService.getAllCredits();
    res.status(200).json(credits);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Mettre à jour un crédit par ID
export const updateCredit = async (req: Request, res: Response) => {
  try {
    const updatedCredit = await CreditService.updateCredit(req.params.id, req.body);
    if (!updatedCredit) {
      return res.status(404).json({ message: 'Credit not found' });
    }
    res.status(200).json(updatedCredit);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Supprimer un crédit par ID
export const deleteCredit = async (req: Request, res: Response) => {
  try {
    const deletedCredit = await CreditService.deleteCredit(req.params.id);
    if (!deletedCredit) {
      return res.status(404).json({ message: 'Credit not found' });
    }
    res.status(200).json({ message: 'Credit deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
