// src/middlewares/rateLimitMiddleware.ts
import rateLimit from 'express-rate-limit';

// Limite les tentatives de connexion à 5 par minute
const loginRateLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 5, // Limite de 5 tentatives
  message: 'Trop de tentatives de connexion, veuillez réessayer plus tard.',
});

export default loginRateLimiter;
