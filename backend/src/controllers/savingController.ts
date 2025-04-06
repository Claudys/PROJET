// src/controllers/savingController.ts
import { Request, Response } from 'express';
import SavingService from '../services/savingService';

// Créer une nouvelle sauvegarde
export const createSaving = async (req: Request, res: Response) => {
  try {
    const saving = await SavingService.createSaving(req.body);
    res.status(201).json(saving);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Récupérer toutes les sauvegardes
export const getSavings = async (req: Request, res: Response) => {
  try {
    const savings = await SavingService.getAllSavings();
    res.status(200).json(savings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Mettre à jour une sauvegarde par ID
export const updateSaving = async (req: Request, res: Response) => {
  try {
    const updatedSaving = await SavingService.updateSaving(req.params.id, req.body);
    if (!updatedSaving) {
      return res.status(404).json({ message: 'Saving not found' });
    }
    res.status(200).json(updatedSaving);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Supprimer une sauvegarde par ID
export const deleteSaving = async (req: Request, res: Response) => {
  try {
    const deletedSaving = await SavingService.deleteSaving(req.params.id);
    if (!deletedSaving) {
      return res.status(404).json({ message: 'Saving not found' });
    }
    res.status(200).json({ message: 'Saving deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
