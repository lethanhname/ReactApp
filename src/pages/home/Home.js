import withRoot from '../../core/withRoot';
// --- Post bootstrap -----
import React from 'react';

import AppAppBar from '../layout/AppAppBar';
import AppFooter from '../layout/AppFooter';

import ProductHero from './ProductHero';
import ProductValues from './ProductValues';
import ProductHowItWorks from './ProductHowItWorks';
import ProductCTA from './ProductCTA';
import ProductCategories from './ProductCategories';
import ProductSmokingHero from './ProductSmokingHero';

function Index() {
  return (
    <React.Fragment>
      <AppAppBar />
      <ProductHero />
      <ProductValues />
      <ProductHowItWorks />
      <ProductCTA />
      <ProductSmokingHero />
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Index);