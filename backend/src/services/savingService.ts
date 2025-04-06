// src/services/savingService.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Créer une nouvelle sauvegarde
export const createSaving = async (data: any) => {
  return await prisma.saving.create({
    data: { ...data },
  });
};

// Récupérer toutes les sauvegardes
export const getAllSavings = async () => {
  return await prisma.saving.findMany();
};

// Mettre à jour une sauvegarde par ID
export const updateSaving = async (id: string, data: any) => {
  return await prisma.saving.update({
    where: { id },
    data: { ...data },
  });
};

// Supprimer une sauvegarde par ID
export const deleteSaving = async (id: string) => {
  return await prisma.saving.delete({
    where: { id },
  });
};
