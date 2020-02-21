import '../styles.css';
import 'swiper/css/swiper.min.css';
import withRedux from 'next-redux-wrapper';
import makeStore from '../redux/makeStore';
import { Provider } from 'react-redux';
import requester from '../fetch/requester';
import makeKey from '../fetch/makeKey';
import { addGenres } from '../redux/slices/genresSlices';
import { addConfiguration } from '../redux/slices/configurationSlices';

const genresApiKey = makeKey({ urlKey: 'genre.GET_LIST_GENRES_OF_MOVIE' });
const configurationApiKey = makeKey({
  urlKey: 'configuration.GET_CONFIGURATION'
});

// This default export is required in a new `pages/_app.js` file.
function MyApp({ Component, pageProps, store }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  //Get init genres data
  const data = await requester(...genresApiKey);
  ctx.store.dispatch(addGenres(data));
  //Get configuration data
  const configuration = await requester(...configurationApiKey);
  ctx.store.dispatch(addConfiguration(configuration));
  const pageProps = Component.getInitialProps
    ? await Component.getInitialProps(ctx)
    : {};
  return { pageProps };
};

export default withRedux(makeStore)(MyApp);
