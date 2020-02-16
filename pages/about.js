// import React from 'react';
import Link from 'next/link';
import Layout from '../components/layout';

export default function About() {
  return (
    <Layout>
      <p>This is about page</p>
      <Link href="/">
        <a>Back to home</a>
      </Link>
    </Layout>
  );
}
