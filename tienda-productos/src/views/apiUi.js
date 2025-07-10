/* export default function ApiUi() {
  return `<h1 class="h1">Nuestro crud</h1>`;
} */

export default function ApiUi() {
  return `
    <div class="card shadow-sm border-0 rounded-4 mb-4">
      <div class="card-body">
        <div class="d-flex justify-content-between align-items-start">
          <div>
            <h4 class="card-title fw-bold text-primary">Marketing en Redes Sociales</h4>
            <p class="mb-2"><span class="badge bg-info">Negocios</span></p>
            <p class="text-muted">Estrategias para aumentar tu presencia en plataformas como Instagram y Facebook.</p>
            <ul class="list-group list-group-flush mb-3">
              <li class="list-group-item">Instructor: <strong>Carlos Ríos</strong></li>
              <li class="list-group-item">Capacidad máxima: <strong>25 estudiantes</strong></li>
              <li class="list-group-item">ID del curso: <strong>3</strong></li>
            </ul>
          </div>

          <div class="d-flex flex-column gap-2">
            <button class="btn btn-outline-primary btn-sm rounded-pill" data-accion="editar" data-id="3">
              Editar
            </button>
            <button class="btn btn-outline-danger btn-sm rounded-pill" data-accion="eliminar" data-id="3">
              Eliminar
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}
