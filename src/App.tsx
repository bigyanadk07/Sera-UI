import { Routes, Route } from 'react-router-dom';
import Layout from '@/components/Layout';
import Home from '@/pages/Home';
import Components from '@/pages/Components';
import ComponentDetails from '@/pages/ComponentDetails';
import Documentation from '@/pages/Documentation';
import About from '@/pages/About';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="components" element={<Components />}>
          <Route path=":id" element={<ComponentDetails />} />
        </Route>
        <Route path="documentation" element={<Documentation />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;