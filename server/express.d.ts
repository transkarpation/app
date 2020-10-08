declare global {
    namespace Express {
        export interface Request {
            output?: object;
        }
    }
}