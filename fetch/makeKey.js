import APIS from './apis';
import { pick } from '../helpers/object.helper';
import { objectToQueryString } from '../helpers/utility.helper';

//List HTTP method is accepted in project
const METHOD_ACCEPTED = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'];

//Get primary module of URL KEY: example: movie, discover...
const getModuleOfUrlKey = urlKey => urlKey.split('.')[0];

//Get list params is accepted (declared in apis)
const getParamsAccepted = (params = '') =>
  params.split(',').map(item => item.trim());

//get querystring (is mapped with params accepted)
const getParams = (paramsAccepted, params) => {
  if (!paramsAccepted) return '';
  const _paramsAccepted = getParamsAccepted(paramsAccepted);
  if (!_paramsAccepted.length) return '';
  const _result = pick(params, _paramsAccepted);
  return objectToQueryString(_result);
};

//Get body request with body accepted (declared in apis)
const getBody = (bodyAccepted, body) => {
  if (!bodyAccepted) return {};
  const _bodyAccepted = paramsAccepted(bodyAccepted);
  if (!_bodyAccepted.length) return {};
  const _result = pick(body, _bodyAccepted);
  return JSON.stringify(_result);
};

//Get method of request from urlKey
// Example: movie.GET_MOVIE_UP_COMING => method = GET
// Method is mapped with METHOD ACCEPTED (declared above)
const getMethod = urlKey => {
  const [, after] = urlKey.split('.');
  if (!after) return '';
  const [method] = after.split('_');
  if (!method) return '';
  if (!METHOD_ACCEPTED.includes(method)) return '';
  return method;
};

//Function to get key for request
// It is included in swr hook.
export default function makeKey({ urlKey, body, params, pathParams }) {
  const method = getMethod(urlKey);
  if (!method) return null;
  const _api = APIS[urlKey];
  if (!_api) return null;
  let { url } = _api;
  const _querystring = getParams(_api?.params, {
    ...params,
    api_key: process.env.API_KEY
  });
  if (pathParams) {
    for (const key in pathParams) {
      if (pathParams.hasOwnProperty(key)) {
        const element = pathParams[key];
        const str = `{${key}}`;
        url = url.replace(str, element);
      }
    }
  }
  let _body = null;
  if (body) {
    _body = getBody(body);
  }
  const _path = `${process.env.PATH_API}/${getModuleOfUrlKey(
    urlKey
  )}${url}${_querystring}`;
  return [method, _path, _body];
}
