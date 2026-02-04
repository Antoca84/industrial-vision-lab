import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Layout from '@/components/layout/Layout';

const About = () => {
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
              About
            </span>
            <h1 className="text-display-lg font-display">
              Scientific Precision, Cinematic Craft
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-spacing">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Main Text */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7"
            >
              <div className="prose-editorial">
                <p className="text-body-lg">
                  Industrial Magic is a scientific visualization studio based in Italy, working with researchers, publishers, and institutions internationally.
                </p>
                <p className="text-body-md mt-6">
                  The studio was founded on a simple premise: scientific imagery should be as rigorous as the research it represents. Too often, cover art and figures are treated as afterthoughts—rushed, generic, disconnected from the science. I believe they deserve better.
                </p>
                <p className="text-body-md mt-6">
                  Every project begins with the research itself. I work directly with scientists to understand their findings, then translate complex concepts into imagery that communicates with precision and impact. The goal is never decoration—it's clarity.
                </p>
                <p className="text-body-md mt-6">
                  My background spans both science and visual production, which informs how I approach each project. I understand the pressures of publication timelines, the importance of accuracy, and the frustration of working with designers who don't speak your language.
                </p>
                <p className="text-body-md mt-6">
                  The name "Industrial Magic" reflects a philosophy: what appears magical is actually the result of systematic craft. There's nothing mystical about good visualization—just deep understanding, technical skill, and disciplined execution.
                </p>
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5"
            >
              <div className="space-y-12">
                <div>
                  <h3 className="text-caption uppercase tracking-widest text-muted-foreground mb-4">
                    Focus Areas
                  </h3>
                  <ul className="space-y-2">
                    <li className="text-body-sm">Molecular Biology</li>
                    <li className="text-body-sm">Neuroscience</li>
                    <li className="text-body-sm">Immunology</li>
                    <li className="text-body-sm">Structural Biology</li>
                    <li className="text-body-sm">Cell Biology</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-caption uppercase tracking-widest text-muted-foreground mb-4">
                    Approach
                  </h3>
                  <ul className="space-y-2">
                    <li className="text-body-sm">Research-first methodology</li>
                    <li className="text-body-sm">Direct scientist collaboration</li>
                    <li className="text-body-sm">Accuracy verification at every stage</li>
                    <li className="text-body-sm">Publication-ready delivery</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-caption uppercase tracking-widest text-muted-foreground mb-4">
                    Location
                  </h3>
                  <p className="text-body-sm">
                    Based in Italy<br />
                    Working internationally
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-spacing bg-secondary/30">
        <div className="container-editorial">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="text-caption uppercase tracking-widest text-muted-foreground mb-4 block">
              Values
            </span>
            <h2 className="text-display-md font-display">
              Principles That Guide the Work
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-display-sm font-display mb-4">
                Accuracy First
              </h3>
              <p className="text-body-md text-muted-foreground">
                Beautiful imagery means nothing if it misrepresents the science. Accuracy is non-negotiable—verified at every stage, by you.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              <h3 className="text-display-sm font-display mb-4">
                Clarity Over Decoration
              </h3>
              <p className="text-body-md text-muted-foreground">
                Every visual element serves the science. If it doesn't aid understanding, it doesn't belong in the image.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h3 className="text-display-sm font-display mb-4">
                Respect for Process
              </h3>
              <p className="text-body-md text-muted-foreground">
                Good work takes time and structure. Rushing leads to errors. A clear process protects both the quality and your peace of mind.
              </p>
            </motion.div>
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
            <h2 className="text-display-md font-display">
              Let's work together
            </h2>
            <p className="mt-4 text-body-lg text-muted-foreground">
              If you're looking for visualization support that takes your research seriously, I'd welcome the conversation.
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
      </section>
    </Layout>
  );
};

export default About;
