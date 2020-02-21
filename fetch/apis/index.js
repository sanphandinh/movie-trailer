import discover from './discover';
import movie from './movie';
import genre from './genres';
import configuration from './configuration';
import { flattenObject } from '../../helpers/object.helper';

const apis = { discover, movie, genre, configuration };

export default flattenObject(apis, undefined, 1);
