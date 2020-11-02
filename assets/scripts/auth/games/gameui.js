const store = require('./../../store')

// response is the response from the api

const newGameSuccess = function (res) {
  store.game = res.game
  console.log(store.game._id)
  // store empty game(json) in the store file
}

let totalGames
const indexGamesSuccess = function (response) {
  totalGames = response.games.length
  $('#message').text('You have played ' + totalGames)
}

const updateGameSuccess = function (response) {
  store.game = response.game
  console.log(store.game.cells)
}

const checkForWinner = function () {
  if (store.game.cells[0] = 'X' && store.game.cells[1] = 'X' && store.game.cells[2] = 'X')
}

module.exports = {
  newGameSuccess,
  indexGamesSuccess,
  updateGameSuccess
}
