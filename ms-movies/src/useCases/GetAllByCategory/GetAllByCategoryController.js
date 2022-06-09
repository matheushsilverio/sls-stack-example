export default class GetAllByCategoryController {
  constructor(getAllByCategoryService) {
    this.getAllByCategoryService = getAllByCategoryService;
  }

  async handle(event, context) {
    /**
     * This method context.callbackWaitsForEmptyEventLoop = false;
     * Remove await response for Sequelize in loopback.
     * Do not remove.
     */
    context.callbackWaitsForEmptyEventLoop = false;

    try {
      const { category } = event.pathParameters;
      const movies = await this.getAllByCategoryService.execute(category);

      return {
        statusCode: 200,
        body: JSON.stringify({
          data: movies,
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
