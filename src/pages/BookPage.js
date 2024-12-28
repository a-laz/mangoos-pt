import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../style/BookPage.css';
import Navbar from '../components/Navbar';

function BookPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: '',
    serviceType: '',
    insurance: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceID = 'service_a85wl4i';
    const templateID = 'template_d55tzzm';
    const userID = 'Y4y1wspplfi6sQLTl';

    emailjs.send(serviceID, templateID, formData, userID)
      .then((result) => {
          console.log('Email successfully sent!', result.text);
          setSubmitSuccess(true);
          // Reset form
          setFormData({
            name: '',
            email: '',
            phone: '',
            preferredDate: '',
            preferredTime: '',
            serviceType: '',
            insurance: '',
            message: ''
          });
      }, (error) => {
          console.log('Failed to send email:', error.text);
          setSubmitSuccess(false);
      })
      .finally(() => {
          setIsSubmitting(false);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className="book-page">
      <Navbar />
      <div className="book-content">
        <div className="book-header">
          <h1>Book an Appointment</h1>
          <p>Take the first step towards recovery. Schedule your consultation today.</p>
          {submitSuccess === true && <p className="success-message">Your appointment has been booked successfully!</p>}
          {submitSuccess === false && <p className="error-message">There was an error booking your appointment. Please try again.</p>}
        </div>

        <div className="booking-container">
          <div className="booking-info">
            <h2>Before Your Visit</h2>
            <ul>
              <li>
                <i className="fas fa-clipboard-list"></i>
                <span>Please bring your insurance card and photo ID</span>
              </li>
              <li>
                <i className="fas fa-file-medical"></i>
                <span>Any relevant medical records or imaging results</span>
              </li>
              <li>
                <i className="fas fa-tshirt"></i>
                <span>Wear comfortable, loose-fitting clothing</span>
              </li>
              <li>
                <i className="fas fa-clock"></i>
                <span>Arrive 15 minutes before your appointment</span>
              </li>
            </ul>

            <div className="contact-info">
              <h3>Questions?</h3>
              <p>Call us at: (347) 642-3043</p>
              <p>Email: mangoospt.astoria@gmail.com</p>
            </div>
          </div>

          <form className="booking-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="preferredDate">Preferred Date *</label>
                <input
                  type="date"
                  id="preferredDate"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="preferredTime">Preferred Time *</label>
                <select
                  id="preferredTime"
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a time</option>
                  <option value="morning">Morning (9AM - 12PM)</option>
                  <option value="afternoon">Afternoon (12PM - 4PM)</option>
                  <option value="evening">Evening (4PM - 7PM)</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="serviceType">Type of Service *</label>
              <select
                id="serviceType"
                name="serviceType"
                value={formData.serviceType}
                onChange={handleChange}
                required
              >
                <option value="">Select a service</option>
                <option value="orthopedic">Orthopedic Care</option>
                <option value="musculoskeletal">Musculoskeletal Therapy</option>
                <option value="athletic">Athletic Recovery</option>
                <option value="neurological">Neurological Rehabilitation</option>
                <option value="evaluation">Initial Evaluation</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="insurance">Insurance Provider</label>
              <input
                type="text"
                id="insurance"
                name="insurance"
                value={formData.insurance}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Additional Information</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Please share any specific concerns or conditions we should know about"
              ></textarea>
            </div>

            <button type="submit" className="submit-button" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Schedule Appointment'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BookPage;
