'use client';

import { useState } from 'react';
import { Form, FormGroup, FormInput, FormTextarea, Button } from 'shards-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lakukan sesuatu dengan data form, seperti mengirim ke server
    console.log('Form data:', formData);
  };

  return (
    <section className="contact-form">
      <h2>Contact Us</h2>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <label htmlFor="name">Name:</label>
          <FormInput
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="email">Email:</label>
          <FormInput
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="message">Message:</label>
          <FormTextarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <Button type="submit">Send</Button>
      </Form>
    </section>
  );
}