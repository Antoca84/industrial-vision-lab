import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import SectionHeading from '@/components/ui/SectionHeading';
import ProjectCard from '@/components/ProjectCard';

import heroImage from '@/assets/hero-image.jpg';
import project01 from '@/assets/project-01.jpg';
import project02 from '@/assets/project-02.jpg';
import project03 from '@/assets/project-03.jpg';

// Featured projects data
const featuredProjects = [
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

// Services data
const services = [
  {
    title: 'Scientific Cover Art',
    description: 'Publication-ready imagery for journals and research papers. Built to meet editorial standards.',
  },
  {
    title: 'Research Visualization',
    description: 'Complex data translated into clear, compelling visual narratives for grants and presentations.',
  },
  {
    title: 'Technical Illustration',
    description: 'Accurate molecular, cellular, and anatomical renderings for educational and commercial use.',
  },
];

// Process steps
const processSteps = [
  {
    number: '01',
    title: 'Brief',
    description: 'We discuss your research, audience, and publication requirements.',
  },
  {
    number: '02',
    title: 'Concept',
    description: 'Initial sketches and direction options based on scientific accuracy.',
  },
  {
    number: '03',
    title: 'Refinement',
    description: 'Iterative development with your feedback at every stage.',
  },
  {
    number: '04',
    title: 'Delivery',
    description: 'Print-ready files in all required formats and resolutions.',
  },
];

// Proof bar items
const proofItems = [
  'Scientific Accuracy',
  'Publication-Ready',
  'Editorial Standards',
  'Peer-Review Compatible',
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <img
            src={heroImage}
            alt="Scientific visualization"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/30" />
        </div>

        <div className="container-editorial">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-caption uppercase tracking-widest text-muted-foreground mb-4 block"
            >
              Scientific Visualization Studio
            </motion.span>
            
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-display-xl font-display"
            >
              Where Science Meets Cinematic Craft
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 text-body-lg text-muted-foreground max-w-xl"
            >
              We create publication-ready cover art and research visualizations for scientists, labs, and publishers who demand precision without compromise.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link
                to="/work"
                className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background font-medium transition-all duration-400 hover:bg-primary"
              >
                View Work
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 border border-foreground text-foreground font-medium transition-all duration-400 hover:bg-foreground hover:text-background"
              >
                Start a Project
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Proof Bar */}
      <section className="border-y border-border bg-secondary/50">
        <div className="container-editorial py-6">
          <ul className="flex flex-wrap justify-center gap-x-12 gap-y-4">
            {proofItems.map((item, index) => (
              <motion.li
                key={item}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-caption uppercase tracking-widest text-muted-foreground"
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Selected Work */}
      <section className="section-spacing">
        <div className="container-editorial">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
            <SectionHeading
              label="Selected Work"
              title="Recent Projects"
              description="Scientific visualizations crafted with precision for leading research publications."
            />
            <Link
              to="/work"
              className="inline-flex items-center gap-2 text-body-sm font-medium text-foreground hover:text-primary transition-colors group"
            >
              View All Work
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.slug} {...project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* What I Do */}
      <section className="section-spacing bg-secondary/30">
        <div className="container-editorial">
          <SectionHeading
            label="Services"
            title="What I Do"
            description="Specialized in creating visuals that communicate complex science with clarity and impact."
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="group"
              >
                <span className="text-caption uppercase tracking-widest text-muted-foreground">
                  0{index + 1}
                </span>
                <h3 className="mt-4 text-display-sm font-display group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="mt-4 text-body-md text-muted-foreground">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-12"
          >
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-body-sm font-medium text-foreground hover:text-primary transition-colors group"
            >
              Explore Services
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="section-spacing">
        <div className="container-editorial">
          <SectionHeading
            label="Process"
            title="How It Works"
            description="A structured approach that respects your time and ensures scientific accuracy."
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="relative pl-6 border-l border-border"
              >
                <span className="text-display-sm font-display text-muted-foreground/30">
                  {step.number}
                </span>
                <h3 className="mt-2 text-body-lg font-medium font-display">
                  {step.title}
                </h3>
                <p className="mt-2 text-body-sm text-muted-foreground">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mini Manifesto */}
      <section className="section-spacing bg-foreground text-background">
        <div className="container-editorial">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="text-caption uppercase tracking-widest text-background/60 mb-6 block">
              Philosophy
            </span>
            <blockquote className="text-display-md font-display text-balance">
              "Great scientific visualization is invisible. It serves the research, not the designer. Every element exists because the science demands it."
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* Contact Teaser */}
      <section className="section-spacing">
        <div className="container-editorial">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-caption uppercase tracking-widest text-muted-foreground mb-4 block">
                Ready to Start?
              </span>
              <h2 className="text-display-md font-display">
                Let's discuss your project
              </h2>
              <p className="mt-6 text-body-lg text-muted-foreground">
                Whether you're preparing a journal submission or building a grant proposal, I'm here to help visualize your research.
              </p>
              <Link
                to="/contact"
                className="mt-10 inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background font-medium transition-all duration-400 hover:bg-primary"
              >
                Get in Touch
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
