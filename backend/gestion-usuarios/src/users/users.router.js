import { Router } from "express";
import { UsersController } from "./users.controller.js";

export const UsersRouter = () => {
    const usersRouter = Router();
    const userController = new UsersController();
    
    usersRouter.get('/data/:id', userController.get);
    usersRouter.get('/', userController.getAll);
    usersRouter.post('/create', userController.create);
    usersRouter.patch('/change-password/:id', userController.changePassword);
    usersRouter.delete('/delete/:id', userController.delete);
    usersRouter.patch('/disable/:id', userController.disable);
    usersRouter.patch('/enable/:id', userController.enable);
    
    return usersRouter;
}