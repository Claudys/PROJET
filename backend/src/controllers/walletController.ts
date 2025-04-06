// src/controllers/walletController.ts
import { Request, Response } from 'express';
import WalletService from '../services/walletService';

// Créer un wallet
export const createWallet = async (req: Request, res: Response) => {
  try {
    const wallet = await WalletService.createWallet(req.body);
    res.status(201).json(wallet);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Récupérer un wallet par ID
export const getWalletById = async (req: Request, res: Response) => {
  try {
    const wallet = await WalletService.getWalletById(req.params.id);
    if (!wallet) {
      return res.status(404).json({ message: 'Wallet not found' });
    }
    res.status(200).json(wallet);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Mettre à jour un wallet par ID
export const updateWallet = async (req: Request, res: Response) => {
  try {
    const wallet = await WalletService.updateWallet(req.params.id, req.body);
    if (!wallet) {
      return res.status(404).json({ message: 'Wallet not found' });
    }
    res.status(200).json(wallet);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Supprimer un wallet par ID
export const deleteWallet = async (req: Request, res: Response) => {
  try {
    const wallet = await WalletService.deleteWallet(req.params.id);
    if (!wallet) {
      return res.status(404).json({ message: 'Wallet not found' });
    }
    res.status(200).json({ message: 'Wallet deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
