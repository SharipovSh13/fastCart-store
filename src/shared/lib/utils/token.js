function addToken(token) {
  localStorage.setItem("access_token", token);
}
function getToken() {
  return localStorage.getItem("access_token");
}
function removeToken() {
  localStorage.removeItem("access_token");
}
export { getToken, removeToken, addToken };
