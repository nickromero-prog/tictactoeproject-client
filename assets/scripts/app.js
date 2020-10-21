'use strict'

const events = require('./auth/events')

$(() => {
  $('#sign-up-form').on('submit', events.onSignUp)// need to put event handler here)
  $('#sign-in-form').on('submit', events.onSignIn)// need to put event handler here)
  $('#change-password-form').on('submit', events.onChangePassword) // need to put event handler here)
})

$(() => {
  let currentPlayer = '✕'
  const onBoxClick = (event) => {
    console.log('click')
    const box = $(event.target)
    box.css('background', 'transparent').text(currentPlayer)
    currentPlayer = currentPlayer === 'O' ? '✕' : 'O'
  }
  $('.box').on('click', onBoxClick)
})
