import { createAction } from '../../middleware/operations.js'
import twitterAuthCallback from '../../actions/twitterAuthCallback.js'

export default createAction(twitterAuthCallback)
