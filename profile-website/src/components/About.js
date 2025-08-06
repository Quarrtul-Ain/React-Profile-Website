import React from 'react';

export default function About({ description }) {
  return (
    <section className="about">
      <h2>About Me</h2>
      <p>{description}</p>
    </section>
  );
}

