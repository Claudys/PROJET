// src/services/transactionService.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Créer une transaction
export const createTransaction = async (data: any) => {
  return await prisma.transaction.create({
    data: { ...data },
  });
};

// Récupérer une transaction par ID
export const getTransactionById = async (id: string) => {
  return await prisma.transaction.findUnique({
    where: { id },
  });
};

// Mettre à jour une transaction par ID
export const updateTransaction = async (id: string, data: any) => {
  return await prisma.transaction.update({
    where: { id },
    data: { ...data },
  });
};

// Supprimer une transaction par ID
export const deleteTransaction = async (id: string) => {
  return await prisma.transaction.delete({
    where: { id },
  });
};
