import Link from 'next/link';
import { useRouter } from 'next/router';

const threeDot = '...';

const getIndexs = (start, end) => {
  const result = [];
  for (let i = start; i <= end; i++) {
    result.push(i);
  }
  return result;
};

const getPages = (page, totalPage) => {
  const pages = [];
  const sixAfter = page - 6;
  const sixBefore = page + 6;
  if (sixAfter < 1 && sixBefore >= totalPage) {
    pages.push(...getIndexs(1, totalPage)); //get all to pages
  } else if (sixAfter < 1 && sixBefore < totalPage) {
    pages.push(...getIndexs(1, 7)); //get from 1 => page - 1
    pages.push(threeDot);
    pages.push(...getIndexs(totalPage - 1, totalPage)); // get 2 last item
  } else if (sixAfter >= 1 && sixBefore >= totalPage) {
    pages.push(1, 2, threeDot);
    pages.push(...getIndexs(totalPage - 6, totalPage));
  } else if (sixAfter >= 1 && sixBefore < totalPage) {
    pages.push(1, 2, threeDot);
    pages.push(...getIndexs(page - 3, page + 2));
    pages.push(totalPage - 1, totalPage);
  }
  return pages;
};

const Pagination = ({ totalPage }) => {
  const { pathname, query = {} } = useRouter();
  const { page = 1 } = query;
  const _page = Number(page);
  const pages = getPages(_page, totalPage);
  if (!pages.length) return null;
  return (
    <nav className="pagination">
      <ul>
        {_page > 1 && (
          <li>
            <Link href={{ pathname, query: { ...query, page: _page - 1 } }}>
              <a>Prev</a>
            </Link>
          </li>
        )}
        {pages.map(item => (
          <li key={item}>
            <Link
              href={
                (item !== threeDot && {
                  pathname,
                  query: { ...query, page: item }
                }) ||
                ''
              }
            >
              <a className={item === _page ? 'menuactive' : ''}>{item}</a>
            </Link>
          </li>
        ))}
        {_page < totalPage && (
          <li>
            <Link href={{ pathname, query: { ...query, page: _page + 1 } }}>
              <a>Next</a>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Pagination;
