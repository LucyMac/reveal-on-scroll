/**
 * Comma separate list of strings
 *
 */
export const commaSeparate = (item, i, key = 'name') => {
  return  (i ? ', ': '') + item[key]
};
