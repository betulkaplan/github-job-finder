import React from 'react';
import './jobcard.css';

export default function JobCard({ data }) {
  return (
    <div className="jobcard">
      <h3>Company: {data.company}</h3>
      <h4>Type: {data.type}</h4>
      <a href={data.url}>Apply now</a>
    </div>
  );
}
