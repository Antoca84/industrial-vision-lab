import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';

import heroImage from '@/assets/hero-image.jpg';
import project01 from '@/assets/project-01.jpg';
import project02 from '@/assets/project-02.jpg';
import project03 from '@/assets/project-03.jpg';

const works = [
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

const Index = () => {
  return (
    <Layout>
      {/* Hero - Full Bleed, Image as Content */}
      <section className="relative min-h-screen">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Visual interpretation"
            className="w-full h-full object-cover"
          />
          {/* Minimal gradient - let the image breathe */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-90" />
        </div>

        {/* Floating title - asymmetric placement */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute bottom-12 left-6 md:bottom-20 md:left-12 lg:left-20 z-10"
        >
          <h1 className="font-display text-display-massive italic text-foreground">
            Visual<br />
            <span className="not-italic">Laboratory</span>
          </h1>
        </motion.div>

        {/* Subtle scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-12 right-6 md:right-12 lg:right-20 z-10"
        >
          <span className="text-caption uppercase text-muted-foreground tracking-widest vertical-rl">
            Scroll
          </span>
        </motion.div>
      </section>

      {/* Manifesto - Minimal, Bold */}
      <section className="section-massive">
        <div className="container-offset-left">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl"
          >
            <div className="manifesto-block">
              <p className="font-display text-display-lg italic text-foreground mb-8">
                We do not create diagrams.
              </p>
              <p className="font-display text-display-md text-muted-foreground mb-12">
                We create visual interpretations of biological phenomena — 
                images that communicate meaning, not just information.
              </p>
              <div className="rule-short" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Works - Large Plates, Asymmetric Grid */}
      <section className="pb-24 md:pb-32">
        <div className="container-lab mb-12">
          <span className="text-caption uppercase text-muted-foreground tracking-widest">
            Selected Works
          </span>
        </div>

        {/* First work - Full bleed */}
        <motion.article
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="mb-4"
        >
          <Link to={`/work/${works[0].slug}`} className="group block">
            <div className="image-plate aspect-[21/9]">
              <img
                src={works[0].image}
                alt={works[0].title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="container-lab mt-6">
              <h2 className="font-display text-display-md italic group-hover:text-accent transition-colors duration-500">
                {works[0].title}
              </h2>
            </div>
          </Link>
        </motion.article>

        {/* Second and third - Asymmetric two-column */}
        <div className="container-lab">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
            <motion.article
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="md:col-span-7"
            >
              <Link to={`/work/${works[1].slug}`} className="group block">
                <div className="image-plate aspect-[4/3]">
                  <img
                    src={works[1].image}
                    alt={works[1].title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="mt-6 font-display text-display-sm italic group-hover:text-accent transition-colors duration-500">
                  {works[1].title}
                </h2>
              </Link>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:col-span-5 md:mt-24"
            >
              <Link to={`/work/${works[2].slug}`} className="group block">
                <div className="image-plate aspect-[3/4]">
                  <img
                    src={works[2].image}
                    alt={works[2].title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="mt-6 font-display text-display-sm italic group-hover:text-accent transition-colors duration-500">
                  {works[2].title}
                </h2>
              </Link>
            </motion.article>
          </div>
        </div>

        {/* View all - subtle */}
        <div className="container-lab mt-16">
          <Link
            to="/work"
            className="link-subtle text-caption uppercase text-muted-foreground tracking-widest"
          >
            All Works
          </Link>
        </div>
      </section>

      {/* Philosophy - Sparse, Intentional */}
      <section className="section-massive border-t border-border">
        <div className="container-offset-right">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="max-w-3xl ml-auto"
          >
            <span className="text-caption uppercase text-muted-foreground tracking-widest block mb-8">
              Philosophy
            </span>
            
            <p className="font-display text-display-md text-foreground mb-8">
              This is not how science is usually shown.
            </p>
            
            <p className="text-body-md text-muted-foreground max-w-xl">
              We work at the intersection of biology, graphic-novel language, 
              and conceptual art. Each image is a visual essay — 
              an interpretation that balances scientific accuracy with expressive power.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact - Minimal */}
      <section className="section-dense border-t border-border">
        <div className="container-lab">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-display text-display-sm italic"
            >
              Inquiries welcome.
            </motion.p>
            
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

export default Index;
