// importaciones
import { login } from "../js/auth.js";
import {router} from "../routes/router.js";

export default function setupLogin(){
    const $btn = document.getElementById("loginBtn");
    if($btn){
        $btn.addEventListener("click", ()=>{
            const user = document.getElementById("username").value;
            const pass = document.getElementById("password").value;

            if(user && pass){
                login("fake_token");
                history.pushState(null,null, "/apiUi")
                router();
            }else{
                alert("Por favor completa los campos")
            }
        })
    }
}