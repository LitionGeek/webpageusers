import { Router } from 'express';
import { LandingPage } from './components/LandingPage';
import { PageLogin } from './components/PageLogin';
import { ListRoutes } from './routes/Routes';

function App() {
  return (
    <ListRoutes/>
  );
}

export default App;
