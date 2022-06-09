export default class GetByIdController {
  constructor(getByIdService) {
    this.getByIdService = getByIdService;
  }

  async handle(event, context) {
    /**
     * This method context.callbackWaitsForEmptyEventLoop = false;
     * Remove await response for Sequelize in loopback.
     * Do not remove.
     */
    context.callbackWaitsForEmptyEventLoop = false;

    try {
      const { movieId } = event.pathParameters;
      const movie = await this.getByIdService.execute(movieId);

      return {
        statusCode: 200,
        body: JSON.stringify({
          data: movie,
          message: 'Success get all user',
          error: {},
        }),
      };
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}
