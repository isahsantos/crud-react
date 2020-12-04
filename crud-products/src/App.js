import React from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';

import ProductList from './components/ProductList'
import CreateProduct from './components/CreateProducts'
import EditProducts from './components/EditProducts'


const App = () => {
    return (
        <BrowserRouter>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <NavLink to="/" className="navbar-brand">Produtos </NavLink>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <NavLink className="nav-link" activeStyle={{ fontWeight: 'bold' }} to="/" exact>Lista De Produtos</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeStyle={{ fontWeight: 'bold' }} to="/create">Cadastrar Produto</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="container">
                <br />
                <Route path="/" exact component={ProductList}></Route>
                <Route path="/create" exact component={CreateProduct}></Route>
                <Route path="/edit/:id" exact component={EditProducts}></Route>
            </div>
        </BrowserRouter>
    );
}

export default App;