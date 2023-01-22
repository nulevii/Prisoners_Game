import { guards } from './guards'
import prisonerImg from '../assets/images/characters/prisoners/prisoner.png'
const BOX_QTT = 60

const getRandomArrIndex = (number: number): number => Math.floor(Math.random() * number)
const getRandomNumber = (): number => Math.floor(1000 + Math.random() * 9000)

const generateId = (randomNumbersArray: number[] | string[]): number => {
  const numberInBoxId = getRandomArrIndex(randomNumbersArray.length)
  return numberInBoxId
}

const generateArray = (arrLength: number): number[] => {
  return Array.from({ length: arrLength }, (_, i) => i + 1)
}
const generateRandomNumArray = (arrLength: number): number[] => {
  return Array.from({ length: arrLength }, (_, i) => getRandomNumber())
}

const takeNumberFromArr = (arr: number[]): number => {
  const numberId = generateId(arr)
  const number = arr[numberId]
  arr.splice(numberId, 1)
  return number
}

export interface BoxInterface {
  boxNumber: number
  numberInBox: number
  isOpen: boolean
  boxPosition: number
}

export const createBoxesArray = (prisonersQtt: number): BoxInterface[] => {
  const boxNumbers = generateRandomNumArray(prisonersQtt)
  const boxPositions = generateArray(BOX_QTT)
  const boxesArr: BoxInterface[] = [...boxNumbers].map(boxNumber => {
    const numberInBox = takeNumberFromArr(boxNumbers)
    const boxPosition = takeNumberFromArr(boxPositions)

    return {
      boxNumber,
      numberInBox,
      isOpen: false,
      boxPosition
    }
  })
  return boxesArr
}

export interface PrisonersInterface {
  prisonerNumber: number
  prisonerName: string
  prisonerImg: string
  attempts: number
}

const prisonersNames = ['Adam', 'Alex', 'Aaron', 'Ben', 'Carl', 'Dan', 'David', 'Edward', 'Fred', 'Frank', 'George', 'Hal', 'Hank', 'Ike', 'John', 'Jack', 'Joe', 'Larry', 'Monte', 'Matthew', 'Mark', 'Nathan', 'Otto', 'Paul', 'Peter', 'Roger', 'Roger', 'Steve', 'Thomas', 'Tim', 'Ty', 'Victor', 'Walter']
const prisonersSurnames = ['Anderson', 'Ashwoon', 'Aikin', 'Bateman', 'Bongard', 'Bowers', 'Boyd', 'Cannon', 'Cast', 'Deitz', 'Dewalt', 'Ebner', 'Frick', 'Hancock', 'Haworth', 'Hesch', 'Hoffman', 'Kassing', 'Knutson', 'Lawless', 'Lawicki', 'Mccord', 'McCormack', 'Miller', 'Myers', 'Nugent', 'Ortiz', 'Orwig', 'Ory', 'Paiser', 'Pak', 'Pettigrew', 'Quinn', 'Quizoz', 'Ramachandran', 'Resnick', 'Sagar', 'Schickowski', 'Schiebel', 'Sellon', 'Severson', 'Shaffer', 'Solberg', 'Soloman', 'Sonderling', 'Soukup', 'Soulis', 'Stahl', 'Sweeney', 'Tandy', 'Trebil', 'Trusela', 'Trussel', 'Turco', 'Uddin', 'Uflan', 'Ulrich', 'Upson', 'Vader', 'Vail', 'Valente', 'Van Zandt', 'Vanderpoel', 'Ventotla', 'Vogal', 'Wagle', 'Wagner', 'Wakefield', 'Weinstein', 'Weiss', 'Woo', 'Yang', 'Yates', 'Yocum', 'Zeaser', 'Zeller', 'Ziegler', 'Bauer', 'Baxster', 'Casal', 'Cataldi', 'Caswell', 'Celedon', 'Chambers', 'Chapman', 'Christensen', 'Darnell', 'Davidson', 'Davis', 'DeLorenzo', 'Dinkins', 'Doran', 'Dugelman', 'Dugan', 'Duffman', 'Eastman', 'Ferro', 'Ferry', 'Fletcher', 'Fietzer', 'Hylan', 'Hydinger', 'Illingsworth', 'Ingram', 'Irwin', 'Jagtap', 'Jenson', 'Johnson', 'Johnsen', 'Jones', 'Jurgenson', 'Kalleg', 'Kaskel', 'Keller', 'Leisinger', 'LePage', 'Lewis', 'Linde', 'Lulloff', 'Maki', 'Martin', 'McGinnis', 'Mills', 'Moody', 'Moore', 'Napier', 'Nelson', 'Norquist', 'Nuttle', 'Olson', 'Ostrander', 'Reamer', 'Reardon', 'Reyes', 'Rice', 'Ripka', 'Roberts', 'Rogers', 'Root', 'Sandstrom', 'Sawyer', 'Schlicht', 'Schmitt', 'Schwager', 'Schutz', 'Schuster', 'Tapia', 'Thompson', 'Tiernan', 'Tisler']
export const createPrisoners = (boxes: BoxInterface[]): PrisonersInterface[] => {
  const newBoxes = JSON.parse(JSON.stringify(boxes))
  const prisoners = newBoxes.map(({ boxNumber }: { boxNumber: number }) => {
    const prisonerName = `${prisonersNames[generateId(prisonersNames)]} ${prisonersSurnames[generateId(prisonersSurnames)]}`
    const attempts = newBoxes.length / 2

    return {
      prisonerNumber: boxNumber,
      prisonerName,
      prisonerImg,
      attempts
    }
  })
  return prisoners
}

export const selectGuard = (): GuardInterface => {
  const guardNum = getRandomArrIndex(guards.length)
  return guards[guardNum]
}

export interface GuardInterface {
  name: string
  resource: string
  picture: string
  firstJoke: string
}

export const updateBoxPositions = (boxesArr: BoxInterface[]): BoxInterface[] => {
  const newBoxesArr = [...boxesArr]
  const boxPositions = generateArray(BOX_QTT)
  return newBoxesArr.map((box) => {
    const boxPosition = takeNumberFromArr(boxPositions)
    box.boxPosition = boxPosition
    return box
  })
}
