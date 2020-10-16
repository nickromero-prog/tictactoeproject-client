'use strict'

const events = require ('./auth/events')

$(() => {
  $('#sign-up').on('submit', events.onSignUp),
  $('#sign-in').on('submit', events.onSignIn),
  $('#sign-out').on('submit', events.onSignOut),
  $('#change-password').on('submit', events.onChangePassword)
})
