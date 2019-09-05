import React, { useEffect } from 'react';
import Button from '../../components/Button/Button';
import { RouteComponentProps } from 'react-router-dom';
import './ProductDetail.scss';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';

const product = {
  id: '123',
  title: 'Ipod',
  price: {
    currency: 'ARS',
    amount: 120,
    decimals: 30
  },
  picture: 'http://mla-s1-p.mlstatic.com/948813-MLA31003000773_062019-I.jpg',
  condition: 'Nuevo',
  free_shipping: true,
  sold_quantity: 234,
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam porro tempora doloribus dolorum consequatur reiciendis consectetur velit? Hic earum iusto suscipit architecto enim nisi dolores, fugiat maiores voluptas, vero esse?'
};

const ProductDetail: React.FC<RouteComponentProps<{id: string}>> = ({ match }) => {
  useEffect(() => {
    const { id } = match.params;
    console.log(id);
  });

  return (
    <main className="main">
      <div>
        <Breadcrumb />
        <div className="product-detail container">
          <img className="product-detail__picture" src={product.picture} alt={product.title} />
          <div className="product-detail__summary">
            <div className="product-detail__status">
              {product.condition} - {product.sold_quantity} vendidos
            </div>
            <div className="product-detail__title">{product.title}</div>
            <div className="product-detail__price">
              {product.price.currency} {product.price.amount}.{product.price.decimals}
            </div>
            <Button className="primary">Comprar</Button>
          </div>
          <div className="product-detail__description">
            <div className="product-detail__description__title">Descripción del Producto</div>
            <div className="product-detail__description__info">{product.description}</div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetail;
