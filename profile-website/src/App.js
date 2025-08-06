import React from 'react';
import Layout from './components/Layout';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  const skills = ['JavaScript', 'React', 'HTML', 'CSS', 'Node.js', 'Git', 'Canva'];

  return (
    <Layout>
      <Header name="Quarrtul Ain" title="Frontend Developer" />
      <About description="I am a dedicated and enthusiastic frontend developer with a strong foundation in web technologies like HTML, CSS, JavaScript, and React. I recently completed a frontend development internship at HindukushSoft Technologies, where I had the opportunity to work on real-world projects and gain hands-on experience in building responsive and user-friendly interfaces. During my time there, I improved my skills in React components, and web performance optimization. I am passionate about creating clean, efficient, and accessible web applications that deliver great user experiences." />
      <Skills skillsList={skills} />
      <Contact />
    </Layout>
  );
}

export default App;


