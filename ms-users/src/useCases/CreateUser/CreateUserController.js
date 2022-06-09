export default class CreateUserController {
  constructor(createUserUseCase) {
    this.createUserUseCase = createUserUseCase;
  }

  async handle(event, context) {
    /**
     * This method context.callbackWaitsForEmptyEventLoop = false;
     * Remove await response for Sequelize in loopback.
     * Do not remove.
     */
    context.callbackWaitsForEmptyEventLoop = false;

    try {
      const { body } = event;

      const users = await this.createUserUseCase.execute(body);

      return {
        statusCode: 200,
        body: JSON.stringify({
          data: users,
          message: 'Success create user',
          error: {},
        }),
      };
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}
