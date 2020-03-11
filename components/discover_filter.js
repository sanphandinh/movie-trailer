import Router, { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import SearchKeyword from './search_keyword';

const currentDate = new Date().getFullYear();
const years = [];
for (let i = currentDate; i >= 1900; i--) {
  years.push(i);
}

const availableSortBy =
  'popularity.asc, popularity.desc, release_date.asc, release_date.desc, revenue.asc, revenue.desc, primary_release_date.asc, primary_release_date.desc, original_title.asc, original_title.desc, vote_average.asc, vote_average.desc, vote_count.asc, vote_count.desc';
const sortByList = availableSortBy.split(',').map(item => item.trim());

const DiscoverFilter = () => {
  const { pathname, query = {} } = useRouter();
  const { year = '', sort_by = 'popularity.asc', with_genres, keyword } = query;
  const genres = useSelector(state => state.genres) || [];

  const _onChange = e => {
    const { name, value } = e.target;
    Router.push({
      pathname,
      query: {
        ...query,
        [name]: String(value)
      }
    });
  };

  return (
    <form className="filter-wrapper">
      <div className="filter-group">
        <label className="filter-label">Year</label>
        <select
          name="year"
          onChange={_onChange}
          // value={year}
          className="filter-control"
          defaultValue={year}
        >
          <option value="">None</option>
          {years.map(item => (
            <option key={item} value={String(item)}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <div className="filter-group">
        <label className="filter-label">Sort By</label>
        <select
          name="sort_by"
          onChange={_onChange}
          // value={sort_by}
          className="filter-control"
          defaultValue={sort_by}
        >
          {sortByList.map(item => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <div className="filter-group">
        <label className="filter-label">Genres</label>
        <select
          name="with_genres"
          onChange={_onChange}
          // value={with_genres}
          className="filter-control"
          defaultValue={with_genres}
        >
          <option value="">None</option>
          {genres.map(item => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
      <div className="filter-group">
        <label className="filter-label">By keywords</label>
        <SearchKeyword
          initKeyword={keyword}
          onSelect={(val, item, { setValue, setRealValue }) => {
            Router.push({
              pathname,
              query: {
                ...query,
                with_keywords: val,
                keyword: item?.name
              }
            });
            setValue(item?.name);
            setRealValue(item?.name);
          }}
          onBlur={e => {
            const { value } = e.target;
            if (!value) {
              const { with_keywords, keyword, ...rest } = query;
              Router.push({
                pathname,
                query: rest
              });
            }
          }}
        />
      </div>
      <style jsx>
        {`
          .filter-wrapper {
            padding: 0 10px;
            display: flex;
            float: left;
            margin-bottom: 10px;
          }
          .filter-group {
            display: flex;
            flex-direction: column;
            margin-right: 20px;
          }
          .filter-group:last-child {
            margin-right: 0;
          }
          .filter-label {
            color: #fff;
            font-size: 14px;
            line-height: 18px;
          }
        `}
      </style>
    </form>
  );
};

export default DiscoverFilter;
