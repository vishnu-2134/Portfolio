import React from 'react';
import { EDUCATION_DATA } from '../constants';
import { SectionTitle } from './SectionTitle';
import { GraduationCap } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionTitle title="Education" subtitle />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {EDUCATION_DATA.map((edu) => (
            <div key={edu.id} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:border-blue-100 transition-colors group">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors">
                   <GraduationCap size={24} />
                </div>
                <span className="text-xs font-bold text-slate-400 tracking-wider uppercase">{edu.period}</span>
              </div>
              
              <h3 className="text-xl font-bold text-primary mb-1">{edu.degree}</h3>
              <h4 className="text-sm font-medium text-slate-500 mb-4">{edu.institution}</h4>
              
              <p className="text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                {edu.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};