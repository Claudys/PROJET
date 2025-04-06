// src/routes/creditRoutes.ts
import express from 'express';
import { createCredit, getCredits, updateCredit, deleteCredit } from '../controllers/creditController';

const router = express.Router();

// Route pour créer un crédit
router.post('/', createCredit);

// Route pour récupérer tous les crédits
router.get('/', getCredits);

// Route pour mettre à jour un crédit par ID
router.put('/:id', updateCredit);

// Route pour supprimer un crédit par ID
router.delete('/:id', deleteCredit);

export default router;
