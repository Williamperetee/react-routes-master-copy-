import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export interface FoodProps {
  product_name: string;
  categories: string;
  image_url: string;
  id: string;
}

interface ListaFavoritosProps {
  favoritos: FoodProps[];
  onFavoritar: (id: string) => void;
}

export function Produto() {
  const [foods, setFoods] = useState<FoodProps[]>([]);
  const [favoritos, setFavoritos] = useState<FoodProps[]>(() => {
    // Carregar os favoritos do localStorage quando o componente é montado
    const storedFavoritos = localStorage.getItem("favoritos");
    return storedFavoritos ? JSON.parse(storedFavoritos) : [];
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    function getFoods() {
      fetch("https://world.openfoodfacts.org/cgi/search.pl?json=1&search_terms=pizza&search_simple=1")
        .then(response => response.json())
        .then((data: any) => {
          if (data && data.products) {
            setFoods(data.products.map((product: any) => ({
              product_name: product.product_name,
              categories: product.categories,
              image_url: product.image_url,
              id: product.code
            })));
          }
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    }
    getFoods();
  }, []);

  useEffect(() => {
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
  }, [favoritos]);

  function handleFavoritar(id: string) {
    const index = favoritos.findIndex((food) => food.id === id);
    if (index === -1) {
      const produtoFavorito = foods.find((food) => food.id === id);
      if (produtoFavorito) {
        const updatedFavoritos = [...favoritos, produtoFavorito];
        setFavoritos(updatedFavoritos);
      }
    } else {
      const updatedFavoritos = [...favoritos];
      updatedFavoritos.splice(index, 1);
      setFavoritos(updatedFavoritos);
    }
  }

  if (loading) {
    return (
      <div className="container text-center mt-5">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/66/Loadingsome.gif" alt="Loading"   style={{ height: '300px' }}/>
        <p>Carregando...</p>
      </div>
    );
  }

  return (
    <div className="container pt-5">
      <h1 className="title p-4 rounded-4 bg-warning d-flex justify-content-center">Bem Vindo ao Super Mercado Perete</h1>
      <hr />
      <div className="row">
        <div className="col-md-9">
          <div className="row">
            {foods.map((food, index) => (
              <div key={index} className="col-sm-6 col-md-4">
                <div className="card mb-3 p-3" style={{ height: '430px' }}>
                  <div className="w-100 d-flex "  style={{ height: '178px' }}>
                    <img src={food.image_url} className="card-img-top w-100" alt={food.product_name} style={{ maxHeight: '200px', maxWidth: '100%', objectFit: 'contain' }}/>
                  </div>
                  <div className="card-body d-flex flex-column justify-content-between ">
                    <div className="mt-3">
                      <h5 className="card-title">{food.product_name}</h5>
                      <p className="card-text" style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                        Descrição: {food.categories}
                      </p>
                    </div>
                    <div className="d-flex justify-content-center gap-3">
                      <button onClick={() => handleFavoritar(food.id)} className="btn btn-primary mr-2">
                        {favoritos.some((favorito) => favorito.id === food.id) ? 'Desfavoritar' : 'Favoritar'}
                      </button>
                      <Link to={`/produto/${food.id}`} className="btn btn-secondary">Detalhes</Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <ListaFavoritos favoritos={favoritos} onFavoritar={handleFavoritar} />
      </div>
    </div>
  );
}

export function ListaFavoritos({ favoritos, onFavoritar }: ListaFavoritosProps) {
  return (
    <div className="col-md-3">
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
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
