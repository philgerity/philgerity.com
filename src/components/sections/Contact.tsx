import React, { useState } from 'react';
import { Github, Linkedin, Twitter, Send, Loader2, X, CheckCircle2 } from 'lucide-react';
import { supabase } from '../../lib/supabase';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';
type FormErrors = { [key: string]: string };

const Contact = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<FormStatus>('idle');
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});
  const [errorMessage, setErrorMessage] = useState('');

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case 'name':
        return value.trim().length < 2 ? 'Name must be at least 2 characters' : '';
      case 'email':
        return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? 'Please enter a valid email' : '';
      case 'message':
        return value.trim().length < 10 ? 'Message must be at least 10 characters' : '';
      default:
        return '';
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (touched[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all fields
    const newErrors: FormErrors = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key as keyof typeof formData]);
      if (error) newErrors[key] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setTouched({ name: true, email: true, message: true });
      return;
    }

    setFormStatus('submitting');
    setErrorMessage('');

    try {
      const { error } = await supabase
        .from('contact_messages')
        .insert([formData]);

      if (error) throw error;

      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
      setTouched({});

      // Reset success message and close form after 3 seconds
      setTimeout(() => {
        setFormStatus('idle');
        setShowForm(false);
      }, 3000);

    } catch (error: any) {
      console.error('Error submitting form:', error);
      setFormStatus('error');
      setErrorMessage(error.message || 'Failed to send message. Please try again later.');
    }
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/philgerity',
      hoverColor: 'hover:text-[#333]'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/philgerity/',
      hoverColor: 'hover:text-[#0077b5]'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: 'https://x.com/philgerity',
      hoverColor: 'hover:text-[#1DA1F2]'
    }
  ];

  return (
    <section id="contact" className="section-height py-10 md:py-16 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 section-modern">
        <h2 className="font-serif text-4xl md:text-6xl font-bold text-center mb-16 md:mb-20 text-gray-900">Contact</h2>

        {/* Social Links */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="text-center">
            <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4 text-gray-900">Connect With Me</h3>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              Feel free to reach out through email or connect with me on social media.
            </p>
          </div>

          <div className="flex justify-center space-x-6 md:space-x-8 mb-12">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-600 transition-all duration-300 transform hover:scale-110 ${social.hoverColor}`}
                aria-label={social.name}
              >
                <social.icon className="w-7 h-7 md:w-8 md:h-8" />
              </a>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => setShowForm(true)}
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg text-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Send me an email
            </button>
          </div>
        </div>

        {/* Contact Form Modal */}
        {showForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 animate-fadeIn">
            <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300 scale-100">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold">Send a Message</h3>
                  <button
                    onClick={() => setShowForm(false)}
                    className="text-gray-500 hover:text-gray-700 transform hover:rotate-90 transition-all duration-300"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`w-full px-4 py-2 border rounded-md transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.name && touched.name ? 'border-red-500' : 'border-gray-300'
                        }`}
                      disabled={formStatus === 'submitting'}
                    />
                    {errors.name && touched.name && (
                      <p className="mt-1 text-sm text-red-500 animate-fadeIn">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`w-full px-4 py-2 border rounded-md transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.email && touched.email ? 'border-red-500' : 'border-gray-300'
                        }`}
                      disabled={formStatus === 'submitting'}
                    />
                    {errors.email && touched.email && (
                      <p className="mt-1 text-sm text-red-500 animate-fadeIn">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`w-full px-4 py-2 border rounded-md transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.message && touched.message ? 'border-red-500' : 'border-gray-300'
                        }`}
                      disabled={formStatus === 'submitting'}
                    />
                    {errors.message && touched.message && (
                      <p className="mt-1 text-sm text-red-500 animate-fadeIn">{errors.message}</p>
                    )}
                  </div>

                  {formStatus === 'error' && (
                    <div className="text-red-500 text-sm animate-fadeIn">{errorMessage}</div>
                  )}

                  {formStatus === 'success' && (
                    <div className="flex items-center text-green-500 text-sm animate-fadeIn">
                      <CheckCircle2 className="w-4 h-4 mr-2" />
                      Message sent successfully!
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className={`w-full py-2 px-4 rounded-md transition-all duration-300 flex items-center justify-center
                      ${formStatus === 'submitting'
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-blue-600 hover:bg-blue-700 transform hover:scale-105'
                      } text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
                  >
                    {formStatus === 'submitting' ? (
                      <>
                        <Loader2 className="animate-spin -ml-1 mr-2 h-4 w-4" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;