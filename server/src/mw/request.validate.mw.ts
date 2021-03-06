import { validate as cValidate } from 'class-validator';
import { Request, Response, NextFunction } from 'express';
import { plainToClass } from 'class-transformer';

export const validate = (classToFetch: any) => {
	return async (req: Request, res: Response, next: NextFunction) => {
		if (req.method === 'POST' || req.method === 'PUT') {
			const output = plainToClass(classToFetch, req.body);

			const errors = await cValidate(output);
			if (errors.length > 0) {

				return res.status(400).send(errors)
			}
		}


		next();
	};
};
