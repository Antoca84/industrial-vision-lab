import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Layout from '@/components/layout/Layout';

const About = () => {
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
              About
            </h1>
            
            <div className="space-y-8 text-xl md:text-2xl leading-relaxed">
              <p>
                Industrial Magic is a scientific visualization studio founded by <strong>Antonino Campisi</strong>.
              </p>
              
              <p className="text-muted-foreground">
                The studio focuses on the intersection of science, cinematic language and editorial illustration.
              </p>
              
              <p className="text-muted-foreground">
                The work is driven by a belief that scientific images should not only explain, but communicate significance.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Extended Content */}
      <section className="section-spacing bg-secondary/20">
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
              <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
                <p>
                  Scientific visualization is often treated as technical documentation. Accurate, yes. But sterile. Forgettable.
                </p>
                <p>
                  I approach it differently.
                </p>
                <p>
                  Every image is an interpretation. A choice about what matters, what to emphasize, how to guide the eye. The science dictates the structure, but the visual language—composition, light, texture—comes from cinema, graphic novels, editorial illustration.
                </p>
                <p>
                  This isn't about making science "pretty." It's about making it felt. Making it understood not just intellectually, but viscerally.
                </p>
                <p>
                  I work directly with researchers to ensure accuracy at every stage. But accuracy alone isn't enough. The goal is to create images that carry weight, that communicate the importance of the work, that make people stop and look.
                </p>
                <p>
                  The name Industrial Magic reflects a philosophy: what appears effortless is the result of systematic craft. There's no magic—just deep understanding, technical skill, and disciplined execution.
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
                  <h3 className="text-sm uppercase tracking-widest text-muted-foreground mb-6">
                    Focus Areas
                  </h3>
                  <ul className="space-y-3 text-base">
                    <li>Molecular Biology</li>
                    <li>Neuroscience</li>
                    <li>Immunology</li>
                    <li>Structural Biology</li>
                    <li>Cell Biology</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm uppercase tracking-widest text-muted-foreground mb-6">
                    Visual Influences
                  </h3>
                  <ul className="space-y-3 text-base">
                    <li>Cinematic VFX and lighting</li>
                    <li>European graphic novels</li>
                    <li>Editorial scientific illustration</li>
                    <li>Architectural visualization</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm uppercase tracking-widest text-muted-foreground mb-6">
                    Location
                  </h3>
                  <p className="text-base">
                    Based in Italy<br />
                    Working internationally
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-spacing">
        <div className="container-editorial">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h2 className="text-4xl md:text-5xl font-display mb-12">
              Approach
            </h2>
            
            <div className="space-y-10">
              <div>
                <h3 className="text-2xl font-display mb-3">Interpretation, not decoration</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Every visual decision is driven by the science. If an element doesn't serve understanding, it doesn't belong.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-display mb-3">Collaboration, not execution</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I work with researchers, not for them. The best results come from dialogue, not from following a brief blindly.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-display mb-3">Craft, not automation</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  No templates. No presets. Every project is built from scratch, tailored to the specific research and publication context.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing bg-secondary/20">
        <div className="container-editorial">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h2 className="text-4xl md:text-5xl font-display mb-8">
              Let's work together
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-10">
              If you're looking for visualization that takes your research seriously, I'd welcome the conversation.
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

export default About;
