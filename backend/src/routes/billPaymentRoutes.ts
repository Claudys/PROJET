// src/routes/billPaymentRoutes.ts
import express from 'express';
import { createBillPayment, getBillPayments, updateBillPayment, deleteBillPayment } from '../controllers/billPaymentController';

const router = express.Router();

// Créer un paiement de facture
router.post('/', createBillPayment);

// Récupérer tous les paiements de facture
router.get('/', getBillPayments);

// Mettre à jour un paiement de facture par ID
router.put('/:id', updateBillPayment);

// Supprimer un paiement de facture par ID
router.delete('/:id', deleteBillPayment);

export default router;
