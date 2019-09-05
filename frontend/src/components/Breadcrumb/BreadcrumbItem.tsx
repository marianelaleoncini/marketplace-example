import React from 'react';
import './BreadcrumbItem.scss';

const BreadcrumbItem: React.FC = () => (
  <li className="breadcrumb__item" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
    <span itemType="https://schema.org/Thing" itemProp="item">
      <span itemProp="name">Books</span>
    </span>
    <meta itemProp="position" content="1" />
  </li>
);

export default BreadcrumbItem;
