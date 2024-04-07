import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

interface ProductDetailsProps {
  product_name: string;
  categories: string;
  image_url: string;
  id: string;
}

export function ProdutoDetalhes() {
  const { id } = useParams<{ id?: string }>(); // Captura o parâmetro de rota 'id' como string opcional
  const [productDetails, setProductDetails] = useState<ProductDetailsProps | null>(null);

  useEffect(() => {
    // Verifica se 'id' é undefined antes de chamar a função fetchProductDetails
    if (id) {
      fetchProductDetails(id);
    }
  }, [id]);

  function fetchProductDetails(productId: string) {
    fetch(`https://world.openfoodfacts.org/api/v0/product/${productId}.json`)
      .then(response => response.json())
      .then((data: any) => {
        if (data && data.product) {
          setProductDetails({
            product_name: data.product.product_name,
            categories: data.product.categories,
            image_url: data.product.image_url,
            id: data.product.code
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  if (!productDetails) {
    return  <div className="container text-center pt-5">
                <img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" alt="Loading" />
                <p>Carregando...</p>
            </div>;
  }

  return (
    <div className="container pt-5">
      <h1 className="title">Detalhes do Produto</h1>
      <hr />
      <div className="col-md-4">
        <div className="card mb-3">
            <img src={productDetails.image_url} className="card-img-top" alt={productDetails.product_name} />
            <div className="card-body">
            <h5 className="card-title">{productDetails.product_name}</h5>
            <p className="card-text">Categoria: {productDetails.categories}</p>
            <p className="card-text">ID: {productDetails.id}</p>
            </div>
        </div>
      </div>
    </div>
  );
}
