export default class GetAllUsersController {
  constructor(getAllUsersService) {
    this.getAllUsersService = getAllUsersService;
  }

  async handle(event, context) {
    /**
     * This method context.callbackWaitsForEmptyEventLoop = false;
     * Remove await response for Sequelize in loopback.
     * Do not remove.
     */
    context.callbackWaitsForEmptyEventLoop = false;

    try {
      const users = await this.getAllUsersService.execute();

      return {
        statusCode: 200,
        body: JSON.stringify({
          data: users,
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
