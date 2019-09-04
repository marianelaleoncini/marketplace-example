import React from 'react';
import BoxSearch from './components/BoxSearch/BoxSearch';
import './Header.scss';
import Logo_ML from '../../assets/images/Logo_ML.png';
import Logo_ML2x from '../../assets/images/Logo_ML@2x.png.png';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__content main-content">
        <img className="header__logo" src={Logo_ML} srcSet={`${Logo_ML2x} 2x`} alt="Buscar" />
        <BoxSearch />
      </div>
    </header>
  );
};

export default Header;
