import React from 'react';
import clsx from 'clsx';
import loadable from '@loadable/component';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HomeFeatures from '@site/src/components/HomeFeatures';
import styles from './index.module.css';

function HomeHeader(): JSX.Element {
  const AsciinemaPlayer = loadable(
    () => import('@site/src/components/AsciinemaPlayer')
  );
  return (
    <header className={clsx('hero hero--primary', styles.herobanner)}>
      <AsciinemaPlayer
        src={'https://asciinema.org/a/459358.cast'}
        /* poster={'npt:2:10'} */
        preload={true}
        rows={29}
        cols={209}
        speed={1.5}
        idleTimeLimit={2}
      />
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.tagline}`}
      description="A Swiss Army Knife for Zsh - a toolchain that works for you."
    >
      <HomeHeader />
      <main>
        <HomeFeatures />
      </main>
    </Layout>
  );
}
