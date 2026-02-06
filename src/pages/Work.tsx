import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';

import project01 from '@/assets/project-01.jpg';
import project02 from '@/assets/project-02.jpg';
import project03 from '@/assets/project-03.jpg';

const projects = [
  {
    slug: 'cellular-interaction-study',
    title: 'Cellular Interactions',
    image: project01,
  },
  {
    slug: 'molecular-mechanism-visualization',
    title: 'Molecular Mechanisms',
    image: project02,
  },
  {
    slug: 'protein-structure-interpretation',
    title: 'Protein Structures',
    image: project03,
  },
];

const Work = () => {
  return (
    <Layout>
      {/* Hero - Sparse */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-20">
        <div className="container-lab">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-display-xl italic"
          >
            Works
          </motion.h1>
        </div>
      </section>

      {/* Projects - Art Book Layout */}
      <section className="pb-24 md:pb-40">
        {/* First - Full Bleed Plate */}
        <motion.article
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-6"
        >
          <Link to={`/work/${projects[0].slug}`} className="group block">
            <div className="image-plate aspect-[21/9]">
              <img
                src={projects[0].image}
                alt={projects[0].title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="container-lab mt-6">
              <h2 className="font-display text-display-md italic group-hover:text-accent transition-colors duration-500">
                {projects[0].title}
              </h2>
            </div>
          </Link>
        </motion.article>

        {/* Asymmetric Grid */}
        <div className="container-lab">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
            {/* Second - Larger */}
            <motion.article
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="md:col-span-7"
            >
              <Link to={`/work/${projects[1].slug}`} className="group block">
                <div className="image-plate aspect-[4/3]">
                  <img
                    src={projects[1].image}
                    alt={projects[1].title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="mt-6 font-display text-display-sm italic group-hover:text-accent transition-colors duration-500">
                  {projects[1].title}
                </h2>
              </Link>
            </motion.article>

            {/* Third - Offset */}
            <motion.article
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:col-span-5 md:mt-32"
            >
              <Link to={`/work/${projects[2].slug}`} className="group block">
                <div className="image-plate aspect-[3/4]">
                  <img
                    src={projects[2].image}
                    alt={projects[2].title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="mt-6 font-display text-display-sm italic group-hover:text-accent transition-colors duration-500">
                  {projects[2].title}
                </h2>
              </Link>
            </motion.article>
          </div>
        </div>
      </section>

      {/* Contact - Minimal */}
      <section className="section-dense border-t border-border">
        <div className="container-lab">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <p className="font-display text-display-sm italic">
              Discuss a project.
            </p>
            <Link
              to="/contact"
              className="link-subtle text-caption uppercase tracking-widest text-muted-foreground"
            >
              Contact
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Work;
