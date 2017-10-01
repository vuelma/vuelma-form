/**
 * Converts a snake case string to title case.
 *
 * @param  {String} value the string to convert
 * @return {String}
 */
export default value => (
  value.split('_').map(char => (
    char.charAt(0).toUpperCase() + char.substring(1)
  )).join(' ')
);
