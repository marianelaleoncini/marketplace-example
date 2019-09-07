import React from 'react';
import BreadcrumbItem from './components/BreadcrumbItem';
import './Breadcrumb.scss';
import { BreadcrumbProps } from './BreadcrumbProps';

const Breadcrumb: React.FC<BreadcrumbProps> = ({ breadcrumbs }) => (
  <ol className="breadcrumb" itemScope itemType="https://schema.org/BreadcrumbList">
    {breadcrumbs.map((breadcrumb, index) => (
      <BreadcrumbItem breadcrumb={breadcrumb} key={index} />
    ))}
  </ol>
);

export default Breadcrumb;
/* {breadcrumList.map(breadcrumbItem => (
  <Breadcrumb item={breadcrumbItem}></Breadcrumb>
))} */
