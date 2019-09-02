import React from 'react';
import BoxSearch from './BoxSearch';
import './Header.scss';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__content main-content">
        <img className="header__logo" src="../../Logo_ML.png" alt="Logo Mercado Libre" />
        <BoxSearch />
      </div>
    </header>
  );
};

export default Header;
