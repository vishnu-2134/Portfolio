import React from 'react';
import { SKILLS_DATA } from '../constants';
import { SectionTitle } from './SectionTitle';
import { CheckCircle2 } from 'lucide-react';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionTitle title="Skills" subtitle />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILLS_DATA.map((skillGroup) => (
            <div key={skillGroup.category} className="space-y-4">
              <h3 className="text-lg font-bold text-primary border-b border-slate-100 pb-2">
                {skillGroup.category}
              </h3>
              <ul className="space-y-3">
                {skillGroup.items.map((skill) => (
                  <li key={skill} className="flex items-center gap-3 text-slate-600 hover:text-primary transition-colors">
                    <CheckCircle2 size={16} className="text-green-500" />
                    <span className="text-sm font-medium">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-900 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
           <div className="relative z-10">
             <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Interested in working together?</h3>
             <p className="text-blue-200 mb-8 max-w-2xl mx-auto">
               I'm always open to discussing product design work or partnership opportunities.
             </p>
             <a href="#contact" className="inline-block px-8 py-3 bg-white text-blue-900 font-bold rounded-full hover:bg-blue-50 transition-colors">
               Let's Talk
             </a>
           </div>
        </div>
      </div>
    </section>
  );
};