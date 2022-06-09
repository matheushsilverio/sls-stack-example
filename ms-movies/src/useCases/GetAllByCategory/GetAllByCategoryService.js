export default class GetAllByCategoryUseCase {
  constructor(movieRepository) {
    /**
     * @type {import("../../data/repositories/MovieRepository").default}
     */
    this.movieRepository = movieRepository;
  }

  async execute(category) {
    if (!category) {
      throw new Error('category is not defined');
    }
    const movies = await this.movieRepository.findByCategory(category);
    return movies.map((movie) => {
      return {
        id: movie.id,
        imdbId: movie.imdb_title_id,
        title: movie.title,
        description: movie.description,
        genre: movie.genre,
        duration: Number(movie.duration),
        year: Number(movie.year),
        averageNote: movie.avg_note,
        datePublished: movie.date_published,
      };
    });
  }
}
