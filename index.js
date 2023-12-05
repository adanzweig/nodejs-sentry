// Importing the 'dotenv' package to load environment variables from a .env file.
require('dotenv').config();

// Importing Sentry's Node.js SDK for error tracking and performance monitoring.
const sentry = require('@sentry/node');

// Importing Sentry's Profiling Integration for performance profiling.
const { ProfilingIntegration } = require('@sentry/profiling-node');

// Initializing Sentry with configuration options.
sentry.init({
    // Using the DSN (Data Source Name) from environment variables for secure Sentry connection.
    dsn: process.env.DSN,
    
    // Adding custom integrations, in this case, the Profiling Integration for performance data.
    integrations: [
        new ProfilingIntegration()
    ],
    
    // Setting the rate for capturing traces (for performance monitoring).
    tracesSampleRate: 1.0,
    
    // Setting the rate for capturing profiles (for detailed performance insights).
    profilesSampleRate: 1.0
});

// Starting a new transaction to monitor a specific operation or workflow.
const transaction = sentry.startTransaction({
    op: "test", // The type of operation.
    name: "First transact" // The name of the transaction.
});

// Function to test error handling.
function testErrors() {
    try {
        // Attempt to call a function that might throw an error.
        testFunction();
    } catch (e) {
        // Capturing any exceptions that occur and sending them to Sentry.
        sentry.captureException(e);
    } finally {
        // Ensuring the transaction is finished after the function execution.
        transaction.finish();
    }
}

// Executing the test function to simulate error handling and performance tracking.
testErrors();
