module.exports = function reverse (n) {

  let rez = n.toString().split('').reverse().join('');
  rez = parseInt(rez);
  return rez;
}
