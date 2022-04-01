import UserRepository from '../../data/repositories/UserRepository';
import GetAllUsersController from './GetAllUsersController';
import GetAllUsersService from './GetAllUsersService';
import commonMiddleware from '../../middlewares/commonMiddleware';

const userRepository = new UserRepository();
const getAllUsersService = new GetAllUsersService(userRepository);
const getAllUsersController = new GetAllUsersController(getAllUsersService);

export const handler = commonMiddleware(getAllUsersController.handle.bind(getAllUsersController));
