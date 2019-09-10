import './Breadcrumb.scss';
import React from 'react';
import { BreadcrumbProps } from './BreadcrumbProps';
import BreadcrumbItem from './components/BreadcrumbItem';

const Breadcrumb: React.FC<BreadcrumbProps> = ({ breadcrumbs }) => (
  <ol className="breadcrumb" itemScope itemType="https://schema.org/BreadcrumbList">
    {breadcrumbs.map((breadcrumb, index) => (
      <BreadcrumbItem breadcrumb={breadcrumb} key={index} />
    ))}
  </ol>
);

export default Breadcrumb;
