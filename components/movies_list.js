import Image from './image';
import Link from 'next/link';

const MovieItem = ({ poster_path, id, title }) => {
  return (
    <div className="mov">
      <Link href={`/movie/${id}`}>
        <a>
          <Image src={poster_path} size="w185" />
          <h2 className="movietitle">{title}</h2>
        </a>
      </Link>
    </div>
  );
};

const MovieList = ({ movies }) => {
  return (
    <div className="movies">
      {movies.map(item => (
        <MovieItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default MovieList;
