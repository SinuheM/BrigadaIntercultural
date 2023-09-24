import { Link } from "react-router-dom";
import logo from "../../../img/logo.png"

export default function NotFound() {
  return (
    <div className="flex bg-black-400 items-center justify-center w-full min-h-screen text-gray-100">
      <div>
        <img src={logo} alt="Brigada intercultural" />
        <br />
        <h1>Oops! Parece que te perdiste.</h1>
        <br />
        <p>Puedes regresar al inicio</p>
        <br />
        <Link to="/" className="underline hover:text-white">Ir al Inicio</Link>
      </div>
    </div>
  );
}
