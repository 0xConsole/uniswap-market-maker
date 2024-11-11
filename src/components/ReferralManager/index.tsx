import { ParsedQs } from 'qs'
import Cookies from 'universal-cookie'
import { isAddress } from '../../utils'
import useParsedQueryString from '../../hooks/useParsedQueryString'
import { useActiveWeb3React } from '../../hooks'

const isReferrerGiven = (params: ParsedQs) => typeof params.r === 'string' && isAddress(params.r)
// const addMinutes = (date: Date, minutes: number) => new Date(date.getTime() + minutes * 60000)
const addHours = (date: Date, hours: number) => {
  date.setHours(date.getHours() + hours)
  return date
}

export default function ReferralManager({ children }: { children: JSX.Element }) {
  const { account } = useActiveWeb3React()
  const query = useParsedQueryString()
  const cookies = new Cookies()

  if (isReferrerGiven(query) && account !== query.r) {
    cookies.set('moonbear_r', query.r, { path: '/', expires: addHours(new Date(), 24) })
  }

  return children
}
