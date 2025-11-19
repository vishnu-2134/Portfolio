import React, { useState } from 'react';
import { EXPERIENCE_DATA } from '../constants';
import { SectionTitle } from './SectionTitle';
import { Briefcase, Eye, FileCheck } from 'lucide-react';
import { ImageModal } from './ImageModal';

export const Experience: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<{url: string, title: string} | null>(null);

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionTitle title="Experience & Certifications" subtitle />
        
        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
          {EXPERIENCE_DATA.map((exp) => (
            <div key={exp.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              {/* Icon */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-100 group-hover:bg-blue-50 text-slate-500 group-hover:text-blue-600 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-colors">
                <Briefcase size={18} />
              </div>
              
              {/* Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                  <h3 className="font-bold text-lg text-primary">{exp.role}</h3>
                  <time className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full mt-1 sm:mt-0 w-fit">
                    {exp.period}
                  </time>
                </div>
                <div className="text-sm font-semibold text-slate-500 mb-3">{exp.company}</div>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {exp.description}
                </p>
                
                {exp.certificate && (
                  <button 
                    onClick={() => setSelectedCert({ url: exp.certificate!, title: exp.role })}
                    className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 hover:bg-blue-50 px-3 py-2 rounded-lg transition-colors border border-blue-100 hover:border-blue-200"
                  >
                    <FileCheck size={16} />
                    View Certificate
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <ImageModal 
        isOpen={!!selectedCert} 
        onClose={() => setSelectedCert(null)} 
        imageUrl={selectedCert?.url || ''} 
        altText={selectedCert?.title || 'Certificate'} 
      />
    </section>
  );
};