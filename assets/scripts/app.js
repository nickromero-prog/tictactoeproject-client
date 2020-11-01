'use strict'
const gameEvents = require('./auth/games/events')
const events = require('./auth/events')

$(() => {
  $('#sign-up-form').on('submit', events.onSignUp)
  $('#sign-in-form').on('submit', events.onSignIn)
  $('#change-password-form').on('submit', events.onChangePassword) // need to put event handler here)
  $('#sign-out-form').on('submit', events.onSignOut)
  $('#game-board').hide()
  $('#change-password-form').hide()
  $('#sign-out-form').hide()
  $('#create-game-form').hide()
  $('#create-game-form').on('submit', gameEvents.onNewGame)
  $('.box').on('click', gameEvents.onClickBox)
  $('#index-games').on('click', gameEvents.onIndexGames)
  $('#index-games').hide()
})
