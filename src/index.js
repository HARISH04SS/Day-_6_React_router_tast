import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import FullStack from './components/FullStack';
import DataScience from './components/DataScience';
import CyberSecurity from './components/CyberSecurity';
import Career from './components/Career';
import './index.css';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/fullstack" element={<FullStack />} />
      <Route path="/datascience" element={<DataScience />} />
      <Route path="/cybersecurity" element={<CyberSecurity />} />
      <Route path="/career" element={<Career />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);
