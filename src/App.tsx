import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider } from 'react-query';
import { queryClient } from '@Config';
import PublicRoutes from '@Routes/public';
import AppTemplate from '@Components/templates/AppTemplate';
import '@Styles/main.scss';

const App = () => (
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <AppTemplate>
        <PublicRoutes />
      </AppTemplate>
    </QueryClientProvider>
  </BrowserRouter>
);

export default App;
