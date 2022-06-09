export default class GetAllUsersUseCase {
  constructor(userRepository) {
    /**
     * @type {import("../../data/repositories/UserRepository").default}
     */
    this.userRepository = userRepository;
  }

  async execute() {
    const users = await this.userRepository.findAll();
    return users;
  }
}
