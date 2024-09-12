const TOKEN_STORAGE = "diarium_access_token";
const USER_DATA_STORAGE = "diarium_user_data";

export function setCookie(KEY, VAL, HOUR) {
  var expires = "";
  if (HOUR) {
    var date = new Date();
    date.setTime(date.getTime() + HOUR * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = KEY + "=" + (VAL || "") + expires + "; path=/";
}

export function getCookie(KEY) {
  var nameEQ = KEY + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

export function eraseCookie(KEY) {
  document.cookie = KEY + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
}

export function setToken(value) {
  setCookie(TOKEN_STORAGE, value, 1);
}

export function getToken() {
  return getCookie(TOKEN_STORAGE);
}

export function clearStorages() {
  eraseCookie(TOKEN_STORAGE);
  localStorage.removeItem(USER_DATA_STORAGE);
}
