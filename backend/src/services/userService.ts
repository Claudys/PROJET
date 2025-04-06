// src/services/userService.ts
import prisma from '../utils/prismaClient';  // Assurez-vous d'utiliser le client Prisma
import { User } from '@prisma/client';

class UserService {
  // Création d'un utilisateur
  static async createUser(userData: any): Promise<User> {
    return prisma.user.create({
      data: userData,
    });
  }

  // Récupération d'un utilisateur par son ID
  static async getUserById(id: string): Promise<User | null> {
    return prisma.user.findUnique({
      where: { id },
    });
  }

  // Mise à jour des informations d'un utilisateur
  static async updateUser(id: string, userData: any): Promise<User | null> {
    return prisma.user.update({
      where: { id },
      data: userData,
    });
  }

  // Suppression d'un utilisateur
  static async deleteUser(id: string): Promise<User | null> {
    return prisma.user.delete({
      where: { id },
    });
  }
}

export default UserService;
