const split = (str, delim) => {
  // write code for strings.split
  return str.split(delim)
}

const pairs = (str) => {
  // write code for strings.pairs
  let next;
  let arr = [];
  for(let i = 0; i <= str.length - 1; i += 2) {
    next = str.substr(i, 2)
    arr.push(next)
  }
  return arr
}

const reverse = (str) => {
  // write code for strings.reverse
  return str.split("").reverse().join("")
}

module.exports = {
  split,
  pairs,
  reverse
}