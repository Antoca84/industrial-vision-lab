import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Layout from '@/components/layout/Layout';

import project01 from '@/assets/project-01.jpg';
import project02 from '@/assets/project-02.jpg';
import project03 from '@/assets/project-03.jpg';

// All projects
const projects = [
  {
    slug: 'cellular-interaction-study',
    title: 'Cellular Interaction Study',
    category: 'Graphic-novel scientific illustration',
    image: project01,
  },
  {
    slug: 'molecular-mechanism-visualization',
    title: 'Molecular Mechanism Visualization',
    category: 'Cinematic biological rendering',
    image: project02,
  },
  {
    slug: 'protein-structure-interpretation',
    title: 'Protein Structure Interpretation',
    category: 'Editorial cover art',
    image: project03,
  },
];

const Work = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-spacing">
        <div className="container-editorial">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display leading-tight mb-12">
              Selected Work
            </h1>
            
            <p className="text-xl md:text-2xl leading-relaxed text-muted-foreground">
              A selection of scientific visualizations created for research publications, journals, and academic institutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects - Card Grandi, Una Per Riga */}
      <section className="section-spacing bg-secondary/20">
        <div className="container-editorial">
          <div className="space-y-32">
            {projects.map((project, index) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 48 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link
                  to={`/work/${project.slug}`}
                  className="group block"
                >
                  <div className="relative aspect-[16/9] overflow-hidden bg-secondary">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-10">
                    <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
                      {project.category}
                    </p>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-display leading-tight group-hover:text-primary transition-colors">
                      {project.title}
                    </h2>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing">
        <div className="container-editorial">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h2 className="text-4xl md:text-5xl font-display mb-8">
              Have a project in mind?
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-10">
              Let's discuss how we can visualize your research.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 text-lg font-medium text-foreground hover:text-primary transition-colors group border-b border-foreground/20 hover:border-primary pb-1"
            >
              Get in touch
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Work;
