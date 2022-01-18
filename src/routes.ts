import { Router } from 'express'
import { CreateUserController } from './modules/User/UseCases/createUser/CreateUserController'
import { UpdateUserController } from './modules/User/UseCases/updateUser/UpdateUserController'
import { AuthenticateUserController } from './modules/User/UseCases/authenticateUser/AuthenticateController'
import { checkAuth } from './middleware/check-auth'

const routes = Router()

const createUserController = new CreateUserController()
const updateUserController = new UpdateUserController()
const authenticateUserController = new AuthenticateUserController()

routes.post('/users', authenticateUserController.handle)
routes.post('/users/create', createUserController.handle)
routes.put('/users/update', checkAuth ,updateUserController.handle)

export { routes }