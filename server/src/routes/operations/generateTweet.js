import { createAction } from '../../middleware/operations.js'
import generateTweet from '../../actions/generateTweet.js'

export default createAction(generateTweet)
