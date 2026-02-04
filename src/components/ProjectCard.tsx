import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  slug: string;
  title: string;
  category: string;
  image: string;
  index?: number;
}

const ProjectCard = ({ slug, title, category, image, index = 0 }: ProjectCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1] 
      }}
    >
      <Link to={`/work/${slug}`} className="group block">
        {/* Image Container */}
        <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-800 ease-out-expo group-hover:scale-105"
          />
          {/* Subtle overlay on hover */}
          <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-400" />
        </div>

        {/* Text Content */}
        <div className="mt-6">
          <span className="text-caption uppercase tracking-widest text-muted-foreground">
            {category}
          </span>
          <h3 className="mt-2 text-display-sm font-display group-hover:text-primary transition-colors duration-400">
            {title}
          </h3>
        </div>
      </Link>
    </motion.article>
  );
};

export default ProjectCard;
