import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Layout from '@/components/layout/Layout';

import heroImage from '@/assets/hero-image.jpg';
import project01 from '@/assets/project-01.jpg';
import project02 from '@/assets/project-02.jpg';
import project03 from '@/assets/project-03.jpg';

const featuredProjects = [
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

const Index = () => {
  return (
    <Layout>
      {/* Hero - Full Bleed Cinematic */}
      <section className="relative min-h-[100vh] flex items-end pb-16 md:pb-24">
        {/* Background - The Image IS the Hero */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Scientific visualization"
            className="w-full h-full object-cover"
          />
          {/* Cinematic gradient - dramatic bottom fade */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent" />
        </div>

        <div className="container-editorial relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl"
          >
            <h1 className="text-display-hero font-display text-balance">
              Science, interpreted.
            </h1>
            
            <p className="mt-8 text-body-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
              Visual narratives for biological research. Where scientific accuracy meets cinematic expression.
            </p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-12 flex items-center gap-8"
            >
              <Link
                to="/work"
                className="group inline-flex items-center gap-3 text-lg font-medium text-foreground"
              >
                <span className="link-cinematic">View work</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-2" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Manifesto - Bold Statement */}
      <section className="section-spacing bg-secondary">
        <div className="container-editorial">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-5xl"
          >
            <p className="text-overline uppercase text-muted-foreground mb-8">
              Manifesto
            </p>
            
            <div className="space-y-8 text-manifesto">
              <p>
                We don't make diagrams.
              </p>
              <p className="text-muted-foreground">
                We create visual interpretations of science — where every composition, every shadow, every color choice carries meaning.
              </p>
              <p>
                Our work exists at the intersection of scientific accuracy and cinematic expression.
              </p>
              <p className="text-muted-foreground">
                Informed by VFX, editorial illustration, and graphic-novel language, we transform complex biological research into images that communicate, not just illustrate.
              </p>
            </div>

            <div className="mt-16 divider-bold" />
          </motion.div>
        </div>
      </section>

      {/* Selected Work - Cinematic Grid */}
      <section className="section-spacing">
        <div className="container-editorial">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-end justify-between mb-16"
          >
            <h2 className="text-display-lg font-display">
              Selected Work
            </h2>
            <Link
              to="/work"
              className="hidden md:flex items-center gap-2 text-body-sm text-muted-foreground hover:text-foreground transition-colors group"
            >
              All projects
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          <div className="space-y-20 md:space-y-32">
            {featuredProjects.map((project, index) => (
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
                  {/* Cinematic Image Frame */}
                  <div className="img-cinematic aspect-[21/9] md:aspect-[2.35/1]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Overlapping Text - Graphic Novel Style */}
                  <div className="overlap-text bg-background inline-block pr-8 md:pr-16 pt-6">
                    <p className="text-overline uppercase text-muted-foreground mb-3">
                      {project.category}
                    </p>
                    <h3 className="text-display-md md:text-display-lg font-display group-hover:text-primary transition-colors duration-500">
                      {project.title}
                    </h3>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 md:hidden text-center"
          >
            <Link
              to="/work"
              className="inline-flex items-center gap-2 text-body-md font-medium group"
            >
              <span className="link-cinematic">View all projects</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* What We Do - Confident, Minimal */}
      <section className="section-spacing bg-card">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-overline uppercase text-muted-foreground mb-6">
                Capabilities
              </p>
              <h2 className="text-display-md font-display">
                Visual interpretation for scientific research
              </h2>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="space-y-8"
            >
              <div className="border-l-2 border-foreground pl-6">
                <p className="text-body-lg">Journal covers and scientific illustration</p>
              </div>
              <div className="border-l-2 border-muted pl-6">
                <p className="text-body-lg text-muted-foreground">Cinematic visualization of biological mechanisms</p>
              </div>
              <div className="border-l-2 border-muted pl-6">
                <p className="text-body-lg text-muted-foreground">Conceptual imagery for research communication</p>
              </div>
              <div className="border-l-2 border-muted pl-6">
                <p className="text-body-lg text-muted-foreground">Visual development for scientific storytelling</p>
              </div>
              
              <p className="text-body-lg font-medium pt-4">
                Every project is a visual interpretation — not a render.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact - Direct, Confident */}
      <section className="section-spacing border-t border-border">
        <div className="container-editorial">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h2 className="text-display-lg font-display mb-8">
              Let's discuss your project.
            </h2>
            
            <Link
              to="/contact"
              className="group inline-flex items-center gap-4 text-xl font-medium"
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

export default Index;
