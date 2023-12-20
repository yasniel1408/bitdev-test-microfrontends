
export function AuthComponent() {
  return (
     <div>
      <h2>Authentication Page</h2>
      <form>
        <label htmlFor="username">Usuario:
          <input type="text" id="username" name="username" placeholder="Ingrese su usuario" />
        </label>
        <br />
        <label htmlFor="pass">Contraseña:
          <input type="password" id="pass" name="pass" placeholder="Ingrese su contraseña" />
        </label>
        <br />
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
}
