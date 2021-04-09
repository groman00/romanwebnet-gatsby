import React from 'react';
import { DefaultLayout as Layout } from '../../components/layout';
import SEO from '../../components/seo';
import Recipes from '../../components/Recipes';

const RecipesPage: React.FC = () => (
  <Layout>
    <SEO title="Recipes" />
    <Recipes />
  </Layout>
);

export default RecipesPage;
