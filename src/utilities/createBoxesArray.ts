const generateRandomNum = (number: number): number => Math.floor(Math.random() * number)

const generateAndCheckId = (randomNumbersArray: number[], checkingNumber: number): number => {
  const numberInBoxId = generateRandomNum(randomNumbersArray.length)
  if (randomNumbersArray[numberInBoxId] === checkingNumber) {
    generateAndCheckId(randomNumbersArray, checkingNumber)
  }
  return numberInBoxId
}

export const createBoxesArray = (boxesNumber: number): Box[] => {
  const boxNumbers: number[] = Array.from({ length: boxesNumber }, (_, i) => i + 1)

  const boxes: Box[] = [...boxNumbers].map(boxNumber => {
    const numberInBoxId = generateAndCheckId(boxNumbers, boxNumber)
    const numberInBox = boxNumbers[numberInBoxId]

    boxNumbers.splice(numberInBoxId, 1)

    return {
      boxNumber,
      numberInBox
    }
  })

  return boxes
}

interface Box {
  boxNumber: number
  numberInBox: number
}

console.log(createBoxesArray(15))
