import './App.css';
import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import Header from './components/header/Header.js';
import Form from './components/form/Form.js';
import JobCard from './components/jobcard/JobCard';

function App() {
  const [dataReady, setDataReady] = useState(false);
  const jobs = useRef(null);

  const newQuery = (description, location) => {
    setDataReady(false);
    axios
      .get(`./positions.json?description=${description}&location=${location}`)
      .then((res) => {
        jobs.current = res.data;
        console.log(jobs.current[0]);
        setDataReady(true);
      })
      .catch(() => {
        //console.log('Data alınmadı');
      });
  };

  useEffect(() => {
    //newQuery('engineer', 'usa');
  }, []);

  return (
    <div className="App">
      <Header />
      <Form newQuery={newQuery} />
      {dataReady && jobs.current.map((item) => <JobCard data={item} />)}
    </div>
  );
}

export default App;
