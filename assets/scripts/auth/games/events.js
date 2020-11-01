
const store = require('./../../store')
const api = require('./api')
const ui = require('./ui')

const onNewGame = function (event) {
  event.preventDefault()
  api.newGame()
    .then(ui.newGameSuccess())
}

let isOver = false
let currentPlayer = 'X'

const onClickBox = (event) => {
  // event.target is an object of the exact html you clicked on(aka the box including
  // its id number and if x or 0 is in it)
  const box = $(event.target) // set the hmtl equal to box variable
  const boxId = box.data('id')// data id of html clicked on
  box.css('background', 'transparent').text(currentPlayer)
  api.changeGame(boxId, currentPlayer, isOver)// update the game
  // Change the current player
  currentPlayer = currentPlayer === 'O' ? 'X' : 'O'
}

const onIndexGames = function (event) {
  event.preventDefault()
  api.indexGames()
    .then(ui.indexGamesSuccess())
}

const checkForWinner = function (event) {

}

module.exports = {
  onNewGame,
  onClickBox,
  onIndexGames,
  checkForWinner
}
