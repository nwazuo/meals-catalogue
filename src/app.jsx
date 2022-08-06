import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout';
import Page404 from './routes/404';
import Home from './routes/home';
import Meal from './routes/meal';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meal/:mealId" element={<Meal />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Layout>
  );
}

export default App;
