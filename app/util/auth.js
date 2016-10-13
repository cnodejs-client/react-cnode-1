export function setToken(accessToken) {
  localStorage.token = accessToken;
}

export function getToken() {
  return localStorage.token;
}

export function deleteToken() {
  delete localStorage.token;
}


export function authenticate(nextState, replace) {
  if(!getToken()) {
    replace('/');
  }
}
