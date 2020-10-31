
'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('./../store')
const logic = require('./logic')

const onSignUp = function (event) {
  event.preventDefault() // event=submit, so preventDefault the submit action
  const form = event.target
  const data = getFormFields(form)// <---getFormFields(event.target) building the object
  api.signUp(data)// <---the ajax request to create object into
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  console.log(event)
  event.preventDefault() // event=submit, so preventDefault the submit action
  const form = event.target
  const data = getFormFields(form)// <---getFormFields(event.target) aquiring data to build object
  api.signIn(data)// <---the ajax request is returning response including the token
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault() // event=submit, so preventDefault the submit action
  const form = event.target
  const formData = getFormFields(form)
  api.changePassword(formData)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}
// THIS IS WHERE THE GAMES BEGIN/THE GAME LOGIC/GAME LOGIC/GAME LOGIC/GAME LOGIC
let currentPlayer = 'X'
const onClickBox = (event) => {
  console.log(event.target)// event.target is an object of the exact html you clicked on(aka the box including
  // its id number and if x or 0 is in it)

  // Select the box that was clicked, event.target
  const box = $(event.target)
  // Set the boxs background to `transparent`
  // So we can see the image behind the box.
  // Then set the text to the current player
  box.css('background', 'transparent').text(currentPlayer)

  // Change the current player
  currentPlayer = currentPlayer === 'O' ? 'X' : 'O'
}

const onNewGame = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.newGame()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onClickBox,
  onChangePassword,
  onNewGame
}
