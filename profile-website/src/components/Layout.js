import React from 'react';

export default function Layout({ children }) {
  return (
    <>
      <div className="container">
        {children}
      </div>
      <footer>
        © {new Date().getFullYear()} Quarrtul Ain — Built with React
      </footer>
    </>
  );
}
