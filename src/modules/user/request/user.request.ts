import { body } from "express-validator";

export const UserRequest = [
    body('name')
        .optional()
        .isString()
        .withMessage('Name must be a string'),
    body('email')
        .optional()
        .isEmail()
        .withMessage('Invalid email address'),
    body('password')
        .optional()
        .isLength({ min: 8})
        .withMessage('Password must be at least 8 characters long'),
];