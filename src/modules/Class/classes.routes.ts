import { Router } from 'express';
import { CreateClassController } from './UseCases/createClass/CreateClassController';
import { ListClassesController } from './UseCases/listClasses/ListClassesController';
import { ShowClassDetailsController } from './UseCases/showClassDetails/ShowClassDetailsController';
import { UpdateClassController } from './UseCases/updateClass/UpdateClassController';
import { DeleteClassController } from './UseCases/deleteClass/DeleteClassController';
import { checkAuth } from '../../middleware/check-auth';

const classRoutes = Router();

const createClassController = new CreateClassController();
const listClassesController = new ListClassesController();
const showClassDetailsController = new ShowClassDetailsController();
const updateClassController = new UpdateClassController();
const deleteClassController = new DeleteClassController();

classRoutes.post('/', checkAuth, createClassController.handle);
classRoutes.get('/', checkAuth, listClassesController.handle);
classRoutes.get('/:id', checkAuth, showClassDetailsController.handle);
classRoutes.put('/', checkAuth, updateClassController.handle);
classRoutes.delete('/:id', checkAuth, deleteClassController.handle);

export { classRoutes };
