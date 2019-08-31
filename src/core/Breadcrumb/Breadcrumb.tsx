import React from 'react';

const Breadcrumb: React.FC = () => (
  <ol itemScope itemType="https://schema.org/BreadcrumbList">
    <Breadcrumb></Breadcrumb>
  </ol>
);

export default Breadcrumb;
/* {breadcrumList.map(breadcrumbItem => (
  <Breadcrumb item={breadcrumbItem}></Breadcrumb>
))} */