import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function IssuesList() {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    fetchIssues();
  }, []);

  const fetchIssues = async () => {
    try {
      const response = await axios.get(
        'https://api.github.com/repos/facebook/react/issues?state=open'
      );
      setIssues(response.data);
      console.log(response.data)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Github Open Issues</h1>
      <ul>
        {issues.map((issue) => (
          <li key={issue.id}>
            <Link to={`/issue/${issue.number}`}>
              <h3>{issue.title}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default IssuesList;
