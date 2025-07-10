// vista de login
export default function Login() {
    return `
      <div class="container mt-5">
        <h2>Login</h2>
        <input type="text" id="username" class="form-control mb-2" placeholder="Usuario" />
        <input type="password" id="password" class="form-control mb-2" placeholder="Contraseña" />
        <button id="loginBtn" class="btn btn-primary">Iniciar sesión</button>
      </div>
    `;
  }