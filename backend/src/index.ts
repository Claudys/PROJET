// src/index.ts
import express from 'express';
import prisma from './config/prisma';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Exemple d'endpoint pour tester la connexion avec Prisma
app.get('/users', async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des utilisateurs' });
  }
});

// Lancer le serveur
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
