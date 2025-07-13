// importamos libreria crypto para encriptar password
import CryptoJS from "crypto-js";

// funcion para verificar si el usuario esta autenticado
export function isAutenticated() {
  return localStorage.getItem("auth_token") !== null;
}

export function updateAuthButtons() {
  const $btnLogin = document.getElementById("btnLogin");
  const $btnLogout = document.getElementById("btnLogout");

  if (!$btnLogin || !$btnLogout) {
    console.warn(
      "Uno o ambos botones de autenticación (btnLogin, btnLogout) no se encontraron en el DOM."
    );
    return;
  }

  if (isAutenticated()) {
    $btnLogin.style.display = "none";
    $btnLogout.style.display = "inline";
  } else {
    $btnLogin.style.display = "inline";
    $btnLogout.style.display = "none";
  }
}

// funcion para logearnos
export function login(token, user, pass) {
  localStorage.setItem(
    "auth_token",
    JSON.stringify({ token: token, user: user, pass: pass })
  );
  updateAuthButtons();
}

// funcion para cerrar sesión
export function logout() {
  localStorage.removeItem("auth_token");
  updateAuthButtons();
  window.location.reload();
}

// funcion para validar credenciales
export function validateCredentials(user, pass) {
  // validar si los campos estan vacios:
  if (!user.trim() && !pass.trim()) {
    alert("por favor ingrese usuario y contraseña");
    return false;
  }
  // validar si el nombre esta vacio
  if (!user.trim()) {
    alert("por favor ingrese usuario");
    return false;
  }
  // validar si el password esta vacio
  if (!pass.trim()) {
    alert("por favor ingrese password");
    return false;
  }
  // si pasa todas las validaciones
  return true;
}

// funcion para hashear nuestra password con algoritmo SHA-256 y libreria crypto
export function hashPassword(password) {
  const clave = "Clavesecreta123";
  // ciframos el mensaje utilizando AES
  const passCifrada = CryptoJS.AES.encrypt(password, clave).toString();
  return passCifrada;
}

// validar si la ruta es protegida
export function validateGuardedPath(path) {
  switch (path) {
    case "/":
      return false;
    case "/login":
      return false;
    case "/apiUi":
      return true;
    case "/login":
      return false;
    default:
      return false;
  }
}
