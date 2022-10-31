export const guards = [
  { guardName: 'guardName', guardImg: 'guardImage' }
]

export const guardsPhrases: GuardsPhrasesInterface = {
  firstBoxFrase: ['Ah, sh*t here we go again.', 'Do you know that you have no chance of leaving this prison?']
}

interface GuardsPhrasesInterface {
  firstBoxFrase: string[]
}
