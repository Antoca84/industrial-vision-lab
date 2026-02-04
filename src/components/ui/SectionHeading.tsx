import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string | ReactNode;
  align?: 'left' | 'center';
}

const SectionHeading = ({ label, title, description, align = 'left' }: SectionHeadingProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={align === 'center' ? 'text-center' : ''}
    >
      {label && (
        <span className="text-caption uppercase tracking-widest text-muted-foreground mb-4 block">
          {label}
        </span>
      )}
      <h2 className="text-display-md font-display text-balance">
        {title}
      </h2>
      {description && (
        <p className={`mt-6 text-body-lg text-muted-foreground ${align === 'center' ? 'mx-auto' : ''} max-w-2xl`}>
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
