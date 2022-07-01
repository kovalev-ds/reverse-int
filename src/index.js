module.exports = function reverse(n) {
  return Number([...Math.abs(n).toString()].reverse().join(""));
};
