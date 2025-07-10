// funcion para verificar si el usuario esta autenticado
export function isAutenticated(){
    return localStorage.getItem("auth_token") !== null;
}

// funcion para logearnos
export function login(token){
    localStorage.setItem("auth_token", token)
}

// funcion para cerrar sesión
export function logout(){
    localStorage.removeItem("auth_token")
}