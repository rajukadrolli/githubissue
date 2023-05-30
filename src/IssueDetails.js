import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function IssueDetails() {
  const { issueNumber } = useParams();
  const [issue, setIssue] = useState(null);

  useEffect(() => {
    fetchIssue();
  },);

  const fetchIssue = async () => {
    try {
      const response = await axios.get(
        `https://api.github.com/repos/facebook/react/issues/${issueNumber}`

      );
      setIssue(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Issue Details</h2>
      {issue ? (
        <div>
          <h3>{issue.title}</h3>
          <p>{issue.body}</p>
        </div>
      ) : (
        <p>Loading issue...</p>
      )}
    </div>
  );
}

export default IssueDetails;
