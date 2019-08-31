import React from 'react';

const BreadcrumbItem: React.FC<void> = () => (
  <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
    <a itemType="https://schema.org/Thing" itemProp="item" href="javascript(0):void">
      <span itemProp="name">Books</span>
    </a>
    <meta itemProp="position" content="1" />
  </li>
);

export default BreadcrumbItem;
