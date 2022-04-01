import UserRepository from '../../data/repositories/UserRepository';
import commonMiddleware from '../../middlewares/commonMiddleware';
import CreateUserController from './CreateUserController';
import CreateUserService from './CreateUserService';

const userRepository = new UserRepository();
const createUserService = new CreateUserService(userRepository);
const createUserController = new CreateUserController(createUserService);

export const handler = commonMiddleware(createUserController.handle.bind(createUserController));
