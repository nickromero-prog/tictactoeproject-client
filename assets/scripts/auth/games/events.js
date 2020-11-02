
const store = require('./../../store')
const api = require('./api')
const gameui = require('./gameui')

const onNewGame = function (event) {
  event.preventDefault()
  api.newGame()
    .then(gameui.newGameSuccess)
    .then($('#game-board').show())
}
// (res) => {
//   store.game = res.game
//   console.log(store.game._id)
// }


let isOver = false

// let currentPlayer = 'X'
let currentPlayer = 'X'

const onClickBox = (event) => {
  // event.target is an object of the exact html you clicked on(aka the box including
  // its id number and if x or 0 is in it)
  const box = $(event.target) // set the hmtl equal to box variable
  const boxId = box.data('id')// data id of html clicked on
  api.changeGame(boxId, currentPlayer, isOver)
    .then(gameui.updateGameSuccess)

  box.css('background', 'transparent').text(currentPlayer)
  // Change the current player
  currentPlayer = (currentPlayer === 'O' ? 'X' : 'O')
}

const onIndexGames = function (event) {
  event.preventDefault()
  api.indexGames()
    .then(gameui.indexGamesSuccess())
}



module.exports = {
  onNewGame,
  onClickBox,
  onIndexGames
}
