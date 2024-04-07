import React from "react";
import { Link } from "react-router-dom";

export function Sobre() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Bem-vindo à página Sobre!</h1>
          <p>
            Aqui você pode adicionar informações sobre o seu site, empresa ou qualquer
            outro conteúdo relevante.
          </p>
          <Link to={"/"} className="btn btn-primary">Início</Link>
        </div>
      </div>
    </div>
  );
}
