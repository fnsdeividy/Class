import { Router } from 'express';
import { CreateUserController } from './UseCases/createUser/CreateUserController';
import { UpdateUserController } from './UseCases/updateUser/UpdateUserController';
import { AuthenticateUserController } from './UseCases/authenticateUser/AuthenticateUserController';
import { checkAuth } from '../../middleware/check-auth';

const userRoutes = Router();

const createUserController = new CreateUserController();
const updateUserController = new UpdateUserController();
const authenticateUserController = new AuthenticateUserController();

userRoutes.post('/', authenticateUserController.handle);
userRoutes.post('/create', createUserController.handle);
userRoutes.put('/update', checkAuth, updateUserController.handle);

export { userRoutes };
