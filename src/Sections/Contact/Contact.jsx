import React, { useState } from 'react';
import Style from './Contact.module.css';
import Swal from 'sweetalert2';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let formErrors = {};
    let valid = true;

    if (!formData.name.trim()) {
      formErrors.name = 'Name is required';
      valid = false;
    }
    if (!formData.email) {
      formErrors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = 'Email is invalid';
      valid = false;
    }
    if (!formData.message.trim()) {
      formErrors.message = 'Message is required';
      valid = false;
    }

    setErrors(formErrors);
    return valid;
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    if (!validate()) {
      return;
    }

    const formSubmissionData = new FormData(event.target);

    formSubmissionData.append('access_key', 'cb38678a-cf3d-4498-b21a-8367740be3c8');

    const object = Object.fromEntries(formSubmissionData);
    const json = JSON.stringify(object);

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire('Form submission successful', '', 'success');
      setFormData({ name: '', email: '', message: '' }); // Clear form after successful submission
    } else {
      Swal.fire('Form submission failed', '', 'error');
    }
  };

  return (
    <section id="contact" className={Style.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form onSubmit={onSubmit}>
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
           
          />
          {errors.name && <p className={Style.error}>{errors.name}</p>}
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            
          />
          {errors.email && <p className={Style.error}>{errors.email}</p>}
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
         
          ></textarea>
          {errors.message && <p className={Style.error}>{errors.message}</p>}
        </div>
        <input className="hover btn" type="submit" value="Submit" />
      </form>
    </section>
  );
};

export default Contact;
