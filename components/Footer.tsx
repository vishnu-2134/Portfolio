import React from 'react';
import { PROFILE } from '../constants';
import { Mail, Phone, MapPin, Linkedin, Github, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-slate-900 text-slate-300 py-16 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-slate-800 pb-12 mb-12">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">JITHENDRA V.</h2>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Aspiring Software Engineer focused on Cybersecurity, Cloud Computing, and Data Analytics.
            </p>
          </div>
          
          <div className="space-y-4">
             <h3 className="text-lg font-semibold text-white">Contact Info</h3>
             <ul className="space-y-3 text-sm">
               <li className="flex items-center gap-3">
                 <Phone size={16} className="text-blue-500" />
                 <span>{PROFILE.contact.phone}</span>
               </li>
               <li className="flex items-center gap-3">
                 <Mail size={16} className="text-blue-500" />
                 <a href={`mailto:${PROFILE.contact.email}`} className="hover:text-white transition-colors">
                   {PROFILE.contact.email}
                 </a>
               </li>
               <li className="flex items-center gap-3">
                 <MapPin size={16} className="text-blue-500" />
                 <span>{PROFILE.contact.location}</span>
               </li>
             </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Social Links</h3>
            <div className="flex gap-4">
               {PROFILE.contact.linkedin && (
                  <a 
                    href={PROFILE.contact.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-slate-800 p-3 rounded-lg hover:bg-blue-600 hover:text-white transition-all"
                  >
                    <Linkedin size={20} />
                  </a>
               )}
               {PROFILE.contact.github && (
                  <a 
                    href={PROFILE.contact.github}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-slate-800 p-3 rounded-lg hover:bg-gray-700 hover:text-white transition-all"
                  >
                    <Github size={20} />
                  </a>
               )}
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-4 text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Jithendra Vishnu. All rights reserved.</p>
          <button 
            onClick={scrollToTop}
            className="mt-4 md:mt-0 flex items-center gap-2 hover:text-blue-400 transition-colors"
          >
            Back to Top <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};