import { DatabaseConnection } from '../DatabaseConnection';

export default class UserRepository {
  #connection;

  constructor() {
    this.#connection = DatabaseConnection;
  }

  async findById(id) {
    return this.#connection.select('*').from('users').where('id', id).first();
  }

  async findAll() {
    return this.#connection.select('*').from('users');
  }

  async create(userData) {
    return this.#connection.from('users').insert(userData);
  }
}
