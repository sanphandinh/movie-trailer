import { useSelector } from 'react-redux';
import Link from 'next/link';

const HeaderMenu = ({ title, list = [], titleUrl, itemRender }) => {
  return (
    <li>
      <Link href={titleUrl || ''}>
        <a>{title}</a>
      </Link>
      {!!list.length && <ul className="menu-list">{list.map(itemRender)}</ul>}
      <style jsx>{`
        .menu-list {
          max-height: 300px;
          overflow-y: auto;
        }
      `}</style>
    </li>
  );
};

const getYearMenu = () => {
  const currentDate = new Date().getFullYear();
  return [
    { id: currentDate, name: currentDate + '' },
    { id: currentDate - 1, name: currentDate - 1 + '' },
    { id: currentDate - 2, name: currentDate - 2 + '' },
    { id: currentDate - 3, name: currentDate - 3 + '' }
  ];
};

const Header = () => {
  const genres = useSelector(state => state.genres) || [];
  return (
    <header className="header">
      <figure className="logo">
        <Link href="/">
          <a>
            <img src="/img/logo.png" alt="Logo" />
          </a>
        </Link>
      </figure>
      <nav className="menu">
        <ul>
          <HeaderMenu title="Home" titleUrl="/" />
          <HeaderMenu
            title="Genres"
            list={genres}
            itemRender={({ id, name }) => (
              <li key={id}>
                <Link href={`/discover?with_genres=${id}`}>
                  <a>{name}</a>
                </Link>
              </li>
            )}
          />
          <HeaderMenu
            title="Year"
            list={getYearMenu()}
            itemRender={({ id, name }) => (
              <li key={id}>
                <Link href={`/discover?year=${id}`}>
                  <a>{name}</a>
                </Link>
              </li>
            )}
          />
          <li>
            <Link href="/popular">
              <a>Popular</a>
            </Link>
          </li>
          <li>
            <Link href="/top-rated">
              <a>Top Rated</a>
            </Link>
          </li>
          <li className="mobsearch">
            <form className="mobform">
              <input
                type="text"
                name="s"
                className="mobsearchfield"
                placeholder="Search..."
              />
              <input type="submit" value="" className="mobsearchsubmit" />
            </form>
          </li>
        </ul>
      </nav>
      <form className="search">
        <input
          type="text"
          name="s"
          className="searchfield"
          placeholder="Search..."
        />
        <input type="submit" value="" className="searchsubmit" />
      </form>

      <div className="toggle">
        <img src="/img/menu.svg" />
      </div>
    </header>
  );
};

export default Header;
