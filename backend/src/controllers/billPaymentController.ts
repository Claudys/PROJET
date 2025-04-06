// src/controllers/billPaymentController.ts
import { Request, Response } from 'express';
import BillPaymentService from '../services/billPaymentService';

// Créer un paiement de facture
export const createBillPayment = async (req: Request, res: Response) => {
  try {
    const payment = await BillPaymentService.createPayment(req.body);
    res.status(201).json(payment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Récupérer tous les paiements de facture
export const getBillPayments = async (req: Request, res: Response) => {
  try {
    const payments = await BillPaymentService.getAllPayments();
    res.status(200).json(payments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Mettre à jour un paiement de facture par ID
export const updateBillPayment = async (req: Request, res: Response) => {
  try {
    const updatedPayment = await BillPaymentService.updatePayment(req.params.id, req.body);
    if (!updatedPayment) {
      return res.status(404).json({ message: 'Payment not found' });
    }
    res.status(200).json(updatedPayment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Supprimer un paiement de facture par ID
export const deleteBillPayment = async (req: Request, res: Response) => {
  try {
    const deletedPayment = await BillPaymentService.deletePayment(req.params.id);
    if (!deletedPayment) {
      return res.status(404).json({ message: 'Payment not found' });
    }
    res.status(200).json({ message: 'Payment deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
