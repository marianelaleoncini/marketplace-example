import React from 'react';
import BreadcrumbItem from './BreadcrumbItem';
import './Breadcrumb.scss';

const Breadcrumb: React.FC = () => (
  <ol className="breadcrumb" itemScope itemType="https://schema.org/BreadcrumbList">
    <BreadcrumbItem></BreadcrumbItem>
    <BreadcrumbItem></BreadcrumbItem>
    <BreadcrumbItem></BreadcrumbItem>
  </ol>
);

export default Breadcrumb;
/* {breadcrumList.map(breadcrumbItem => (
  <Breadcrumb item={breadcrumbItem}></Breadcrumb>
))} */
