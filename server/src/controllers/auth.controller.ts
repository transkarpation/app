import {generateToken} from '../helpers/jwt.helper'
import {Request, Response} from 'express'

export default {
    async sendUser(req: Request, res: Response) {
        req.user;

        const token = generateToken(req.user);
        res.send({token, user: req.user});
    },
}