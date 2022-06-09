import { DatabaseConnection } from '../DatabaseConnection';

export default class MovieRepository {
  #connection;

  constructor() {
    this.#connection = DatabaseConnection;
  }

  async findById(id) {
    return this.#connection('movies')
      .select('id', 'imdb_title_id', 'title', 'year', 'date_published', 'genre', 'duration', 'avg_note', 'description')
      .where('id', id)
      .first();
  }

  async findByCategory(category) {
    return this.#connection('movies')
      .select('id', 'imdb_title_id', 'title', 'year', 'date_published', 'genre', 'duration', 'avg_note', 'description')
      .where('genre', 'LIKE', `%${category}%`)
      .where('country', 'LIKE', `%USA%`)
      .limit(15)
      .orderBy('year', 'desc')
      .orderBy('avg_note', 'desc');
  }
}
