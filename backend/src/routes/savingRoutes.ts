// src/routes/savingRoutes.ts
import express from 'express';
import { createSaving, getSavings, updateSaving, deleteSaving } from '../controllers/savingController';

const router = express.Router();

// Créer un enregistrement de sauvegarde
router.post('/', createSaving);

// Récupérer toutes les sauvegardes
router.get('/', getSavings);

// Mettre à jour une sauvegarde par ID
router.put('/:id', updateSaving);

// Supprimer une sauvegarde par ID
router.delete('/:id', deleteSaving);

export default router;
