import { useNavigate, Link, Outlet } from "react-router-dom";

export default function Dasbhorad() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div>
      <h1>Dasbhorad</h1>
      <Link to="welcome">Eres bienvenido</Link>
      <br />
      <Link to="goodbye">Hasta luego!!</Link>
      <br />

      <button onClick={handleClick}>Cerrar sesion</button>
      <br />

      <Outlet />
    </div>
  );
}
