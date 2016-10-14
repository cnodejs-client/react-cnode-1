export function setToken(accessToken, data) {
  localStorage.token = accessToken;
  localStorage.username = data.loginname;
  localStorage.userid = data.id;
}

export function getToken() {
  return localStorage.token;
}

export function deleteToken() {
  delete localStorage.token;
  delete localStorage.username;
  delete localStorage.userid;
}

export function getUserName() {
  return localStorage.username;
}

export function authenticate(nextState, replace) {
  if(!getToken()) {
    replace('/');
  }
}
