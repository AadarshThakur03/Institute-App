// App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Dashboard from './Pages/Dashboard/Dashboard';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Default route */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="home1" element={<Home />} />
          {/* Define other routes that should be rendered inside the Dashboard */}
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
