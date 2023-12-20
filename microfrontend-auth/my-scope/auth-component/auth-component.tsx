
export function AuthComponent() {
  return (
     <div>
      <h2>Authentication Page</h2>
      <form>
        <label>Usuario:</label>
        <input type="text" placeholder="Ingrese su usuario" />
        <br />
        <label>Contraseña:</label>
        <input type="password" placeholder="Ingrese su contraseña" />
        <br />
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
}
