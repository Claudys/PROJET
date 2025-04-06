// src/middlewares/userValidation.ts
import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

const validateUser = (req: Request, res: Response, next: NextFunction) => {
  const schema = Joi.object({
    fullName: Joi.string().min(3).max(50).required().messages({
      'string.base': 'Le nom complet doit être une chaîne de caractères.',
      'string.min': 'Le nom complet doit comporter au moins 3 caractères.',
      'string.max': 'Le nom complet ne peut pas dépasser 50 caractères.',
      'any.required': 'Le nom complet est requis.',
    }),
    email: Joi.string().email().required().messages({
      'string.email': "L'email n'est pas valide.",
      'any.required': "L'email est requis.",
    }),
    phone: Joi.string().length(10).required().messages({
      'string.length': 'Le numéro de téléphone doit comporter exactement 10 chiffres.',
      'any.required': 'Le numéro de téléphone est requis.',
    }),
    password: Joi.string().min(6).required().messages({
      'string.min': 'Le mot de passe doit comporter au moins 6 caractères.',
      'any.required': 'Le mot de passe est requis.',
    }),
  });

  const { error } = schema.validate(req.body);

  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  next();
};

export default validateUser;
