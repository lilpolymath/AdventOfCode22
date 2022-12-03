const { readFileSync } = require('fs')

const key = {
  A: 1, B: 2, C: 3, X: 1, Y: 2, Z: 3
}

const win = ["AY", "BZ", "CX",]
const lose = ["AZ", "CY", "BX"]

const readFile = (filename) => {
  const contents = readFileSync(filename, 'utf-8');

  const arr = contents.split(/\r?\n/);

  return arr
}

const data = readFile('./data.txt')

// --------- PART ONE ------------

const solution = arr => {

  const result = arr.map(element => {
    const [, mine] = element.split(" ")
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

console.log(solution(data))

// --------- PART TWO ------------

const winTwo = { "A": "Y", "B": "Z", "C": "X" }
const loseTwo = { "A": "Z", "C": "Y", "B": "X" }

const solutionTwo = arr => {

  const result = arr.map(element => {
    const [opp, mine] = element.split(" ")

    let score = 0

    switch (mine) {
      case "Z":
        score = key[winTwo[opp]] + 6
        break

      case "Y":
        score = key[opp] + 3
        break

      case "X":
        score = key[loseTwo[opp]] + 0
        break
    }


    return score
  })

  return result.reduce((acc, curr) => acc + curr, 0)

}

console.log(solutionTwo(data))