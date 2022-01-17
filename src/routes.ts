import { Router } from 'express'
import { CreateUserController } from './modules/User/UseCases/createUser/CreateUserController'

const routes = Router()

const createUserController = new CreateUserController()

routes.post('/users/create', createUserController.handle)

export { routes }