# c15t Documentation

> Transform privacy consent from a compliance checkbox into a fully observable system. Built for modern development teams, c15t unifies analytics, consent tracking, and privacy controls into a single performant solution.

## What is c15t?

c15t (Consent Management) is an open-source platform that provides:

- **Analytics integration** - Connect with your existing analytics tools
- **Consent management** - Handle user privacy preferences elegantly  
- **Privacy controls** - Complete consent state visibility
- **Developer experience** - TypeScript-first APIs with full type safety
- **Performance focused** - Minimal bundle impact and optimized patterns

## Core Principles

1. **Open Source First** - Building in public for transparency and community collaboration
2. **Developer Experience** - Privacy management that feels natural in your workflow
3. **Performance as Standard** - Every byte matters, built with performance in mind
4. **Privacy by Design** - GDPR-compliant by default with granular controls

## Get Started

Ready to modernize your privacy infrastructure? Choose your path based on your stack and needs.

## Documentation

- [AI Tools Integrations](/docs/ai-tools-integrations): Learn how to integrate Consent Management (c15t) with AI tools and language models through the standardized llms.txt file. This guide explains how to access and import the llms.txt file to enhance your development workflow with AI-powered tools like Cursor.
- [Contributing](/docs/contributing): No description available
- [Docs Preview GitHub Action](/docs/contributing/docs-preview-action): How our composite GitHub Action deploys the docs preview to Vercel and posts a sticky PR comment.
- [Documentation System Setup](/docs/contributing/documentation-setup): Learn how to set up the unified documentation build system for local development and understand the production deployment process.
- [Frameworks](/docs/frameworks): Get started with c15t and your favorite frontend framework.
- [Callbacks](/docs/frameworks/javascript/callbacks): Learn how to use callbacks to respond to c15t events in your application.
- [iframe blocking](/docs/frameworks/javascript/iframe-blocking): Learn how to block iframes based on consent.
- [Internationalization (i18n)](/docs/frameworks/javascript/internationalization): Learn how to add translations to your Consent Manager.
- [JavaScript Quickstart](/docs/frameworks/javascript/quickstart): Learn how to integrate c15t into your Javacript application with this step-by-step guide. Well cover installation, configuration, and basic usage.
- [Script Loader](/docs/frameworks/javascript/script-loader): Load scripts based on consent. Used to load scripts that are not necessary for the users consent, such as analytics scripts.
- [Available Callbacks](/docs/frameworks/javascript/shared/available-callbacks): A list of all the callbacks that are available in the Consent Manager.
- [iframe blocking](/docs/frameworks/javascript/shared/iframe-blocking): Learn how to block iframes based on consent.
- [Internationalization (i18n)](/docs/frameworks/javascript/shared/internationalization): Learn how to add translations to your Consent Manager
- [Script Loader](/docs/frameworks/javascript/shared/script-loader): Load scripts based on consent. Used to load scripts that are not necessary for the users consent, such as analytics scripts.
- [Checking consent](/docs/frameworks/javascript/shared/store/checking-consent): Check if the user has given consent for a specific purpose with the has() method.
- [Location Info](/docs/frameworks/javascript/shared/store/location-info): How to view and update the users location
- [Overview](/docs/frameworks/javascript/shared/store/overview): The store is a global state that can be used to access the consent managers state.
- [Setting consent](/docs/frameworks/javascript/shared/store/setting-consent): Methods for managing a users consent.
- [Hosted](/docs/frameworks/javascript/shared/storing-consent/hosted): Use consent.io for an easy, managed consent storage solution with minimal setup
- [Offline](/docs/frameworks/javascript/shared/storing-consent/offline): Store consent decisions in the browser with offline mode, perfect for sites without backend requirements
- [Overview](/docs/frameworks/javascript/shared/storing-consent/overview): Compare different approaches to storing consent decisions in your application
- [Translation Types](/docs/frameworks/javascript/shared/translation-types): Various translation types for c15t
- [Checking consent](/docs/frameworks/javascript/store/checking-consent): Check if the user has given consent for a specific purpose with the has() method.
- [Location Info](/docs/frameworks/javascript/store/location-info): How to view and update the users location
- [Overview](/docs/frameworks/javascript/store/overview): The store is a global state that can be used to access the consent managers state.
- [Setting consent](/docs/frameworks/javascript/store/setting-consent): Learn how to manage a users consent
- [Hosted](/docs/frameworks/javascript/storing-consent/hosted): Use consent.io for an easy, managed consent storage solution with minimal setup
- [Offline](/docs/frameworks/javascript/storing-consent/offline): Store consent decisions in the browser with offline mode, perfect for sites without backend requirements
- [Overview](/docs/frameworks/javascript/storing-consent/overview): Compare different approaches to storing consent decisions in your application
- [Callbacks](/docs/frameworks/next/callbacks): Learn how to use callbacks to respond to c15t events in your Next.js application.
- [Client Side Options (App Dir)](/docs/frameworks/next/components/client-side-options): Handle client-side options for the consent manager in Next.js App Directory.
- [Consent Manager Dialog](/docs/frameworks/next/components/consent-manager-dialog): An accessible, animated modal interface that wraps the Consent Manager Widget for a focused privacy customization experience.
- [Consent Manager Widget](/docs/frameworks/next/components/consent-manager-widget): A flexible, composable widget for building custom privacy consent interfaces. The widget provides granular control over privacy preferences while handling all the compliance requirements for you.
- [Cookie Banner](/docs/frameworks/next/components/cookie-banner): A customizable cookie consent banner that handles privacy compliance with zero configuration required.
- [Frame](/docs/frameworks/next/components/frame): Conditionally render children based on consent, with a placeholder for when consent is not given.
- [Headless](/docs/frameworks/next/headless): Reduce bundle size and improve performance by using the headless package.
- [Checking consent](/docs/frameworks/next/hooks/use-consent-manager/checking-consent): Check if the user has given consent for a specific purpose with the has() method.
- [Location Info](/docs/frameworks/next/hooks/use-consent-manager/location-info): How to view and update the users location
- [Overview](/docs/frameworks/next/hooks/use-consent-manager/overview): The useConsentManager hook is a React hook that provides access to the consent managers state.
- [Setting consent](/docs/frameworks/next/hooks/use-consent-manager/setting-consent): Learn how to manage a users consent
- [useFocusTrap](/docs/frameworks/next/hooks/use-focus-trap): The useFocusTrap hook provides accessibility-focused keyboard navigation management, keeping focus trapped within modal components for better user experience.
- [useTranslations](/docs/frameworks/next/hooks/use-translations): The useTranslations hook provides access to the consent managers translations.
- [iframe blocking](/docs/frameworks/next/iframe-blocking): Learn how to block iframes based on consent.
- [Internationalization (i18n)](/docs/frameworks/next/internationalization): Learn how to add translations to your Consent Manager.
- [Quickstart](/docs/frameworks/next/quickstart): Integrate c15t into your Next.js application with this step-by-step guide. Well cover installation, configuration, and basic usage.
- [Quickstart (Pages Directory)](/docs/frameworks/next/quickstart-pages): Integrate c15t into your Next.js pages directory application with this step-by-step guide. Well cover installation, configuration, and basic usage.
- [Script Loader](/docs/frameworks/next/script-loader): Load scripts based on consent. Used to load scripts that require the users consent, such as analytics scripts.
- [Hosted](/docs/frameworks/next/storing-consent/hosted): Use consent.io for an easy, managed consent storage solution with minimal setup
- [Offline](/docs/frameworks/next/storing-consent/offline): Store consent decisions in the browser with offline mode, perfect for sites without backend requirements
- [Overview](/docs/frameworks/next/storing-consent/overview): Compare different approaches to storing consent decisions in your application
- [Styling with CSS Classes](/docs/frameworks/next/styling/classnames): Learn how to customize components using CSS class names and class-based styling.
- [Color Scheme (Light/Dark Mode)](/docs/frameworks/next/styling/color-scheme): Manage your components light, dark, and system color schemes.
- [Styling with CSS Variables](/docs/frameworks/next/styling/css-variables): Learn how to use CSS variables to create flexible and dynamic themes for c15t components.
- [General Styling](/docs/frameworks/next/styling/overview): Learn the core concepts of the c15t theming system and how it enables flexible component styling.
- [Callbacks](/docs/frameworks/react/callbacks): Learn how to use callbacks to respond to c15t events in your React application.
- [Consent Manager Dialog](/docs/frameworks/react/components/consent-manager-dialog): An accessible, animated modal interface that wraps the Consent Manager Widget for a focused privacy customization experience.
- [Consent Manager Widget](/docs/frameworks/react/components/consent-manager-widget): A flexible, composable widget for building custom privacy consent interfaces. The widget provides granular control over privacy preferences.
- [Cookie Banner](/docs/frameworks/react/components/cookie-banner): A customizable cookie consent banner that handles privacy compliance with zero configuration required.
- [Frame](/docs/frameworks/react/components/frame): Conditionally render children based on consent, with a placeholder for when consent is not given.
- [Headless](/docs/frameworks/react/headless): Reduce bundle size and improve performance by using the headless package.
- [Checking consent](/docs/frameworks/react/hooks/use-consent-manager/checking-consent): Check if the user has given consent for a specific purpose with the has() method.
- [Location Info](/docs/frameworks/react/hooks/use-consent-manager/location-info): How to view and update the users location
- [Overview](/docs/frameworks/react/hooks/use-consent-manager/overview): The useConsentManager hook is a React hook that provides access to the consent managers state.
- [Setting consent](/docs/frameworks/react/hooks/use-consent-manager/setting-consent): Learn how to manage a users consent
- [useFocusTrap](/docs/frameworks/react/hooks/use-focus-trap): The useFocusTrap hook provides accessibility-focused keyboard navigation management, keeping focus trapped within modal components for better user experience.
- [useTranslations](/docs/frameworks/react/hooks/use-translations): The useTranslations hook provides access to the consent managers translations.
- [iframe blocking](/docs/frameworks/react/iframe-blocking): Learn how to block iframes based on consent.
- [Internationalization (i18n)](/docs/frameworks/react/internationalization): Learn how to add translations to your Consent Manager.
- [React Quickstart](/docs/frameworks/react/quickstart): Learn how to integrate c15t into your React application with this step-by-step guide. Well cover installation, configuration, and basic usage.
- [Script Loader](/docs/frameworks/react/script-loader): Load scripts based on consent. Used to load scripts that are not necessary for the users consent, such as analytics scripts.
- [Hosted](/docs/frameworks/react/storing-consent/hosted): Use consent.io for an easy, managed consent storage solution with minimal setup
- [Offline](/docs/frameworks/react/storing-consent/offline): Store consent decisions in the browser with offline mode, perfect for sites without backend requirements
- [Overview](/docs/frameworks/react/storing-consent/overview): Compare different approaches to storing consent decisions in your application
- [Styling with CSS Classes](/docs/frameworks/react/styling/classnames): Learn how to customize components using CSS class names and class-based styling.
- [Color Scheme (Light/Dark Mode)](/docs/frameworks/react/styling/color-scheme): Manage your components light, dark, and system color schemes.
- [Styling with CSS Variables](/docs/frameworks/react/styling/css-variables): Learn how to use CSS variables to create flexible and dynamic themes for c15t components.
- [General Styling](/docs/frameworks/react/styling/overview): Learn the core concepts of the c15t theming system and how it enables flexible component styling.
- [Welcome to c15t Docs](/docs/index): Find all the guides and resources you need to build your application
- [Databuddy](/docs/integrations/databuddy): Databuddy is a privacy-focused analytics platform that helps you understand user behavior and track events. It supports cookieless tracking and manages consent automatically through c15ts consent state synchronization.
- [GA4 + Google Ads (gtag.js)](/docs/integrations/google-tag): Send data to Google Analytics 4 and Google Ads with automatic Consent Mode v2 support.
- [Google Tag Manager](/docs/integrations/google-tag-manager): Deploy and manage marketing tags centrally with automatic consent state synchronization.
- [LinkedIn Insights](/docs/integrations/linkedin-insights): Track conversions and build matched audiences for LinkedIn advertising campaigns.
- [Meta Pixel](/docs/integrations/meta-pixel): Track conversions and build audiences for Facebook and Instagram advertising campaigns.
- [Microsoft UET](/docs/integrations/microsoft-uet): Track conversions and measure performance for Microsoft Advertising and Bing Ads.
- [Integrations](/docs/integrations/overview): Many of your tools may require consent to be given before they can be used. This is especially true for analytics and marketing tools. \nc15t has various ways to integrate with your tools, depending on the tool you are using.
- [PostHog](/docs/integrations/posthog): PostHog is an open-source product analytics platform for tracking user behavior, session replays, feature flags, and A/B testing. It supports cookieless tracking, allowing analytics to continue even without cookie consent.
- [TikTok Pixel](/docs/integrations/tiktok-pixel): Measure ad performance and build audiences for TikTok advertising campaigns.
- [X Pixel (Twitter Pixel)](/docs/integrations/x-pixel): Track conversions and build audiences for advertising campaigns on X (formerly Twitter).
- [Introduction to Consent Management (c15t)](/docs/introduction): Transform privacy consent from a compliance checkbox into a fully observable system. Built for modern development teams, c15t unifies analytics, consent tracking, and privacy controls into a single performant solution - no more slow cookie banners or blind spots in user privacy choices.
- [Cookie Policy](/docs/legals/cookie-policy): No description available
- [Privacy Policy](/docs/legals/privacy-policy): No description available
- [c15t Community Code of Conduct](/docs/oss/code-of-conduct): Guidelines for fostering an inclusive, respectful, and collaborative open-source community
- [Contributing to c15t.com](/docs/oss/contributing): No description available
- [License](/docs/oss/license): No description available
- [Building Privacy Tools in the Open](/docs/oss/why-open-source): We believe great developer tools should be built in the open, with transparency and community collaboration at their core. This philosophy guides how were building modern privacy infrastructure.
- [Getting Started (v1)](/docs/self-host/v1): Quick start guide for setting up and using the c15t Backend package, including installation, basic configuration, and common issues.
- [Database Adapters Overview](/docs/self-host/v1/adapters): c15t Backend supports multiple database adapters, each offering different features and trade-offs. This guide helps you choose the right adapter for your needs.
- [Drizzle Adapter](/docs/self-host/v1/adapters/drizzle): The Drizzle adapter integrates c15t Backend with Drizzle ORM, a lightweight, type-safe SQL query builder with schema declaration.
- [Kysely Adapter](/docs/self-host/v1/adapters/kysely): The Kysely adapter provides type-safe SQL query building with support for multiple databases including PostgreSQL, MySQL, and SQLite.
- [Memory Adapter](/docs/self-host/v1/adapters/memory): The Memory adapter stores all data in-memory, making it perfect for development, testing, and prototyping. Data is lost when the application restarts.
- [Prisma Adapter](/docs/self-host/v1/adapters/prisma): The Prisma adapter integrates c15t Backend with Prisma ORM, providing type-safe database access with migration support and automatic schema generation.
- [Core Concepts](/docs/self-host/v1/core-concepts): Detailed explanation of the fundamental concepts and architecture of the c15t Backend package, including instance management, context system, and request handling.
- [Database Adapters](/docs/self-host/v1/database-adapters): Comprehensive guide to the database adapter system in c15t Backend, covering available adapters, query interface, and performance considerations.
- [MySQL Adapter](/docs/self-host/v1/databases/mysql): The MySQL adapter provides integration with MySQL and MariaDB, widely-used relational database systems known for reliability, performance, and broad compatibility.
- [PostgreSQL Adapter](/docs/self-host/v1/databases/postgres): The PostgreSQL adapter provides integration with PostgreSQL, a powerful, open-source relational database system known for reliability, feature robustness, and performance.
- [SQLite Adapter](/docs/self-host/v1/databases/sqlite): The SQLite adapter provides a lightweight, file-based database solution perfect for small to medium applications, local development, and embedded systems.
- [Plugin System](/docs/self-host/v1/plugins): Complete guide to the plugin system in c15t Backend, including plugin types, lifecycle hooks, context extensions, and best practices.
- [Getting Started](/docs/self-host/v2): Quick start guide for self-hosting c15t with the @c15t/backend package.
- [Cloudflare Workers](/docs/self-host/v2/examples/cloudflare): Example of self-hosting c15t and Cloudflare Workers.
- [Next.js App Directory](/docs/self-host/v2/examples/nextjs): Example of self-hosting c15t and Next.js app directory.
- [Migrating from v1](/docs/self-host/v2/migrate-from-v1): Migrating from v1 to v2 of the c15t backend.
- [Options Reference](/docs/self-host/v2/options): Reference for all options available for the c15t instance.
- [Supported Databases](/docs/self-host/v2/supported-databases): List of supported databases for self-hosting c15t with the @c15t/backend package.