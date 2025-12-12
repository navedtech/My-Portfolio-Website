import React, { useState } from 'react';
// The form logic is now managed by React state, not raw JS

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [alert, setAlert] = useState({ show: false, message: '', type: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (!name || !email || !message) {
      showAlert('Please fill all fields', 'danger');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showAlert('Enter a valid email', 'danger');
      return;
    }

    // --- Demo Success Logic ---
    showAlert('Thanks — your message was sent (demo).', 'success');
    setFormData({ name: '', email: '', message: '' }); // Reset form
    // In a real app, you would use axios/fetch here to send data to a backend/API
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', message: '' });
    setAlert({ show: false, message: '', type: '' });
  };

  const showAlert = (text, type) => {
    setAlert({ show: true, message: text, type: type });
    setTimeout(() => setAlert({ show: false, message: '', type: '' }), 4500);
  };

  return (
    <section id="contact" className="section section-contact mt-4">
      <div className="container-narrow">
        <div className="row g-4">
          <div className="col-lg-6 reveal">
            <h2>Contact</h2>
            <p className="small-muted">Want to work together? Send a message and I'll get back to you.</p>

            <div className="card-glass p-4">
              <form onSubmit={handleSubmit} noValidate>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input id="name" className="form-control" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input id="email" type="email" className="form-control" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea id="message" className="form-control" rows="5" value={formData.message} onChange={handleChange} required></textarea>
                </div>
                <div className="d-flex gap-2">
                  <button className="btn btn-accent" type="submit">Send message</button>
                  <button type="button" onClick={handleReset} className="btn btn-outline-light">Reset</button>
                </div>
                {alert.show && (
                  <div className={`mt-3 alert alert-${alert.type}`} role="alert">
                    {alert.message}
                  </div>
                )}
              </form>
            </div>
          </div>

          <div className="col-lg-6 reveal">
            <div className="card-glass p-4 h-100">
              <h5 className="mb-3">Other ways to reach</h5>
              <p className="small-muted">Email: getnavedkhan01@gmail.com</p>
              <p className="small-muted">LinkedIn · GitHub · Twitter</p>

              <div className="mt-4">
                <a href="mailto:getnavedkhan01@gmail.com" className="btn btn-outline-light me-2">Email me</a>
                <a href="#" className="btn btn-outline-light">Schedule</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;