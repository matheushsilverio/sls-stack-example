import UserRepository from '../../data/repositories/UserRepository';

export default class CreateUserUseCase {
  constructor(userRepository) {
    /**
     * @type {UserRepository}
     */
    this.userRepository = userRepository;
  }

  async execute(userToCreate) {
    const userCreated = await this.userRepository.create(userToCreate);
    return userCreated;
  }
}
