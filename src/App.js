import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import AllCourses from './components/AllCourses';
const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">All</Link></li>
          <li><Link to="/fullstack">Full Stack Development</Link></li>
          <li><Link to="/datascience">Data Science</Link></li>
          <li><Link to="/cybersecurity">Cyber Security</Link></li>
          <li><Link to="/career">Career</Link></li>
        </ul>
      </nav>
      <h1>Welcome to the Course Navigation</h1>
      <AllCourses/>
    </div>
  );
};

export default App;
