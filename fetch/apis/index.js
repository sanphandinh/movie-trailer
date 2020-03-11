import discover from './discover';
import movie from './movie';
import genre from './genres';
import configuration from './configuration';
import search from './search';
import { flattenObject } from '../../helpers/object.helper';

const apis = { discover, movie, genre, configuration, search };

export default flattenObject(apis, undefined, 1);
