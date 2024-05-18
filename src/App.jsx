import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes/index.jsx';

export function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}
