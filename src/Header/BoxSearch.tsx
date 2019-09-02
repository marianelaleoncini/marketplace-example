import './BoxSearch.scss';
import React, { useState } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import Input from '../core/Input/Input';
import Button from '../core/Button/Button';
import ic_Search from '../assets/images/ic_Search.png';
import ic_Search2x from '../assets/images/ic_Search@2x.png.png';

const BoxSearch: React.FC<RouteComponentProps> = (props) => {
  const [searchInput, setSearchInput] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    props.history.push(`/items?search=${searchInput}`)
  };

  return (
    <div className="box-search">
      <form className="box-search__form" role="search" onSubmit={handleSubmit}>
        <Input
          autoComplete="false"
          autoFocus={true}
          aria-label="Ingresa lo que estas buscando"
          className="box-search__input"
          placeholder="Nunca dejes de buscar"
          value={searchInput}
          onChange={event => setSearchInput(event.target.value)}
        ></Input>
        <Button type="submit" className="box-search__button" aria-label="Buscar">
          <img src={ic_Search} srcSet={`${ic_Search2x} 2x`} alt="Buscar" />
        </Button>
      </form>
    </div>
  );
};

export default withRouter(BoxSearch);
