// src/services/walletService.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Créer un wallet
export const createWallet = async (data: any) => {
  return await prisma.wallet.create({
    data: {
      ...data,
    },
  });
};

// Récupérer un wallet par ID
export const getWalletById = async (id: string) => {
  return await prisma.wallet.findUnique({
    where: { id },
  });
};

// Mettre à jour un wallet par ID
export const updateWallet = async (id: string, data: any) => {
  return await prisma.wallet.update({
    where: { id },
    data: {
      ...data,
    },
  });
};

// Supprimer un wallet par ID
export const deleteWallet = async (id: string) => {
  return await prisma.wallet.delete({
    where: { id },
  });
};
