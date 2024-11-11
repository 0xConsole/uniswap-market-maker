import { ChainId } from '@uniswap/sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.BSC]: '0xddaaddebca4dccf8016308294ba9e092f9dd46a8',
  [ChainId.BSCT]: '0x87ec053e4c9fF1549B71b67A62b1c5E63BB3beAD'
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
