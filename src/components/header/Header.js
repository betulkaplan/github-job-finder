import React from 'react';
import HeaderPic from '../../assets/header_pic.svg';
import './header.css';

export default function Header() {
  return (
    <div>
      <img src={HeaderPic} alt="" />
      <h1>GITHUB JOB FINDER</h1>
    </div>
  );
}
