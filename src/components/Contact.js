import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

const initialForm = { name: '', email: '', message: '' };

const contactLinks = [
  {
    label: 'Email',
    value: 'getnavedkhan01@gmail.com',
    icon: 'bi-envelope-fill',
    href: 'mailto:getnavedkhan01@gmail.com',
  },
  {
    label: 'LinkedIn',
    value: 'naved-khan',
    icon: 'bi-linkedin',
    href: 'https://www.linkedin.com/in/naved-khan-57aa00287',
  },
  {
    label: 'GitHub',
    value: 'navedtech',
    icon: 'bi-github',
    href: 'https://github.com/navedtech',
  },
  {
    label: 'Location',
    value: 'Sultanpur, Uttar Pradesh, India',
    icon: 'bi-geo-alt-fill',
    href: null,
  },
];

const Contact = () => {
  const [formData, setFormData] = useState(initialForm);
  const [alert, setAlert] = useState({ show: false, message: '', type: '' });
  const [sending, setSending] = useState(false);

  const showAlert = (message, type) => {
    setAlert({ show: true, message, type });
    setTimeout(() => setAlert({ show: false, message: '', type: '' }), 5000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
     console.log('ENV check:', !!SERVICE_ID, !!TEMPLATE_ID, !!PUBLIC_KEY);   // <- ye line yahan
    const name = formData.name.trim();
    const email = formData.email.trim();
    const message = formData.message.trim();

    if (!name || !email || !message) {
      showAlert('Please fill all fields.', 'danger');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showAlert('Please enter a valid email address.', 'danger');
      return;
    }
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      showAlert('Contact form is not configured yet.', 'danger');
      return;
    }

    setSending(true);
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        { from_name: name, from_email: email, message },
        { publicKey: PUBLIC_KEY }
      );
      showAlert("Thanks! Your message has been sent. I'll get back to you soon.", 'success');
      setFormData(initialForm);
    } catch (error) {
      console.error('EmailJS error:', error);
      showAlert('Something went wrong. Please try again or email me directly.', 'danger');
    } finally {
      setSending(false);
    }
  };

  const handleReset = () => {
    setFormData(initialForm);
    setAlert({ show: false, message: '', type: '' });
  };

  return (
    <section id="contact" className="section section-contact mt-4">
      <div className="container-narrow">
        <h2 className="reveal">
          Get in <span className="accent">touch</span>
        </h2>
        <p className="small-muted reveal">
          Want to work together or have a question? Send a message and I'll get back to you.
        </p>

        <div className="row g-4 mt-1">
          {/* Form */}
          <div className="col-lg-7 reveal">
            <div className="card-glass p-4 h-100">
              <form onSubmit={handleSubmit} noValidate>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                      id="name"
                      className="form-control"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      disabled={sending}
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                      id="email"
                      type="email"
                      className="form-control"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      disabled={sending}
                    />
                  </div>
                  <div className="col-12">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea
                      id="message"
                      className="form-control"
                      rows="6"
                      placeholder="Tell me about your project or opportunity..."
                      value={formData.message}
                      onChange={handleChange}
                      disabled={sending}
                    ></textarea>
                  </div>
                </div>

                <div className="d-flex gap-2 mt-4">
                  <button className="btn btn-accent" type="submit" disabled={sending}>
                    {sending ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Sending...
                      </>
                    ) : (
                      <>
                        <i className="bi bi-send-fill me-2"></i>Send message
                      </>
                    )}
                  </button>
                  <button type="button" onClick={handleReset} className="btn btn-outline-light" disabled={sending}>
                    Reset
                  </button>
                </div>

                {alert.show && (
                  <div className={`mt-3 alert alert-${alert.type}`} role="alert">
                    {alert.message}
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Contact info */}
          <div className="col-lg-5 reveal">
            <div className="card-glass p-4 h-100">
              <h5 className="mb-4">Other ways to reach me</h5>

              <div className="d-flex flex-column gap-3">
                {contactLinks.map((item) => {
                  const content = (
                    <>
                      <span className="contact-icon">
                        <i className={`bi ${item.icon}`}></i>
                      </span>
                      <span>
                        <span className="small-muted d-block">{item.label}</span>
                        <span className="fw-medium">{item.value}</span>
                      </span>
                    </>
                  );

                  return item.href ? (
                    <a
                      key={item.label}
                      className="contact-item"
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel="noreferrer"
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={item.label} className="contact-item">
                      {content}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;