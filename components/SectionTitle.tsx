import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: boolean;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <div className="mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">{title}</h2>
      {subtitle && <div className="h-1 w-20 bg-blue-600 rounded-full"></div>}
    </div>
  );
};