
const store = require('./../../store')
const api = require('./api')
const ui = require('./ui')

let isOver = false
let currentPlayer = 'X'
const onClickBox = (event) => {
  // event.target is an object of the exact html you clicked on(aka the box including
  // its id number and if x or 0 is in it)
  const box = $(event.target)// set the hmtl equal to box variable
  api.changeGame(box.data('id'), currentPlayer, isOver)
  console.log('box is ', box)
  // Set the boxs  background to `transparent`
  // So we can see the image behind the box.
  // Then set the text to the current player
  box.css('background', 'transparent').text(currentPlayer)
  // Change the current player
  currentPlayer = currentPlayer === 'O' ? 'X' : 'O'
}

const onNewGame = function (event) {
  event.preventDefault()
  api.newGame()
    .then(ui.newGameSuccess())
}

const onIndexGames = function (event) {
  event.preventDefault()
  api.indexGames()
    .then(ui.indexGamesSuccess())
}

const checkForWinner = function (event) {}

module.exports = {
  onNewGame,
  onClickBox,
  onIndexGames,
  checkForWinner
}
