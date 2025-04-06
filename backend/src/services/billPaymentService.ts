// src/services/billPaymentService.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Créer un paiement de facture
export const createPayment = async (data: any) => {
  return await prisma.billPayment.create({
    data: { ...data },
  });
};

// Récupérer tous les paiements de facture
export const getAllPayments = async () => {
  return await prisma.billPayment.findMany();
};

// Mettre à jour un paiement de facture par ID
export const updatePayment = async (id: string, data: any) => {
  return await prisma.billPayment.update({
    where: { id },
    data: { ...data },
  });
};

// Supprimer un paiement de facture par ID
export const deletePayment = async (id: string) => {
  return await prisma.billPayment.delete({
    where: { id },
  });
};
