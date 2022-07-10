import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { FavoriteProvider } from './favorites/context/FavoriteContext';

const queryClient = new QueryClient()

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <FavoriteProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
      </FavoriteProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App;
