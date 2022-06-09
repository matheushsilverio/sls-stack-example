import MovieRepository from '../../data/repositories/MovieRepository';
import commonMiddleware from '../../middlewares/commonMiddleware';
import GetAllByCategoryController from './GetAllByCategoryController';
import GetAllByCategoryService from './GetAllByCategoryService';

const movieRepository = new MovieRepository();
const getAllByCategoryService = new GetAllByCategoryService(movieRepository);
const getAllByCategoryController = new GetAllByCategoryController(getAllByCategoryService);

export const handler = commonMiddleware(getAllByCategoryController.handle.bind(getAllByCategoryController));
