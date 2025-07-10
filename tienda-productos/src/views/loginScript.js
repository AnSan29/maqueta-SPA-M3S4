// importaciones
import { hashPassword, login, validateCredentials } from "../js/auth.js";
import {router} from "../routes/router.js";

export default function setupLogin(){
    const $btn = document.getElementById("loginBtn");
    if(!$btn) return;

    if($btn){
        $btn.addEventListener("click", (e)=>{
            e.preventDefault()
            const user = document.getElementById("username").value.trim();
            const pass = document.getElementById("password").value.trim();

            let passHashed = hashPassword(pass);
            

           // validar credenciales
           const isValid = validateCredentials(user,pass);
           if(!isValid) return;
           login("fake_token",user,passHashed)
           history.pushState(null,null, "/apiUi")
           router();
        })
    }
}

