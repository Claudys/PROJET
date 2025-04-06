// src/config/prisma.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Permet d'initialiser la connexion à la base de données et de gérer l'instance Prisma.
export default prisma;
