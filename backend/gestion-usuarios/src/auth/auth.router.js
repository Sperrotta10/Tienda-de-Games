import { Router } from "express";
import { AuthController } from "./auth.controller.js";

export const AuthRouter = () => {
    const authRouter = Router();
    const authController = new AuthController();
    
    authRouter.get('/', authController.verifyToken);
    authRouter.post('/refresh', authController.refresh);
    authRouter.post('/login', authController.login);
    
    return authRouter;
}