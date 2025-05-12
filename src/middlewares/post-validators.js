import { body, param } from 'express-validator';
import { validateField } from './validate-fields.js';
import { handleErrors } from './handle-errors.js';

export const postValidator = [
    body('title')
        .notEmpty().withMessage('Title is required')
        .isLength({ max: 100 }).withMessage('Title must be less than 100 characters'),
    body('description')
        .notEmpty().withMessage('Description is required')
        .isLength({ max: 1000 }).withMessage('Description must be less than 1000 characters'),
    body('course')
        .notEmpty().withMessage('Course is required')
        .isIn(['Technology', 'Workshop', 'Supervised Practice']).withMessage('Course must be one of: Technology, Workshop, Supervised Practice'),
    validateField,
    handleErrors
];

export const updatePostValidator = [
    param('postId')
        .notEmpty().withMessage('Post ID is required')
        .isMongoId().withMessage('Invalid Post ID format'),
    body('title')
        .optional()
        .isLength({ max: 100 }).withMessage('Title must be less than 100 characters'),
    body('description')
        .optional()
        .isLength({ max: 1000 }).withMessage('Description must be less than 1000 characters'),
    body('course')
        .optional()
        .isIn(['Technology', 'Workshop', 'Supervised Practice']).withMessage('Course must be one of: Technology, Workshop, Supervised Practice'),
    body('status')
        .optional()
        .isBoolean().withMessage('Status must be a boolean value'),
    validateField,
    handleErrors
];