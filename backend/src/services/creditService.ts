// src/services/creditService.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Créer un crédit
export const createCredit = async (data: any) => {
  return await prisma.credit.create({
    data: { ...data },
  });
};

// Récupérer tous les crédits
export const getAllCredits = async () => {
  return await prisma.credit.findMany();
};

// Mettre à jour un crédit par ID
export const updateCredit = async (id: string, data: any) => {
  return await prisma.credit.update({
    where: { id },
    data: { ...data },
  });
};

// Supprimer un crédit par ID
export const deleteCredit = async (id: string) => {
  return await prisma.credit.delete({
    where: { id },
  });
};
