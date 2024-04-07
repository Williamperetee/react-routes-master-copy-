import React from "react";
import { Link } from "react-router-dom";
import { FoodProps } from "./Produto";

interface ListaFavoritosProps {
  favoritos: FoodProps[];
}

export function ListaFavoritos({ favoritos }: ListaFavoritosProps) {
  return (
    <div className="container">
      <h1 className="title">Meus Favoritos</h1>
      <hr />
      <div className="row">
        {favoritos.map((favorito, index) => (
          <div key={index} className="col-md-4">
            <Link to={`/produto/${favorito.id}`} className="text-decoration-none">
              <div className="card mb-3">
                <div className="w-100 d-flex align-items-center" style={{ height: '90px', maxWidth: '100%', objectFit: 'contain' }}>
                  <img 
                    src={favorito.image_url} 
                    className="card-img-top" 
                    alt={favorito.product_name}
                    style={{ maxHeight: '90px', maxWidth: '100%', objectFit: 'contain' }} 
                  />
                </div>
                {/* <div className="card-body">
                  <h5 className="card-title">{favorito.product_name}</h5>
                  <p className="card-text">Categoria: {favorito.categories}</p>
                </div> */}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
