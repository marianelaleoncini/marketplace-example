import './BoxSearch.scss';
import React, { useState } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Input from '../core/Input/Input';
import Button from '../core/Button/Button';

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
          <FontAwesomeIcon className="box-search__button-icon" icon="search"></FontAwesomeIcon>
        </Button>
      </form>
    </div>
  );
};

export default withRouter(BoxSearch);
