const PANCAKE_EXTENDED = 'https://tokens.pancakeswap.finance/pancakeswap-extended.json'
const PANCAKE_TOP100 = 'https://tokens.pancakeswap.finance/pancakeswap-top-100.json'

export const DEFAULT_TOKEN_LIST_URL = PANCAKE_TOP100

export const UNSUPPORTED_LIST_URLS: string[] = []

// lower index == higher priority for token import
export const DEFAULT_LIST_OF_LISTS: string[] = [
  PANCAKE_EXTENDED,
  PANCAKE_TOP100,
  ...UNSUPPORTED_LIST_URLS // need to load unsupported tokens as well
]
