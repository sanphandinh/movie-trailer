import { isString, join } from './string.helper';

const classes = (...args) => {
  const classes = [];
  for (let index = 0; index < args.length; index++) {
    const element = args[index];
    if (!element) continue;
    if (isString(element)) classes.push(element);
    else {
      for (const key in element) {
        if (element.hasOwnProperty(key)) {
          const _elm = element[key];
          if (_elm) {
            classes.push(key);
          }
        }
      }
    }
  }
  return join(classes, ' ');
};

export default classes;
