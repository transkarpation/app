declare global {
  namespace Express {
    interface Request {
      output?: any
    }
  }
}
