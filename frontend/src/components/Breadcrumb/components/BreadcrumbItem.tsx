import './BreadcrumbItem.scss';
import React from 'react';
import { BreadcrumbItemProps } from './BreadcrumbItemProps';

const BreadcrumbItem: React.FC<BreadcrumbItemProps> = ({ breadcrumb }) => (
  <li className="breadcrumb__item" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
    <span itemType="https://schema.org/Thing" itemProp="item">
      <span itemProp="name">{breadcrumb}</span>
    </span>
    <meta itemProp="position" content="1" />
  </li>
);

export default BreadcrumbItem;
