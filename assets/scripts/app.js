'use strict'

const events = require ('./auth/events')

$(() => {
  $('#sign-up').on('submit', events.onSignUp),
  $('#sign-in').on('submit', events.onSignIn),
  $('#sign-out').on('submit', events.onSignOut),
  $('#change-password').on('submit', events.onChangePassword)
})
//the game is WORKING!!
$(() => {
  // Start the player at X
  let currentPlayer = '✕'

  // Our box click event handler
  const onBoxClick = (event) => {
    console.log('click')

    // Select the box that was clicked, event.target
    const box = $(event.target)

    // Set the boxs background to `transparent`
    // So we can see the image behind the box.
    // Then set the text to the current player
    box.css('background', 'transparent').text(currentPlayer)

    // Change the current player
    currentPlayer = currentPlayer === 'O' ? '✕' : 'O'
  }

  // Select all of the boxes, $('.box'), add an event listener so that `on`
  // every 'click' the `onBoxClick` event handler is called.
  $('.box').on('click', onBoxClick)
})
