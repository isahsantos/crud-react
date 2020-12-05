import React from 'react';
import Logo  from "../assets/img/box.svg"
const Header = () => {

return(
    <div className="navbar navbar-expand-lg navbar-light bg-light">
      <img className="navbar-brand" src={Logo}
       width="40" height="40" class="d-inline-block align-top" alt="Lista de Produtos" loading="lazy"/>
       <span className="navbar-brand">Lista de Produtos</span>
</div>
);
}
export default Header;