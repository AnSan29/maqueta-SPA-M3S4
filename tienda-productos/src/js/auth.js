// funcion para verificar si el usuario esta autenticado
export function isAutenticated(){
    if(localStorage.getItem("auth_token") !== null){
        document.getElementById("btnLogin").style.display="none"
        document.getElementById("btnLogout").style.display="inline"
    }
    return localStorage.getItem("auth_token") !== null;
    
}

// funcion para logearnos
export function login(token){
    document.getElementById("btnLogin").style.display="none"
    document.getElementById("btnLogout").style.display="inline"
    localStorage.setItem("auth_token", token)
}

// funcion para cerrar sesión
export function logout(){
    document.getElementById("btnLogin").style.display="inline"
    document.getElementById("btnLogout").style.display="none"
    localStorage.removeItem("auth_token")
    window.location.reload()
}