import React from 'react';
import Head from 'next/head';

import { getStaticAssetsUrl } from '../utils';

import Layout from '../components/Layout';
import ModalButton from '../components/ModalButton';


const LandingPage = () => (
  <Layout>
    <Head>
      <title>Landing Page</title>
      <meta name="description" content="Landing Page" />
    </Head>

    <div>
      <div id="main">
        <br />
        <ModalButton />

        <br />
        <br />
        <br />
        <img style={{ width: '100%' }} src={getStaticAssetsUrl('/static/images/1.jpg')} />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  </Layout>
);

export default LandingPage;
