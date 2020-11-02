const store = require('./../../store')

// response is the response from the api

const newGameSuccess = function (res) {
  store.game = res.game
  $('.box').text('')

  // store empty game(json) in the store file
}

let totalGames
const indexGamesSuccess = function (response) {
  totalGames = response.games.length
  $('#message').text('You have played ' + totalGames + ' games!')
}

const updateGameSuccess = function (response) {
  store.game = response.game
  console.log(store.game.cells)
}

// const checkForWinner = function () {
//   const index = store.game.cells
//   if (
//     //horizontals for x
//     index[0] === 'X' && index[1] === 'X' && index[2] === 'X' ||
//     index[3] === 'X' && index[4] === 'X' && index[5] === 'X' ||
//     index[6] === 'X' && index[7] === 'X' && index[8] === 'X' ||
//     //verticals for x
//     index[0] === 'X' && index[3] === 'X' && index[6] === 'X' ||
//     index[1] === 'X' && index[4] === 'X' && index[7] === 'X' ||
//     index[2] === 'X' && index[5] === 'X' && index[8] === 'X' ||
//     //diagonals for x
//     index[0] === 'X' && index[4] === 'X' && index[8] === 'X' ||
//     index[2] === 'X' && index[4] === 'X' && index[6] === 'X') {
//       return $('#message').text('X Wins!!')
//     }else if (
//       //horizontals for o
//     index[0] === 'O' && index[1] === 'O' && index[2] === 'O' ||
//     index[3] === 'O' && index[4] === 'O' && index[5] === 'O' ||
//     index[6] === 'O' && index[7] === 'O' && index[8] === 'O' ||
//       //verticals for o
//     index[0] === 'O' && index[3] === 'O' && index[6] === 'O' ||
//     index[1] === 'O' && index[4] === 'O' && index[7] === 'O' ||
//     index[2] === 'O' && index[5] === 'O' && index[8] === 'O' ||
//       //diagonals for o
//     index[0] === 'O' && index[4] === 'O' && index[8] === 'O' ||
//     index[2] === 'O' && index[4] === 'O' && index[6] === 'O') {
//       return $('#message').text('O Wins!!')
//     }

module.exports = {
  newGameSuccess,
  indexGamesSuccess,
  updateGameSuccess
  // checkForWinner
}
