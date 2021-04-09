import React from 'react';
import { DefaultLayout as Layout } from '../../components/layout';
import SEO from '../../components/seo';
import MusicPlayer from '../../components/MusicPlayer';

const MusicPage: React.FC = () => (
  <Layout>
    <SEO title="Music" />
    <MusicPlayer />
  </Layout>
);

export default MusicPage;
