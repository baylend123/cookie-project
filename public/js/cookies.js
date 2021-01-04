window.addEventListener("DOMContentLoaded", (event) => {
  document.cookie = "monster_name=cookie";
  // document.cookie = "favorite_cookie=snickerdoodle";
  window.alert(document.cookie);
  const setCookie = function (name, val) {
    let cook = document.coookie = `${name}=${val}`;
    return cook
  }
  setCookie("test", "test");
});
// const setCookie = function (name, val) {
//   let cook = document.coookie = "`${name}=${val}`";
//   return cook
// }
