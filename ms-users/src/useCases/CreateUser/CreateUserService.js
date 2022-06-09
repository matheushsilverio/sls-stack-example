export default class CreateUserUseCase {
  constructor(userRepository) {
    /**
     * @type {import("../../data/repositories/UserRepository").default}
     */
    this.userRepository = userRepository;
  }

  async execute(userToCreate) {
    const userCreated = await this.userRepository.create(userToCreate);
    return userCreated;
  }
}
