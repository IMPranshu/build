import express from 'express'

import auth from '../../core/auth.js'

import embedIdeas from './embedIdeas.js'
import embedIdea from './embedIdea.js'
import updateIdea from './updateIdea.js'
import deleteIdea from './deleteIdea.js'
import generateTweetDraftsAndIdeas from './generateTweetDraftsAndIdeas.js'
import generateTweet from './generateTweet.js'
import sendTweet from './sendTweet.js'
import twitterAuthCallback from './twitterAuthCallback.js'
import twitterAuth from './twitterAuth.js'
import updateSettings from './updateSettings.js'
import getEmbeddedIdeas from './getEmbeddedIdeas.js'
import getTweetDraftsWithIdeas from './getTweetDraftsWithIdeas.js'
import fetchSimilarNotes from './fetchSimilarNotes.js'
import getAccessTokens from './getAccessTokens.js'

const router = express.Router()

router.post('/embed-ideas', auth, embedIdeas)
router.post('/embed-idea', auth, embedIdea)
router.post('/update-idea', auth, updateIdea)
router.post('/delete-idea', auth, deleteIdea)
router.post('/generate-tweet-drafts-and-ideas', auth, generateTweetDraftsAndIdeas)
router.post('/generate-tweet', auth, generateTweet)
router.post('/send-tweet', auth, sendTweet)
router.post('/twitter-auth-callback', auth, twitterAuthCallback)
router.post('/twitter-auth', auth, twitterAuth)
router.post('/update-settings', auth, updateSettings)
router.post('/get-embedded-ideas', auth, getEmbeddedIdeas)
router.post('/get-tweet-drafts-with-ideas', auth, getTweetDraftsWithIdeas)
router.post('/fetch-similar-notes', auth, fetchSimilarNotes)
router.post('/get-access-tokens', auth, getAccessTokens)

export default router
