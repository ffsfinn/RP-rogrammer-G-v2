import tokenService from'./tokenService';
const BASE_URL = '/users/';

export default {
  signup,
  getUser,
  logout,
  login
};

function login(creds) {
  return fetch(BASE_URL + 'login', {
    method: 'POST',
    headers: new Headers({'Content-Type': 'application/json'}),
    body: JSON.stringify(creds)
  }).then(res => {
    if (res.ok) return res.json();
    throw new Error('Bad Credentials!');
  }).then(({token}) => tokenService.setToken(token))
}

function logout() {
  tokenService.removeToken();
}

function getUser() {
  return tokenService.getUserFromToken();
}

function signup(user) {
  console.log('this is ' + user.email)
  return fetch(BASE_URL + 'signup', {
    method: 'POST',
    headers: new Headers({'Content-Type': 'application/json'}),
    body: JSON.stringify(user)
  })
  .then(res => {
    if (res.ok) return res.json();
    // Probably a duplicate email
    throw new Error('Email already taken!');
  })
  .then(({token}) => tokenService.setToken(token));
}