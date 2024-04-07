import { createBrowserRouter } from 'react-router-dom';
// import { Home } from './pages/home';
// import { Sobre } from './pages/sobre';
// import { Contato } from './pages/contato';
import { Produto } from './pages/produto/Produto';
import { NotFound } from './pages/notfound';
import { Layout } from './components/layout';
import { Login } from './pages/login';
import { Private } from './routes/Private';
import { ProdutoDetalhes } from './pages/produto/ProdutoDetalhes';
// import { ListaFavoritos } from './pages/produto/ListaFavoritos'; // Importe o componente ListaFavoritos
import { FavoritosPage } from './pages/FavoritosPage';

const router = createBrowserRouter([
  {
    element: <Layout/>,
    children: [
      {
        path: '/',
        element: <Private><Produto/></Private>
      },
      // {
      //   path: '/sobre',
      //   element: <Sobre/>
      // },
      // {
      //   path: '/contato',
      //   element: <Contato/>
      // },
      // {
      //   path: '/produto',
      //   element: <Private><Produto/></Private>
      // },
      {
        path: '/produto/:id',
        element: <ProdutoDetalhes/>
      },
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/favoritos',
        element: <Private><FavoritosPage/></Private>
      },
      {
        path: '*',
        element: <NotFound/>
      }
    ]
  }
]);

export { router };
