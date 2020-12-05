import React from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';

import ProductList from './components/ProductList'
import CreateProduct from './components/CreateProducts'
import DeleteProduct from './components/DeleteProduct'
import EditProducts from './components/EditProducts'
import Header from './components/Header'

const App = () => {
    return (
        <BrowserRouter>
            <Header></Header>
            <div className="container">
                <br />
                <Route path="/" exact component={ProductList}></Route>
                <Route path="/create" exact component={CreateProduct}></Route>
                <Route path="/edit/:id" exact component={EditProducts}></Route>
                <Route path="/delete/:id" exact component={DeleteProduct}></Route>
            </div>
        </BrowserRouter>
        
    );
}

export default App;