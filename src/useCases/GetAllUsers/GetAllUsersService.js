import UserRepository from '../../data/repositories/UserRepository';

export default class GetAllUsersUseCase {
  constructor(userRepository) {
    /**
     * @type {UserRepository}
     */
    this.userRepository = userRepository;
  }

  async execute() {
    const users = await this.userRepository.findAll();
    return users;
  }
}
