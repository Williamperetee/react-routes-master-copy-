import { Link } from "react-router-dom";

export function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3 fixed-top">
      <div className="container">
        <Link className="navbar-brand" to="/">Bem-vindo</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {/* <li className="nav-item">
              <Link className="nav-link" to="/sobre">Sobre</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contato">Contato</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/produto">Produtos</Link>
            </li> */}
            <li className="nav-item">
              <Link className="nav-link" to="/favoritos">Favoritos</Link>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
}
