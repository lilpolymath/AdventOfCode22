const { readFileSync } = require('fs')


const readFile = (filename) => {
  const contents = readFileSync(filename, 'utf-8');

  const arr = contents.split(/\r?\n/);

  let cache = []

  let control = []

  const sortArray = (a, b) => {
    return a - b
  }
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

  const last = control.slice(-3).reduce((acc, curr) => acc+curr, 0)

  return [control.slice(-1), last];
}

console.log(readFile('./data.txt'))

