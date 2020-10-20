'use strict'

const events = require('./auth/events')

$(() => {
  $('#signupbutton').on('submit', events.onSignUp)// need to put event handler here)
  $('#signinbutton').on('submit', events.onSignIn)// need to put event handler here)
  $('#changepasswordbutton').on('submit', events.onChangePassword) // need to put event handler here)
  $('#signoutbutton').on('click', events.onSignOut)// need to put event handler here)
  $('#resetbutton').on('click', events.)// need to put event handler here)
})





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
