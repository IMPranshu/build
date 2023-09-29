import { createQuery } from './core'
import { GetAccessTokens } from '../../../server/src/queries/getAccessTokens'


const query = createQuery<GetAccessTokens>(
  'operations/get-access-tokens',
  ['AccessTokens'],
)

export default query
