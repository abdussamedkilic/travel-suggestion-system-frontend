import React from 'react';
import ReactDOM from 'react-dom';

// Project imports
import App from './App';

// 3rd party
import { QueryClient, QueryClientProvider } from 'react-query';

// Create a client
const twentyFourHoursInMs = 1000 * 60 * 60 * 24;
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            refetchOnmount: false,
            refetchOnReconnect: false,
            retry: false,
            retryDelay: twentyFourHoursInMs,
        },
    },
});

ReactDOM.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <App />
        </QueryClientProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
