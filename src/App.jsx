import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AdminPage from './pages/AdminPage';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" exact component={HomePage} />
          <Route path="/admin" component={AdminPage} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

