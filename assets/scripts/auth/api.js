//event listeners

const signUp = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: data
  })
};
const signIn = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: data
  })
};

const signOut = function () {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    data: data
  })
};

const changePassword = function () {
  return $.ajax({
    url: config.apiUrl +'/change-password',
    method: 'PATCH',
    data: data,
  })
};


module.exports {
  signUp,
  signIn,
  signOut
};
