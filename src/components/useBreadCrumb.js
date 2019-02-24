import React from 'react';
import { BreadcrumbContext } from 'gatsby-plugin-breadcrumb';

export const useBreadcrumb = currentPath => {
  const { crumb, updateCrumb } = React.useContext(BreadcrumbContext);

  console.log('crumb in use by hook: ', crumb);

  if (currentPath && currentPath.pathname) {
    if (!crumb.find(c => c.value === currentPath.pathname)) {
      updateCrumb(currentPath.pathname);
    }
  }

  return {
    crumb,
    updateCrumb,
  };
};
