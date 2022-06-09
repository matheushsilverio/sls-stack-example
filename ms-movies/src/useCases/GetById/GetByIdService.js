export default class GetByIdUseCase {
  constructor(movieRepository) {
    /**
     * @type {import("../../data/repositories/MovieRepository").default}
     */
    this.movieRepository = movieRepository;
  }

  async execute(movieId) {
    const query = await this.movieRepository.findById(movieId);
    return {
      id: query.id,
      imdbId: query.imdb_title_id,
      title: query.title,
      description: query.description,
      genre: query.genre,
      duration: Number(query.duration),
      year: Number(query.year),
      averageNote: query.avg_note,
      datePublished: query.date_published,
    };
  }
}
