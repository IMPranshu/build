import { createAction } from '../../middleware/operations.js'
import sendTweet from '../../actions/sendTweet.js'

export default createAction(sendTweet)
