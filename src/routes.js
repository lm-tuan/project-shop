import React from 'react'; 
import HomePage from './pages/HomePage/HomePage';
import ProductistPage from './pages/ProductListPage/ProductListPage';
import AddProductPage from './pages/ActioProductPage/AddProductPage';
import ContactPage from './pages/ContactPage/ContactPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import LoginPage from './pages/LoginPage/LoginPage';
import ProductDetailPage from './pages/ProductDetailPage/ProductDetailPage';
import CartProductPage from './pages/CartProudctPage/CartProudctPage'

const routes  = [
    {
        path:'/',
        exact:true,
        main: () => <HomePage/>
    },
  
    {
        path:'/products',
        exact:false,
        main: () => <ProductistPage/>
    },
    
    {
        path:'/product/add',
        exact:false,
        main: ({history}) => <AddProductPage history = {history}/>
    },
    {
        path: '/product/:id/edit',
        exact: false,
        main: ({match, history}) => <AddProductPage match={match} history={history}/>
    },
    {
        path:'/contact',
        exact:false,
        main: () => <ContactPage/>
    },
    {
        path:'/login',
        exact:false,
        main: () => <LoginPage/>
    },
    
    {
        path: '/product/:id',
        exact: false,
        main: ({match, history}) => <ProductDetailPage match={match} history={history}/>
    },
    {
        path: '/carts',
        exact: true,
        main: ({match, history}) => <CartProductPage match={match} history={history}/>
    },
    {
        path:'',
        exact:false,
        main: () => <NotFoundPage/>
    },
  

    
   
];

export default routes;