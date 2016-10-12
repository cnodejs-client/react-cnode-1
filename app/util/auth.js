export function setToken(data,  accessToken) {
  localStorage.token = accessToken;
}

export function getToken() {
  return localStorage.token;
}
