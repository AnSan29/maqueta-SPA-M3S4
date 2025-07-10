// importacion de vistas
import About from "../views/about.js";
import NotFound from "../views/notFound.js";
import ApiUi from "../views/apiUi.js";
import Home from "../views/home.js";

// definicion de rutas disponibles en la aplicacion

const routes = {
  "/": Home,
  "/apiUi": ApiUi,
  "/about": About,
};

export function router() {
  const path = window.location.pathname;
  const view = routes[path] || NotFound;

  console.log("Path actual:", path);
  console.log("Renderizando vista:", view.name);
  console.log("Contenido generado por la vista:", view());
  document.getElementById("app").innerHTML = view();
}
