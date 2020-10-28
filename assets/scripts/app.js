'use strict'

const events = require('./auth/events')

$(() => {
  $('#sign-up-form').on('submit', events.onSignUp)
  $('#sign-in-form').on('submit', events.onSignIn)
  $('#change-password-form').on('submit', events.onChangePassword) // need to put event handler here)
  $('#sign-out-form').on('submit', events.onSignOut)
  $('#change-password-form').hide()
  $('#sign-out-form').hide()
  $('#reset-form').hide()

  let currentPlayer = '✕'
  const onBoxClick = (event) => {
    console.log('click')
    const box = $(event.target)
    box.css('background', 'transparent').text(currentPlayer)
    currentPlayer = currentPlayer === 'O' ? '✕' : 'O'
  }
  $('.box').on('click', onBoxClick)
})
