import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 2000);
  };

  return (
    <section className="contact">
      <h2>Contact Me</h2>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <input name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
          <input name="email" type="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
          <textarea name="message" rows="5" placeholder="Your Message" value={formData.message} onChange={handleChange} required />
          <button type="submit">Send Message</button>
        </form>
      ) : (
        <div className="thank-you">Thank you! I’ll get back to you soon.</div>
      )}
    </section>
  );
}

