// src/index.ts
import express from 'express';
import dotenv from 'dotenv';
import fs from 'fs';
import https from 'https';
import userRoutes from './routes/userRoutes';
import walletRoutes from './routes/walletRoutes';
import transactionRoutes from './routes/transactionRoutes';
import billPaymentRoutes from './routes/billPaymentRoutes';
import savingRoutes from './routes/savingRoutes';
import creditRoutes from './routes/creditRoutes';
import authenticateToken from './middlewares/authMiddleware';
import errorHandler from './middlewares/errorMiddleware';
import helmet from 'helmet';  // Sécuriser les en-têtes HTTP
import rateLimit from 'express-rate-limit';  // Limiter les tentatives de connexion
import logger from './utils/logger';  // Logger pour suivre les erreurs et événements

dotenv.config();

const app = express();
app.use(express.json());

// Sécuriser les en-têtes HTTP
app.use(helmet());

// Limiter les tentatives de connexion pour éviter les attaques par brute force
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,  // 15 minutes
  max: 100,  // Limiter à 100 requêtes par IP
});

// Appliquer le rate limit uniquement sur la route de connexion
app.use('/login', limiter);

// Route d'accueil
app.get('/', (req, res) => {
  res.send('Bienvenue sur l’API Fintech 🚀');
});

// Middleware d'authentification pour certaines routes
// Appliquer le middleware à toutes les routes qui nécessitent l'authentification
const protectedRoutes = ['/user', '/wallet', '/transaction', '/billPayment', '/saving', '/credit'];

protectedRoutes.forEach(route => {
  app.use(route, authenticateToken);
});

// Routes pour différentes entités
app.use('/user', userRoutes);
app.use('/wallet', walletRoutes);
app.use('/transaction', transactionRoutes);
app.use('/billPayment', billPaymentRoutes);
app.use('/saving', savingRoutes);
app.use('/credit', creditRoutes);

// Gestion des erreurs
app.use(errorHandler);

// Configurer le serveur HTTPS
const PORT = process.env.PORT || 3000;

/*
const httpsOptions = {
  key: fs.readFileSync('./path/to/your/private-key.pem'),
  cert: fs.readFileSync('./path/to/your/certificate.pem'),
};

// Créer un serveur HTTPS
https.createServer(httpsOptions, app).listen(PORT, () => {
  logger.info(`Serveur HTTPS lancé sur le port ${PORT}`);
});
*/

app.listen(PORT, () => {
  logger.info(`Serveur HTTP lancé sur le port ${PORT}`);
});