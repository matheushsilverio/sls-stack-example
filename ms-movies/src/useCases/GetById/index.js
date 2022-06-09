import MovieRepository from '../../data/repositories/MovieRepository';
import commonMiddleware from '../../middlewares/commonMiddleware';
import GetByIdController from './GetByIdController';
import GetByIdService from './GetByIdService';

const movieRepository = new MovieRepository();
const getByIdService = new GetByIdService(movieRepository);
const getByIdController = new GetByIdController(getByIdService);

export const handler = commonMiddleware(getByIdController.handle.bind(getByIdController));
