export const flattenObject = (obj, prefix = '', level = 0) =>
  Object.keys(obj).reduce((acc, k) => {
    const pre = prefix.length ? prefix + '.' : '';
    if (typeof obj[k] === 'object' && level)
      Object.assign(acc, flattenObject(obj[k], pre + k, level - 1));
    else acc[pre + k] = obj[k];
    return acc;
  }, {});

export const pick = (obj, arr) =>
  arr.reduce((acc, curr) => (curr in obj && (acc[curr] = obj[curr]), acc), {});
