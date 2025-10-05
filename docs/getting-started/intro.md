---
sidebar_position: 1
title: Welcome to Protekt
description: Introduction to Protekt authentication platform
---
# Welcome to Protekt

Modern authentication, simplified. Protekt is a developer-first authentication platform that helps you add secure login, multi-factor authentication, and user management to your application in minutes, not weeks.

## Why Protekt?

Building authentication from scratch is complex, time-consuming, and risky. A single security vulnerability can compromise your entire application and user base. Protekt handles the hard parts so you can focus on building features your users love.

### Key Benefits

- **Enterprise Security**: SOC 2 compliant, GDPR ready, automatic security updates
- **Fast Integration**: Add authentication in under 10 minutes
- **Developer Experience**: Clean APIs, comprehensive SDKs, excellent documentation
- **Universal Support**: Works with any framework, platform, or language

## What You Can Build

<div className="row">
  <div className="col col--6" style={{marginBottom: '1rem'}}>
    <div className="card" style={{height: '100%'}}>
      <div className="card__header">
        <h3>🌐 Web Applications</h3>
      </div>
      <div className="card__body">
        <p>
          Secure login flows for React, Vue, Angular, or any web framework. 
          Add authentication in minutes with pre-built components and comprehensive guides.
        </p>
      </div>
      <div className="card__footer">
        <a href="/docs/guides/web-apps" className="button button--primary button--block">
          View Web Integration Guide →
        </a>
      </div>
    </div>
  </div>

  <div className="col col--6" style={{marginBottom: '1rem'}}>
    <div className="card" style={{height: '100%'}}>
      <div className="card__header">
        <h3>📱 Mobile Apps</h3>
      </div>
      <div className="card__body">
        <p>
          Native authentication for iOS, Android, React Native, and Flutter. 
          Support biometric login, secure token storage, and offline access.
        </p>
      </div>
      <div className="card__footer">
        <a href="/docs/guides/mobile-apps" className="button button--secondary button--block">
          Explore Mobile SDKs →
        </a>
      </div>
    </div>
  </div>

  <div className="col col--6" style={{marginBottom: '1rem'}}>
    <div className="card" style={{height: '100%'}}>
      <div className="card__header">
        <h3>🔌 Backend APIs</h3>
      </div>
      <div className="card__body">
        <p>
          Secure your REST or GraphQL APIs with JWT validation. 
          Protect endpoints with role-based access control and API key management.
        </p>
      </div>
      <div className="card__footer">
        <a href="/docs/guides/backend-apis" className="button button--primary button--block">
          See API documentation →
        </a>
      </div>
    </div>
  </div>

  <div className="col col--6" style={{marginBottom: '1rem'}}>
    <div className="card" style={{height: '100%'}}>
      <div className="card__header">
        <h3>🏢 Enterprise SSO</h3>
      </div>
      <div className="card__body">
        <p>
          Support SAML, OAuth 2.0, and OpenID Connect for corporate customers. 
          Enable single sign-on across multiple applications and services.
        </p>
      </div>
      <div className="card__footer">
        <a href="/docs/guides/enterprise-sso" className="button button--secondary button--block">
          Learn About Enterprise →
        </a>
      </div>
    </div>
  </div>
</div>

## Key Features
Building authentication shouldn't mean rebuilding the wheel. Protekt handles the complexity of modern auth so developers can focus on what makes their product unique. The protocols are implemented, the security is hardened, and the defenses are tested against real-world attacks. From shipping an MVP to scaling to millions of users, these features provide the foundation for secure authentication.

### Passwordless Authentication
Reduce friction and improve security by eliminating passwords entirely. Users authenticate through magic links sent to their email, biometric verification on their device, or time-sensitive one-time codes—no passwords to remember, leak, or crack.

### Multi-Factor Authentication
Add a critical second layer of defense beyond passwords. Support SMS codes, TOTP authenticator apps, email verification, and hardware security keys. Users stay protected even if their primary credentials are compromised.

### Social Login
Let users sign in with accounts they already trust. Pre-built integrations with Google, GitHub, Microsoft, and over 20 other providers mean faster signups and one less password for users to manage.

### Customizable UI
Authentication should match your brand, not look like a third-party service. Use hosted login pages with custom styling, embed authentication UI directly in your app, or build completely custom flows using the API.

### User Management
Get visibility into your user base without building admin tooling from scratch. The dashboard provides user search, activity logs, authentication history, and bulk operations, everything needed to manage users at scale.

## How It Works

Protekt follows industry-standard OAuth 2.0 and OpenID Connect protocols:

1. **User initiates login** - From your app, redirect users to Protekt
2. **User authenticates** - User enters credentials and completes MFA if enabled
3. **Protekt validates and returns tokens** - Receive secure JWT tokens
4. **Your app validates tokens** - Use our SDKs to verify tokens and establish sessions

## Next Steps

<div class="button-container">
  <a href="/docs/getting-started/concepts" class="button button--secondary button--lg">
    Core Concepts
  </a>
</div>

:::tip Need Help?
Join our Discord community or email support@protekt.dev for assistance.
:::