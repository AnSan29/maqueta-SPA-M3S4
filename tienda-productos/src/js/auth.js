// importamos libreria crypto para encriptar password
import CryptoJS from "crypto-js";

// funcion para verificar si el usuario esta autenticado
export function isAutenticated(){
    if(localStorage.getItem("auth_token") !== null){
        document.getElementById("btnLogin").style.display="none"
        document.getElementById("btnLogout").style.display="inline"
    }
    return localStorage.getItem("auth_token") !== null;
    
}

// funcion para logearnos
export function login(token,user,pass){
    document.getElementById("btnLogin").style.display="none"
    document.getElementById("btnLogout").style.display="inline"
    localStorage.setItem("auth_token", JSON.stringify({"token":token, "user":user, "pass": pass}))
}

// funcion para cerrar sesión
export function logout(){
    document.getElementById("btnLogin").style.display="inline"
    document.getElementById("btnLogout").style.display="none"
    localStorage.removeItem("auth_token")
    window.location.reload()
}

// funcion para validar credenciales
export function validateCredentials(user,pass){
    // validar si los campos estan vacios:
    if(!user.trim() && !pass.trim()){
        alert("por favor ingrese usuario y contraseña");
        return false
    }
    // validar si el nombre esta vacio
    if(!user.trim()){
        alert("por favor ingrese usuario");
        return false
    }
    // validar si el password esta vacio
    if(!pass.trim()){
        alert("por favor ingrese password");
        return false
    }
    // si pasa todas las validaciones
    return true
}

// funcion para hashear nuestra password con algoritmo SHA-256 y libreria crypto
export function hashPassword(password){
    const clave = "Clavesecreta123"
    // ciframos el mensaje utilizando AES
    const passCifrada =  CryptoJS.AES.encrypt(password,clave).toString();
    return passCifrada;
}

