import React from 'react';

interface SectionProps {
  title?: string;
  subtitle?: string;
  id: string;
  backgroundColor?: string;
  height?: string;
  content?: JSX.Element;
}

export const Section = ({
  title,
  subtitle,
  id,
  backgroundColor,
  height,
  content
}: SectionProps): JSX.Element => {
  return (
    <section
      style={{
        backgroundColor: backgroundColor ?? 'white',
        height: height ?? '100vh'
      }}
    >
      <div className='section-content' id={id}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
        {content}
      </div>
    </section>
  );
};

export default Section;
