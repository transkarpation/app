"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routesWhiteList = exports.jwtSecret = void 0;
exports.jwtSecret = process.env.JWT_SECRET || 'secret123';
exports.routesWhiteList = [
    '/api/auth/login',
    '/api/auth/register',
];
