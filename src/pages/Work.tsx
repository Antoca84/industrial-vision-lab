import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Layout from '@/components/layout/Layout';

import project01 from '@/assets/project-01.jpg';
import project02 from '@/assets/project-02.jpg';
import project03 from '@/assets/project-03.jpg';

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
      {/* Hero - Confident, Minimal */}
      <section className="section-spacing pb-12 md:pb-16">
        <div className="container-editorial">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl"
          >
            <h1 className="text-display-xl font-display mb-8">
              Selected Work
            </h1>
            
            <p className="text-body-xl text-muted-foreground max-w-2xl leading-relaxed">
              Visual interpretations created for research publications, scientific journals, and academic institutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects - Cinematic Full Bleed */}
      <section className="pb-20 md:pb-32">
        <div className="space-y-24 md:space-y-40">
          {projects.map((project, index) => (
            <motion.article
              key={project.slug}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                to={`/work/${project.slug}`}
                className="group block"
              >
                {/* Full Bleed Image */}
                <div className="img-cinematic aspect-[21/9] md:aspect-[2.5/1]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Overlapping Text */}
                <div className="container-editorial">
                  <div className="overlap-text bg-background inline-block pr-8 md:pr-16 pt-6">
                    <p className="text-overline uppercase text-muted-foreground mb-3">
                      {project.category}
                    </p>
                    <h2 className="text-display-lg md:text-display-xl font-display group-hover:text-primary transition-colors duration-500">
                      {project.title}
                    </h2>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing border-t border-border">
        <div className="container-editorial">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h2 className="text-display-md font-display mb-6">
              Have a project in mind?
            </h2>
            <p className="text-body-lg text-muted-foreground mb-10 leading-relaxed">
              Let's discuss how we can visualize your research.
            </p>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 text-lg font-medium"
            >
              <span className="link-cinematic">Get in touch</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Work;
