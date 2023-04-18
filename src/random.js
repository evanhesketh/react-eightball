/** getRandomNum
 *
 * @param {Number} max exclusive max for random number generator
 *
 * Returns random number between 0 and max number
 */

function getRandomNum (max) {
  return Math.floor(Math.random() * max);
}

export default getRandomNum;