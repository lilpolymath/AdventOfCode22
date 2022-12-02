const { readFileSync } = require('fs')

const key = {
  X: 1, Y: 2, Z: 3
}

const readFile = (filename) => {
  const contents = readFileSync(filename, 'utf-8');

  const arr = contents.split(/\r?\n/);

  return arr
}

const win = ["AY", "BZ", "CX",]
const lose = ["AZ", "CY", "BX"]

const solution = arr => {

  const result = arr.map(element => {
    const mine = element.split(" ")[1]
    const parsed = element.replace(/\s/g, '')

    let score = key[mine]

    let type = win.includes(parsed) ? "win" : lose.includes(parsed) ? "lose" : "draw"

    switch (type) {
      case "win":
        score += 6
        break

      case "draw":
        score += 3
        break

      case "lose":
        score += 0
        break
    }

    return score
  })

  return result.reduce((acc, curr) => acc + curr, 0)

}

const data = readFile('./data.txt')
console.log(solution(data))