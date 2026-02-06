import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  slug: string;
  title: string;
  category?: string;
  image: string;
  index?: number;
  aspect?: 'square' | 'portrait' | 'landscape' | 'wide';
}

const aspectClasses = {
  square: 'aspect-square',
  portrait: 'aspect-[3/4]',
  landscape: 'aspect-[4/3]',
  wide: 'aspect-[16/9]',
};

const ProjectCard = ({ 
  slug, 
  title, 
  image, 
  index = 0,
  aspect = 'landscape' 
}: ProjectCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1] 
      }}
    >
      <Link to={`/work/${slug}`} className="group block">
        {/* Image Plate */}
        <div className={`image-plate ${aspectClasses[aspect]}`}>
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Title - Minimal */}
        <h3 className="mt-5 font-display text-display-sm italic text-foreground group-hover:text-accent transition-colors duration-500">
          {title}
        </h3>
      </Link>
    </motion.article>
  );
};

export default ProjectCard;
