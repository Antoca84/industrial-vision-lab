import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import Lightbox from '@/components/Lightbox';

import project01 from '@/assets/project-01.jpg';
import project02 from '@/assets/project-02.jpg';
import project03 from '@/assets/project-03.jpg';

// Project data - visual essay structure
const projectsData: Record<string, {
  title: string;
  image: string;
  statement: string;
  interpretation: string;
  meaning: string;
}> = {
  'cellular-interaction-study': {
    title: 'Cellular Interactions',
    image: project01,
    statement: 'A visual interpretation of molecular choreography — the precise, elegant movements that define cellular communication.',
    interpretation: 'We approached this not as a diagram to be decoded, but as a moment to be witnessed. The composition captures the instant of molecular recognition, rendered with the visual tension of a graphic novel panel.',
    meaning: 'The image argues that scientific processes are not merely mechanisms to be explained, but phenomena to be experienced visually. Accuracy serves expression; expression serves understanding.',
  },
  'molecular-mechanism-visualization': {
    title: 'Molecular Mechanisms',
    image: project02,
    statement: 'The architecture of biological machines — structures that operate at scales we cannot see, rendered in forms we can comprehend.',
    interpretation: 'Rather than mapping data to standardized visualizations, we developed a visual language specific to this research. Each compositional choice — color, lighting, depth — carries interpretive weight.',
    meaning: 'These images exist between scientific illustration and conceptual art. They communicate rigor while acknowledging that all representation involves interpretation.',
  },
  'protein-structure-interpretation': {
    title: 'Protein Structures',
    image: project03,
    statement: 'Structural data translated into visual presence — from coordinates to form, from measurement to meaning.',
    interpretation: 'Cryo-EM data provides extraordinary structural resolution. Our role is not to reproduce this data, but to interpret it — to make visible the qualities that numbers alone cannot convey.',
    meaning: 'A protein structure is not just geometry. It is function, evolution, disease, and cure. The image must hold these meanings simultaneously.',
  },
};

const projectOrder = [
  'cellular-interaction-study',
  'molecular-mechanism-visualization', 
  'protein-structure-interpretation',
];

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const project = slug ? projectsData[slug] : null;

  if (!project) {
    return <Navigate to="/work" replace />;
  }

  const currentIndex = projectOrder.indexOf(slug || '');
  const nextProject = currentIndex < projectOrder.length - 1 ? projectOrder[currentIndex + 1] : null;

  return (
    <Layout>
      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        imageSrc={project.image}
        imageAlt={project.title}
      />

      {/* Hero - The Image is Primary */}
      <section className="relative min-h-screen">
        <div 
          className="absolute inset-0 cursor-zoom-in"
          onClick={() => setLightboxOpen(true)}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
        </div>

        {/* Back link - subtle */}
        <div className="absolute top-24 md:top-32 left-6 md:left-12 lg:left-20 z-10">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-caption uppercase tracking-widest text-foreground/60 hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-3 h-3" />
            Works
          </Link>
        </div>

        {/* Title - Floating */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="absolute bottom-12 left-6 md:bottom-20 md:left-12 lg:left-20 z-10"
        >
          <h1 className="font-display text-display-xl italic text-foreground">
            {project.title}
          </h1>
        </motion.div>
      </section>

      {/* Visual Essay - Sparse, Intentional */}
      <section className="section-massive">
        <div className="container-offset-left">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            {/* Statement */}
            <p className="font-display text-display-md italic text-foreground mb-16 leading-snug">
              {project.statement}
            </p>

            {/* Interpretation */}
            <div className="manifesto-block mb-16">
              <p className="text-body-md text-muted-foreground leading-relaxed">
                {project.interpretation}
              </p>
            </div>

            {/* Meaning */}
            <p className="text-body-lg text-foreground max-w-xl">
              {project.meaning}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Next Project - Minimal */}
      {nextProject && (
        <section className="border-t border-border">
          <Link
            to={`/work/${nextProject}`}
            className="group block"
          >
            <div className="container-lab py-12 md:py-16">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-caption uppercase tracking-widest text-muted-foreground block mb-2">
                    Next
                  </span>
                  <span className="font-display text-display-sm italic group-hover:text-accent transition-colors duration-500">
                    {projectsData[nextProject].title}
                  </span>
                </div>
                <span className="text-muted-foreground group-hover:translate-x-2 transition-transform duration-500">
                  →
                </span>
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* Back to Works */}
      <section className="border-t border-border">
        <div className="container-lab py-8">
          <Link
            to="/work"
            className="link-subtle text-caption uppercase tracking-widest text-muted-foreground"
          >
            All Works
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectDetail;
