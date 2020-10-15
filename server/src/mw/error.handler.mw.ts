import { Request, Response, NextFunction } from 'express';
import { ErrorResponse, handleError } from '../helpers/error.handler.helper';

const errorHandlerMiddleware = (err: ErrorResponse, req: Request, res: Response, next: NextFunction) => {
	handleError(err, res);
};

export default errorHandlerMiddleware;
