import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      title="Protekt Docs"
      description="Learn how to integrate and build with Protekt's APIs, SDKs, and tools.">
      <main>
        {/* Hero Section */}
        <section
          style={{
            textAlign: 'center',
            padding: '5rem 1rem',
            background: '#000', // black background
            color: 'fff', // white text
          }}
        >
          <img
            src="/img/logo.svg"
            alt="Protekt Logo"
            width="100"
            style={{ marginBottom: '1.5rem' }}
          />
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
            Welcome to <span style={{ color: '#0066ff' }}>Protekt Docs</span>
          </h1>
          <p style={{ fontSize: '1.1rem', maxWidth: '650px', margin: '0 auto 2rem' }}>
            Your one-stop resource for integrating, configuring, and scaling with Protekt’s API and tools.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
            <Link
              className="button button--primary button--lg"
              to="/docs/getting-started/intro"
            >
              Get Started
            </Link>
            <Link
              className="button button--secondary button--lg"
              to="/docs/guides/mfa-implementation"
            >
              Integration Guide
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section
           style={{
           padding: '4rem 1rem',
           backgroundColor: '#000000ff', // dark gray to match the black theme
           color: '#fff',
           textAlign: 'center',
          }}
        >

          <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>
            What You’ll Find Here
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '2rem',
              maxWidth: '1000px',
              margin: '0 auto',
            }}
          >
            <div style={cardStyle}>
              <h3 style={cardTitle}>Getting Started</h3>
              <p>Set up your first integration and learn the basic workflow for Protekt APIs.</p>
              <Link to="/docs/getting-started/intro">Read more →</Link>
            </div>

            <div style={cardStyle}>
              <h3 style={cardTitle}>Guides</h3>
              <p>Step-by-step examples and tutorials to help you handle real-world use cases.</p>
              <Link to="/docs/guides/mfa-implementation">Explore guides →</Link>
            </div>

            <div style={cardStyle}>
              <h3 style={cardTitle}>API Reference</h3>
              <p>Complete list of endpoints, parameters, and responses to power your app.</p>
              <Link to="/docs/api">View API docs →</Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer
          style={{
            textAlign: 'center',
            padding: '2rem',
            background: '#f9fafb',
            marginTop: '2rem',
            borderTop: '1px solid #e5e7eb',
            fontSize: '0.9rem',
            color: '#555',
          }}
        >
          © {new Date().getFullYear()} Protekt. All rights reserved.
        </footer>
      </main>
    </Layout>
  );
}

const cardStyle = {
  padding: '2rem',
  borderRadius: '12px',
  backgroundColor: '#1a1a1a',
  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.3)',
  textAlign: 'left',
  color: '#ccc', // default text color
  lineHeight: '1.6',
};

const cardTitle = {
  fontSize: '1.2rem',
  marginBottom: '0.5rem',
  color: '#00b3ff', // bright blue title
};

const cardText = {
  color: '#aaa', // lighter gray for description text
};