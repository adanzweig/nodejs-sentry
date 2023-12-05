# Node.js Project with Sentry Integration

This Node.js application is configured with Sentry for advanced error tracking and performance monitoring. 

## Description

This application demonstrates the integration of Sentry in a Node.js environment. It includes the setup for error logging, performance profiling, and transaction monitoring.

## Getting Started

### Dependencies

- Node.js
- Sentry account and a corresponding DSN (Data Source Name)
- Any additional dependencies your specific project might require

### Installing

1. Clone the repository:
   ```bash
   git clone https://github.com/adanzweig/nodejs-sentry.git
   ```
2. Install the necessary packages:
   ```bash
   npm install
   ```

### Environment Setup

1. Create a `.env` file in the root directory.
2. Add your Sentry DSN to the `.env` file:
   ```
   DSN=your_sentry_dsn_here
   ```

### Executing Program

Run the application:
```bash
node index.js
```

## Features

- Sentry integration for error tracking.
- Performance profiling with Sentry's Profiling Integration.
- Transaction monitoring for specific operations.

## Sentry Configuration

- `@sentry/node` for backend error reporting.
- `@sentry/profiling-node` for performance profiling.
- Sentry transactions for operation-specific performance data.


## Version History

- 0.1
    - Initial Release


## Acknowledgments

Inspiration, code snippets, etc.
* [Sentry Documentation](https://docs.sentry.io/platforms/node/)
