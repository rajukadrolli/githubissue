import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IssuesList from './IssuesList';
import IssueDetails from './IssueDetails';

function App() {
  return (
    <Router>
    <Routes>  
        <Route  path="/" element={<IssuesList />}/>
        <Route  path="/issue/:issueNumber" element={<IssueDetails />}/>
        </Routes>
    </Router>
  );
}

export default App;
