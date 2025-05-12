import { body, param } from 'express-validator';
import { validateField } from './validate-fields.js';
import { handleErrors } from './handle-errors.js';

export const commentValidator = [
    param('postId')
        .notEmpty().withMessage('Post ID is required')
        .isMongoId().withMessage('Invalid Post ID format'),
    body('username')
        .notEmpty().withMessage('Username is required')
        .isLength({ max: 50 }).withMessage('Username must be less than 50 characters'),
    body('comment')
        .notEmpty().withMessage('Comment is required')
        .isLength({ max: 500 }).withMessage('Comment must be less than 500 characters'),
    validateField,
    handleErrors
];

export const getCommentsValidator = [
    param('postId')
        .notEmpty().withMessage('Post ID is required')
        .isMongoId().withMessage('Invalid Post ID format'),
    validateField,
    handleErrors
];