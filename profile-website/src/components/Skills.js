import React from 'react';

export default function Skills({ skillsList }) {
  return (
    <section className="skills">
      <h2>My Skills</h2>
      <div className="skills-grid">
        {skillsList.map((skill, i) => (
          <div key={i} className="skill">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

