// importacion de vistas
import About from "../views/about.js";
import NotFound from "../views/notFound.js";
import ApiUi from "../views/apiUi.js";
import Home from "../views/home.js";
import Login from "../views/login.js";
import { isAutenticated } from "../js/auth.js";
import setupLogin from "../views/loginScript.js";


// definicion de rutas disponibles en la aplicacion
const routes = {
  "/": {view: Home, guarded: false},
  "/apiUi": {view: ApiUi, guarded:true},
  "/about": {view: About, guarded: false},
  "/login": {view: Login, guarded: false, script: setupLogin},
};

export function router() {
  const path = window.location.pathname;
  const route = routes[path] || {view: NotFound, guarded: false};

  if(route.guarded && !isAutenticated()){
    history.pushState(null,null,"/login");
    return router();
  }


  document.getElementById("app").innerHTML = route.view()

  if(route.script){
    route.script();
  }
 
}
