// importamos funcion router
import { router } from "../routes/router";

document.addEventListener("includes-loaded", () => {
  // ejecutamos router inicialmente
  router();

  // interceptamos clicks internos de pagina
  document.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      history.pushState(null, null, e.target.href);
      router();
    }
  });
  // manejo de navegacion con botones de atras/adelante
  window.addEventListener("popstate", router);
});
