import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import SectionHeading from '@/components/ui/SectionHeading';
import ProjectCard from '@/components/ProjectCard';

import project01 from '@/assets/project-01.jpg';
import project02 from '@/assets/project-02.jpg';
import project03 from '@/assets/project-03.jpg';

// All projects
const projects = [
  {
    slug: 'gene-therapy-mechanism',
    title: 'Gene Therapy Mechanism',
    category: 'Journal Cover',
    image: project01,
  },
  {
    slug: 'neural-plasticity-study',
    title: 'Neural Plasticity Study',
    category: 'Research Visualization',
    image: project02,
  },
  {
    slug: 'viral-structure-analysis',
    title: 'Viral Structure Analysis',
    category: 'Scientific Illustration',
    image: project03,
  },
];

const Work = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-spacing pb-0">
        <div className="container-editorial">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <span className="text-caption uppercase tracking-widest text-muted-foreground mb-4 block">
              Portfolio
            </span>
            <h1 className="text-display-lg font-display">
              Selected Work
            </h1>
            <p className="mt-6 text-body-lg text-muted-foreground max-w-2xl">
              A curated selection of scientific visualizations created for research publications, journals, and academic institutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-spacing">
        <div className="container-editorial">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {projects.map((project, index) => (
              <ProjectCard key={project.slug} {...project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing bg-secondary/30">
        <div className="container-editorial text-center">
          <SectionHeading
            align="center"
            title="Have a project in mind?"
            description="Let's discuss how we can visualize your research."
          />
          <motion.a
            href="/contact"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-10 inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background font-medium transition-all duration-400 hover:bg-primary"
          >
            Start a Conversation
          </motion.a>
        </div>
      </section>
    </Layout>
  );
};

export default Work;
