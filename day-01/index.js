const { readFileSync } = require('fs')

const sortArray = (a, b) => {
  return a - b
}

const readFile = (filename) => {
  const contents = readFileSync(filename, 'utf-8');

  const arr = contents.split(/\r?\n/);

  return arr
}

const solution = (arr) => {
  let cache = []

  let control = []

  arr.map(element => {
    if (element !== "") {
      cache.push(parseInt(element))
    }

    else {
      const res = cache.reduce(
        (acc, curr) => acc + curr,
        0
      );
      cache = []
      control.push(res)
    }

  })

  control = control.sort(sortArray)

  const last = control.slice(-3).reduce((acc, curr) => acc + curr, 0)

  return [control.slice(-1), last];
}

const data = readFile('./data.txt')

console.log(solution(data))

