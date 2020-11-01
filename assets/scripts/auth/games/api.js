const config = require('./../../config')

const newGame = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    data: data
  })
}

const changeGame = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games/:id',
    method: 'PATCH',
    data: data
  })
}

module.exports = {
  newGame,
  changeGame
}
