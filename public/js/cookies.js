window.addEventListener("DOMContentLoaded", (event) => {
  // document.cookie = "monster_name=cookie";
  // document.cookie = "favorite_cookie=snickerdoodle";
  window.alert(document.cookie);

  // const setCookie = function (name, val) {
  //   return document.cookie = `${name}=${val}`;

  // }
  setCookie("savannah", "baylen");
  setCookie('javascript', 'mac');
  console.log(getCookie());
  getCookieName("test");
  deleteCookie('test');
  console.log(getCookie());
});
const setCookie = function (name, val) {
  return document.cookie = `${name}=${val}`;

}
const getCookie = function () {
  return document.cookie.split(";");
}
const getCookieName = function (name) {
  if (document.cookie.includes(name)) {
    let array = document.cookie.split("=")
    return array[1];
  } return null;
}
const deleteCookie = function (name) {
  if (!document.cookie.includes(name)) {
    console.log('Cookie not found.');
  }
  if (document.cookie.includes(name)) {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT`;

  }
}
