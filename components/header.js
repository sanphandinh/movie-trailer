const Header = () => {
  return (
    <header className="header">
      <figure className="logo">
        <a href="index.html">
          <img src="img/logo.png" alt="Logo" />
        </a>
      </figure>
      <nav className="menu">
        <ul>
          <li>
            <a href="index.html">Home</a>
          </li>
          <li>
            <a>Genres</a>
            <ul>
              <li>
                <a href="genre.html">Action</a>
              </li>
              <li>
                <a href="genre.html">Comedy</a>
              </li>
              <li>
                <a href="genre.html">Drama</a>
              </li>
              <li>
                <a href="genre.html">Romance</a>
              </li>
            </ul>
          </li>
          <li>
            <a>Year</a>
            <ul>
              <li>
                <a href="year.html">2017</a>
              </li>
              <li>
                <a href="year.html">2016</a>
              </li>
              <li>
                <a href="year.html">2015</a>
              </li>
              <li>
                <a href="year.html">2014</a>
              </li>
            </ul>
          </li>
          <li>
            <a>Language</a>
            <ul>
              <li>
                <a href="language.html">English</a>
              </li>
              <li>
                <a href="language.html">German</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="mostwatched.html">Most Watched</a>
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
        <img src="img/menu.svg" />
      </div>
    </header>
  );
};

export default Header;
