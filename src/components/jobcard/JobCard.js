import React from 'react';
import './jobcard.css';

export default function JobCard({ data }) {
  return (
    <div className="jobcard">
      <a href={data.company_url}>
        <img src={data.company_logo} alt="" />
      </a>

      <h3>Title: {data.title}</h3>
      <h3>Company: {data.company}</h3>
      <h4>Type: {data.type}</h4>
      <h4>Location: {data.location}</h4>

      <a href={data.url}>Apply now</a>
      {/* <div dangerouslySetInnerHTML={{ __html: `${data.description}` }} /> */}
      <div dangerouslySetInnerHTML={{ __html: `${data.how_to_apply}` }} />
    </div>
  );
}
