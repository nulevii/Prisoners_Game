import { guards } from './guards'
import prisonerImg from '../assets/images/characters/prisoners/prisoner.png'
const generateRandomNum = (number: number): number => Math.floor(Math.random() * number)

const generateId = (randomNumbersArray: number[] | string[]): number => {
  const numberInBoxId = generateRandomNum(randomNumbersArray.length)
  return numberInBoxId
}
export const createBoxesArray = (prisonersQtt: number): BoxInterface[] => {
  const boxNumbers: number[] = Array.from({ length: prisonersQtt }, (_, i) => i + 1)

  const boxes: BoxInterface[] = [...boxNumbers].map(boxNumber => {
    const numberInBoxId = generateId(boxNumbers)
    const numberInBox = boxNumbers[numberInBoxId]

    boxNumbers.splice(numberInBoxId, 1)

    return {
      boxNumber,
      numberInBox,
      isOpen: false
    }
  })
  return boxes
}
export interface BoxInterface {
  boxNumber: number
  numberInBox: number
  isOpen: boolean
}

const prisonersNames = ['Adam', 'Alex', 'Aaron', 'Ben', 'Carl', 'Dan', 'David', 'Edward', 'Fred', 'Frank', 'George', 'Hal', 'Hank', 'Ike', 'John', 'Jack', 'Joe', 'Larry', 'Monte', 'Matthew', 'Mark', 'Nathan', 'Otto', 'Paul', 'Peter', 'Roger', 'Roger', 'Steve', 'Thomas', 'Tim', 'Ty', 'Victor', 'Walter']
const prisonersSurnames = ['Anderson', 'Ashwoon', 'Aikin', 'Bateman', 'Bongard', 'Bowers', 'Boyd', 'Cannon', 'Cast', 'Deitz', 'Dewalt', 'Ebner', 'Frick', 'Hancock', 'Haworth', 'Hesch', 'Hoffman', 'Kassing', 'Knutson', 'Lawless', 'Lawicki', 'Mccord', 'McCormack', 'Miller', 'Myers', 'Nugent', 'Ortiz', 'Orwig', 'Ory', 'Paiser', 'Pak', 'Pettigrew', 'Quinn', 'Quizoz', 'Ramachandran', 'Resnick', 'Sagar', 'Schickowski', 'Schiebel', 'Sellon', 'Severson', 'Shaffer', 'Solberg', 'Soloman', 'Sonderling', 'Soukup', 'Soulis', 'Stahl', 'Sweeney', 'Tandy', 'Trebil', 'Trusela', 'Trussel', 'Turco', 'Uddin', 'Uflan', 'Ulrich', 'Upson', 'Vader', 'Vail', 'Valente', 'Van Zandt', 'Vanderpoel', 'Ventotla', 'Vogal', 'Wagle', 'Wagner', 'Wakefield', 'Weinstein', 'Weiss', 'Woo', 'Yang', 'Yates', 'Yocum', 'Zeaser', 'Zeller', 'Ziegler', 'Bauer', 'Baxster', 'Casal', 'Cataldi', 'Caswell', 'Celedon', 'Chambers', 'Chapman', 'Christensen', 'Darnell', 'Davidson', 'Davis', 'DeLorenzo', 'Dinkins', 'Doran', 'Dugelman', 'Dugan', 'Duffman', 'Eastman', 'Ferro', 'Ferry', 'Fletcher', 'Fietzer', 'Hylan', 'Hydinger', 'Illingsworth', 'Ingram', 'Irwin', 'Jagtap', 'Jenson', 'Johnson', 'Johnsen', 'Jones', 'Jurgenson', 'Kalleg', 'Kaskel', 'Keller', 'Leisinger', 'LePage', 'Lewis', 'Linde', 'Lulloff', 'Maki', 'Martin', 'McGinnis', 'Mills', 'Moody', 'Moore', 'Napier', 'Nelson', 'Norquist', 'Nuttle', 'Olson', 'Ostrander', 'Reamer', 'Reardon', 'Reyes', 'Rice', 'Ripka', 'Roberts', 'Rogers', 'Root', 'Sandstrom', 'Sawyer', 'Schlicht', 'Schmitt', 'Schwager', 'Schutz', 'Schuster', 'Tapia', 'Thompson', 'Tiernan', 'Tisler']
export const createPrisoners = (prisonersQtt: number): PrisonersInterface[] => {
  const prisoners = Array.from({ length: prisonersQtt }, (_, i) => i + 1)
    .map(prisonerNumber => {
      const prisonerName = `${prisonersNames[generateId(prisonersNames)]} ${prisonersSurnames[generateId(prisonersSurnames)]}`
      const attempts = prisonersQtt / 2

      return {
        prisonerNumber,
        prisonerName,
        prisonerImg,
        attempts
      }
    })
  return prisoners
}
export interface PrisonersInterface {
  prisonerNumber: number
  prisonerName: string
  prisonerImg: string
  attempts: number
}

export const selectGuard = (): GuardInterface => {
  const guardNum = generateRandomNum(guards.length)
  return guards[guardNum]
}

export interface GuardInterface {
  name: string
  resource: string
  picture: string
  firstJoke: string
}
