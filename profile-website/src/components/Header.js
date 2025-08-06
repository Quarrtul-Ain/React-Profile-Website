import React from 'react';
import avatar from '../assets/avatar.PNG';

export default function Header({ name, title }) {
  return (
    <header className="header">
      <img src={avatar} alt={`${name} avatar`} className="avatar" />
      <div className="intro">
        <h1>{name}</h1>
        <h3>{title}</h3>
      </div>
    </header>
  );
}

