export function getToken() {
  return window.sessionStorage && sessionStorage.getItem("token");
}
export function setToken(token: string) {
  return window.sessionStorage && sessionStorage.setItem("token", token);
}
