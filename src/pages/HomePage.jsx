import { Link } from "react-router-dom";
const userId = "Eleazar";
export default function HomePage() {
  return (
    <div>
      <h1>HomePage</h1>
      <Link to={`/user/${userId}`}>Usuario Eleazar</Link>
    </div>
  );
}
