import { sign } from 'jsonwebtoken';
import { jwtSecret } from '../config/jwt.config';

export const generateToken = (user: any): string => sign({id: user.id}, jwtSecret);
