import React from 'react';
import { Layout, MusicPlayer, SEO } from '../../components';

const MusicPage: React.FC = () => (
  <Layout>
    <SEO title="Music" />
    <MusicPlayer />
  </Layout>
);

export default MusicPage;
