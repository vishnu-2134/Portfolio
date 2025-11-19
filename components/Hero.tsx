import React from 'react';
import { MapPin, Mail, Phone, Linkedin, Github } from 'lucide-react';
import { PROFILE } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section id="about" className="min-h-[60vh] flex items-center pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 w-full">
        <div className="space-y-8 text-center md:text-left">
          <div className="space-y-4">
            <p className="text-blue-600 font-medium tracking-wide uppercase">Hello, I'm</p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-primary leading-tight tracking-tight">
              {PROFILE.name}
            </h1>
            <h2 className="text-xl sm:text-2xl text-gray-600 font-light">{PROFILE.title}</h2>
          </div>
          
          <p className="text-gray-600 leading-relaxed text-lg max-w-2xl mx-auto md:mx-0">
            {PROFILE.about}
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4 justify-center md:justify-start">
            <a href={`mailto:${PROFILE.contact.email}`} className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full hover:bg-slate-800 transition-colors shadow-lg shadow-blue-900/20">
              <Mail size={18} />
              <span>Contact Me</span>
            </a>
            <div className="flex items-center gap-3">
              {PROFILE.contact.linkedin && (
                 <a href={PROFILE.contact.linkedin} target="_blank" rel="noreferrer" className="p-3 bg-white rounded-full text-gray-600 hover:text-blue-600 hover:shadow-md transition-all border border-gray-100">
                   <Linkedin size={20} />
                 </a>
              )}
              {PROFILE.contact.github && (
                 <a href={PROFILE.contact.github} target="_blank" rel="noreferrer" className="p-3 bg-white rounded-full text-gray-600 hover:text-gray-900 hover:shadow-md transition-all border border-gray-100">
                   <Github size={20} />
                 </a>
              )}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 pt-8 text-sm text-gray-500 justify-center md:justify-start border-t border-gray-100 mt-8">
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <Phone size={16} className="text-blue-500" />
              <span>{PROFILE.contact.phone}</span>
            </div>
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <MapPin size={16} className="text-blue-500" />
              <span>{PROFILE.contact.location}</span>
            </div>
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <Mail size={16} className="text-blue-500" />
              <span>{PROFILE.contact.email}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};