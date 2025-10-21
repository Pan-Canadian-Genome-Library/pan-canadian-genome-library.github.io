import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageAudiences from '@site/src/components/HomepageAudiences';
import Heading from '@theme/Heading';

import styles from './index.module.css';



function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h2" className="hero__title">
          {siteConfig.title}
        </Heading>
        <Heading as="h1" className="hero__subtitle">
          {siteConfig.tagline}
        </Heading>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Training & Documentation for users of the Pan-Canadian Genome Library">
      <HomepageHeader />
      <main>
        {/*}
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.aboutSection}> 
              <Heading as="h1">
                About the Pan-Canadian Genome Library
              </Heading>
              <p>
                Genomics is the study of a person's DNA. Genomic data needs a lot of digital storage space. 
                This makes it difficult and costly to store for a long time, especially after a project ends. 
                The Pan-Canadian Genome Library was made to store data from genomic research studies. 
                It works similarly to how a regular library stores and shares books. 
                The goal of this Library is to store Canada’s genomic data and help scientists use it again to make new discoveries.
              </p>
              <div className={styles.buttons}>
                {<Link
                className={clsx(
                  'button',
                  'button--secondary',
                  'button--lg',
                  styles.buttonLink
                )}
                to="https://genomelibrary.ca/about-us/">
                Learn more about PCGL
                </Link>}
                {<Link
                className={clsx(
                  'button',
                  'button--secondary',
                  'button--lg',
                  styles.buttonLink
                )}
                to="https://genomelibrary.ca/about-us/faq/">
                PCGL FAQs
                </Link>}
              </div>
            </div>
          </div>
        </section>
        */}
        <section>
        <div className={styles.container}>
          <div className={styles.resourcesSection}> 
            <Heading as="h1">
              Resources for PCGL users
            </Heading>
            <p>
              This Training & Documentation site is the home of resources for all users of the PCGL, including researchers, participants, and the public. 
              These resources include step-by-step guides for using the PCGL, curated catalogs of external training resources, and more!
            </p>
          </div>
        </div>
        <HomepageAudiences />
        </section>
      </main>
    </Layout>
  );
}
