import React from 'react';
import { FoodProps } from './produto/Produto';

export function FavoritosPage() {
  const favoritos: FoodProps[] = JSON.parse(localStorage.getItem('favoritos') || '[]');

  function handleDesfavoritar(id: string) {
    // Remover o favorito do localStorage
    const updatedFavoritos = favoritos.filter(favorito => favorito.id !== id);
    localStorage.setItem('favoritos', JSON.stringify(updatedFavoritos));
    // Recarregar a página para atualizar a lista de favoritos
    window.location.reload();
  }

  return (
    <div className="container pt-5">
      <h1 className="title">Meus Favoritos</h1>
      <hr />
      <div className="row">
        {favoritos.map((favorito, index) => (
          <div key={index} className="col-md-3">
            <div className="card mb-3 p-3">
              <div className="w-100 d-flex align-items-center" style={{ height: '90px', maxWidth: '100%', objectFit: 'contain' }}>
                <img 
                  src={favorito.image_url} 
                  className="card-img-top" 
                  alt={favorito.product_name}
                  style={{ maxHeight: '90px', maxWidth: '100%', objectFit: 'contain' }} 
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">{favorito.product_name}</h5>
                <p className="card-text">Categoria: {favorito.categories}</p>
                <button onClick={() => handleDesfavoritar(favorito.id)} className="btn btn-danger">Desfavoritar</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FavoritosPage;
