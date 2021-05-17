import React, { useRef } from 'react';
import './form.css';

export default function Form({ newQuery }) {
  const description = useRef();
  const location = useRef();

  return (
    <div className="form">
      <form action="">
        <input ref={description} type="text" placeholder="Job Description" />
        <br />
        <input ref={location} type="text" placeholder="Location" />
        <br />
        <button
          onClick={() => newQuery(description.current.value, 'usa')}
          type="button"
        >
          SEARCH
        </button>
      </form>
    </div>
  );
}
