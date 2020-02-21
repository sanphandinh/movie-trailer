import fetch from 'isomorphic-unfetch';

const METHOD_HAS_BODY = ['POST', 'PUT', 'PATCH'];

// Return request for swr hook
export default function requester(method = 'GET', path, body = undefined) {
  return fetch(path, {
    method,
    body: METHOD_HAS_BODY.includes(method) ? body : undefined
  }).then(res => res.json());
}
