import { createQuery } from '../../middleware/operations.js'
import getTweetDraftsWithIdeas from '../../queries/getTweetDraftsWithIdeas.js'

export default createQuery(getTweetDraftsWithIdeas)
