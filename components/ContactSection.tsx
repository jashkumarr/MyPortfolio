
import React, { useState, useEffect } from 'react';
import SectionTitle from './SectionTitle';

// Declare the emailjs global object loaded from the script in index.html
declare const emailjs: any;

const ContactSection: React.FC = () => {
  // Initialize EmailJS SDK when the component mounts
  useEffect(() => {
    if (typeof emailjs !== 'undefined') {
      emailjs.init({
        publicKey: "D7tqYPDzIKdA6YqHs", // Public Key from user prompt
      });
    }
  }, []);

  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    const { from_name, from_email, subject, message } = formData;

    if (from_name.trim().length < 2) newErrors.from_name = 'Name must be at least 2 characters.';
    if (!from_email.trim()) {
      newErrors.from_email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(from_email)) {
      newErrors.from_email = 'Email is invalid.';
    }
    if (subject.trim() === '') newErrors.subject = 'Subject is required.';
    if (message.trim().length < 10) newErrors.message = 'Message must be at least 10 characters.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);
    
    const serviceID = 'service_jcm31e9'; // Service ID from user prompt
    const templateID = 'template_j1r9jlv'; // Template ID from user prompt

    const templateParams = {
        from_name: formData.from_name,
        from_email: formData.from_email,
        subject: formData.subject,
        message: formData.message,
        reply_to: formData.from_email, // Sets Reply-To header for direct replies
    };

    try {
      await emailjs.send(serviceID, templateID, templateParams);
      
      setSubmitStatus('success');
      setFormData({ from_name: '', from_email: '', subject: '', message: '' });
      setErrors({});

    } catch (err) {
      setSubmitStatus('error');
      console.error('FAILED...', err);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 6000);
    }
  };

  const contactInfo = [
    { icon: 'fa-solid fa-envelope', text: 'jaswanthpandi0@gmail.com', href: 'mailto:jaswanthpandi0@gmail.com' },
    { icon: 'fa-solid fa-phone', text: '+91 8341793968', href: 'tel:+918341793968' },
    { icon: 'fa-solid fa-map-marker-alt', text: 'Andhra Pradesh, India', href: '#' },
  ];

  return (
    <section id="contact" className="min-h-screen flex flex-col justify-center py-16 md:py-20">
      <SectionTitle title="Contact Me" subtitle="Let's build something together" />
      <div className="grid md:grid-cols-5 gap-12">
        {/* Left Column: Contact Info */}
        <div className="md:col-span-2 reveal-on-scroll">
          <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
          <p className="text-slate-400 mb-8">
            I'm actively looking for new opportunities and collaborations. Whether you have a question or just want to say hi, my inbox is always open!
          </p>
          <ul className="space-y-6">
            {contactInfo.map(item => (
              <li key={item.text}>
                <a href={item.href} className="flex items-center group">
                  <span className="w-12 h-12 flex items-center justify-center bg-slate-900/60 rounded-full mr-4 text-cyan-400 transition-all duration-300 group-hover:bg-cyan-500 group-hover:text-white group-hover:scale-110">
                    <i className={item.icon}></i>
                  </span>
                  <span className="text-slate-300 break-all transition-colors duration-300 group-hover:text-cyan-300">{item.text}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Right Column: Form */}
        <div className="md:col-span-3 reveal-on-scroll">
          <div className="bg-slate-900/40 backdrop-blur-sm rounded-lg p-6 sm:p-8 border border-slate-800/30 shadow-lg">
            <form onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="contact-name" className="sr-only">Your Name</label>
                  <div className="contact-input-group">
                    <input id="contact-name" type="text" name="from_name" placeholder="Your Name *" value={formData.from_name} onChange={handleChange} required aria-required="true" aria-invalid={!!errors.from_name} aria-describedby={errors.from_name ? 'name-error' : undefined} className="form-input w-full p-3 bg-slate-900/60 rounded-md border border-slate-800/30 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
                    <i className="fa-solid fa-user"></i>
                  </div>
                  {errors.from_name && <p id="name-error" className="text-red-400 text-sm mt-1">{errors.from_name}</p>}
                </div>
                <div>
                  <label htmlFor="contact-email" className="sr-only">Your Email</label>
                  <div className="contact-input-group">
                    <input id="contact-email" type="email" name="from_email" placeholder="Your Email *" value={formData.from_email} onChange={handleChange} required aria-required="true" aria-invalid={!!errors.from_email} aria-describedby={errors.from_email ? 'email-error' : undefined} className="form-input w-full p-3 bg-slate-900/60 rounded-md border border-slate-800/30 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
                    <i className="fa-solid fa-at"></i>
                  </div>
                  {errors.from_email && <p id="email-error" className="text-red-400 text-sm mt-1">{errors.from_email}</p>}
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="contact-subject" className="sr-only">Subject</label>
                <div className="contact-input-group">
                  <input id="contact-subject" type="text" name="subject" placeholder="Subject *" value={formData.subject} onChange={handleChange} required aria-required="true" aria-invalid={!!errors.subject} aria-describedby={errors.subject ? 'subject-error' : undefined} className="form-input w-full p-3 bg-slate-900/60 rounded-md border border-slate-800/30 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
                  <i className="fa-solid fa-file-lines"></i>
                </div>
                {errors.subject && <p id="subject-error" className="text-red-400 text-sm mt-1">{errors.subject}</p>}
              </div>
              <div className="mb-6">
                <label htmlFor="contact-message" className="sr-only">Your Message</label>
                <div className="contact-input-group">
                  <textarea id="contact-message" name="message" placeholder="Your Message *" rows={5} value={formData.message} onChange={handleChange} required aria-required="true" aria-invalid={!!errors.message} aria-describedby={errors.message ? 'message-error' : undefined} className="form-input w-full p-3 bg-slate-900/60 rounded-md border border-slate-800/30 focus:outline-none focus:ring-2 focus:ring-cyan-500"></textarea>
                  <i className="fa-solid fa-paper-plane top-6"></i>
                </div>
                {errors.message && <p id="message-error" className="text-red-400 text-sm mt-1">{errors.message}</p>}
              </div>
              <button type="submit" disabled={isSubmitting} className="w-full py-3 px-6 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-md hover:opacity-90 transition-opacity duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3">
                {isSubmitting ? <span className="spinner"></span> : <i className="fa-solid fa-paper-plane"></i>}
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              
              {submitStatus && (
                <div role="alert" className={`mt-4 p-3 text-center rounded-md form-message-animate ${
                  submitStatus === 'success' ? 'bg-green-600/20 text-green-300' : 'bg-red-600/20 text-red-300'
                }`}>
                  {submitStatus === 'success' ? 'Thank you! Your message has been sent successfully.' : 'Oops! Something went wrong. Please try again.'}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
