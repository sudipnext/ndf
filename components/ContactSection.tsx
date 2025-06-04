'use client';

import type React from 'react';
import { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: '',
    ndaFirst: false,
    frontendTech: '',
    backendTech: '',
    projectType: '',
    hearAbout: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const target = e.target as HTMLInputElement;
      setFormData(prev => ({
        ...prev,
        [name]: target.checked
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <section id="discover-us" className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          

          <h2 className="text-4xl lg:text-5xl font-bold text-[#0a1e2d] mb-4">
            Making business software that works.{' '}
            <span className="text-primary">Let's talk.</span>
          </h2>
        </div>

        {/* Contact Form */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg">
            <h3 className="text-2xl font-bold text-[#0a1e2d] mb-8">
              Make an appointment
            </h3>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Left Column */}
                <div className="space-y-6">
                  {/* Full Name */}
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                      Full name*
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#18ab6f] focus:border-transparent outline-none transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email*
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email address"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#18ab6f] focus:border-transparent outline-none transition-colors"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Your message*
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Write your message here..."
                      rows={4}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#18ab6f] focus:border-transparent outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* NDA Checkbox */}
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="ndaFirst"
                      name="ndaFirst"
                      checked={formData.ndaFirst}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-primary focus:ring-[#18ab6f] border-gray-300 rounded"
                    />
                    <label htmlFor="ndaFirst" className="ml-2 text-sm text-gray-700">
                      I want to sign an NDA first
                    </label>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  {/* Frontend Technology */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Preferable front-end technology
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {['Angular', 'React', 'Vue', 'Other'].map((tech) => (
                        <label key={tech} className="flex items-center">
                          <input
                            type="radio"
                            name="frontendTech"
                            value={tech}
                            checked={formData.frontendTech === tech}
                            onChange={handleInputChange}
                            className="h-4 w-4 text-primary focus:ring-[#18ab6f] border-gray-300"
                          />
                          <span className="ml-2 text-sm text-gray-700">{tech}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Backend Technology */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Preferable back-end technology
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {['Node.JS', 'PHP', 'Java', '.Net(C#)', 'Other'].map((tech) => (
                        <label key={tech} className="flex items-center">
                          <input
                            type="radio"
                            name="backendTech"
                            value={tech}
                            checked={formData.backendTech === tech}
                            onChange={handleInputChange}
                            className="h-4 w-4 text-primary focus:ring-[#18ab6f] border-gray-300"
                          />
                          <span className="ml-2 text-sm text-gray-700">{tech}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Project Type */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      What would you like to do?
                    </label>
                    <div className="grid grid-cols-1 gap-3">
                      {['New idea', 'Ongoing project', 'Other'].map((type) => (
                        <label key={type} className="flex items-center">
                          <input
                            type="radio"
                            name="projectType"
                            value={type}
                            checked={formData.projectType === type}
                            onChange={handleInputChange}
                            className="h-4 w-4 text-primary focus:ring-[#18ab6f] border-gray-300"
                          />
                          <span className="ml-2 text-sm text-gray-700">{type}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* How did you hear */}
                  <div>
                    <label htmlFor="hearAbout" className="block text-sm font-medium text-gray-700 mb-2">
                      How did you hear about us?
                    </label>
                    <input
                      type="text"
                      id="hearAbout"
                      name="hearAbout"
                      value={formData.hearAbout}
                      onChange={handleInputChange}
                      placeholder="How did you hear about us?"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#18ab6f] focus:border-transparent outline-none transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Guarantee and Submit */}
              <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0 pt-6">
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-4 h-4 rounded-full NDF-blue mr-2 flex items-center justify-center">
                    <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  We guarantee 100% confidentiality
                </div>

                <button
                  type="submit"
                  className="bg-[#0a1e2d] text-white px-8 py-4 rounded-full font-medium hover:bg-[#0a1e2d]/90 transition-colors duration-200"
                >
                  send your message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
