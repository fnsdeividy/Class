import { Router } from 'express'
import { CreateUserController } from './modules/User/UseCases/createUser/CreateUserController'
import { UpdateUserController } from './modules/User/UseCases/updateUser/UpdateUserController'

const routes = Router()

const createUserController = new CreateUserController()
const updateUserController = new UpdateUserController()

routes.post('/users/create', createUserController.handle)
routes.put('/users/update', updateUserController.handle)

export { routes }