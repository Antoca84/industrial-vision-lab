import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import ProjectCard from '@/components/ProjectCard';

import heroImage from '@/assets/hero-image.jpg';
import project01 from '@/assets/project-01.jpg';
import project02 from '@/assets/project-02.jpg';
import project03 from '@/assets/project-03.jpg';

// Featured projects data
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
      {/* Hero Section - Full Screen, Lateral Text */}
      <section className="relative min-h-screen flex items-center">
        {/* Background Image - Dominante */}
        <div className="absolute inset-0 -z-10">
          <img
            src={heroImage}
            alt="Scientific visualization"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/60 to-transparent" />
        </div>

        <div className="container-editorial">
          <div className="max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-[3.5rem] md:text-[5rem] lg:text-[6rem] leading-[0.95] font-display tracking-tight"
            >
              Scientific visualization with a cinematic and graphic-novel sensibility.
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 text-xl md:text-2xl text-muted-foreground leading-relaxed"
            >
              We translate complex biological research into powerful visual narratives.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="mt-12"
            >
              <Link
                to="/work"
                className="inline-flex items-center gap-3 text-lg font-medium text-foreground hover:text-primary transition-colors group border-b border-foreground/20 hover:border-primary pb-1"
              >
                View selected work
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Manifesto Section - Densa, Senza Icone */}
      <section className="section-spacing border-t border-border">
        <div className="container-editorial">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-8 text-xl md:text-2xl leading-relaxed"
            >
              <p className="font-medium">
                We don't treat scientific images as diagrams.
              </p>
              <p className="font-medium">
                We treat them as narratives.
              </p>
              <p className="text-muted-foreground">
                Every visual decision — composition, color, texture — is driven by meaning, not decoration.
              </p>
              <p className="text-muted-foreground">
                Our work sits between scientific accuracy and visual interpretation, informed by cinema, editorial illustration and graphic-novel language.
              </p>
              <p className="font-medium">
                The goal is not realism.
              </p>
              <p className="font-medium">
                The goal is clarity, tension and understanding.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Selected Work - Card Grandi, Una Per Riga */}
      <section className="section-spacing bg-secondary/20">
        <div className="container-editorial">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-20"
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-display leading-tight">
              Selected Work
            </h2>
          </motion.div>

          <div className="space-y-24">
            {featuredProjects.map((project, index) => (
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
                  <div className="mt-8">
                    <p className="text-sm uppercase tracking-widest text-muted-foreground mb-3">
                      {project.category}
                    </p>
                    <h3 className="text-4xl md:text-5xl font-display group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-20 text-center"
          >
            <Link
              to="/work"
              className="inline-flex items-center gap-3 text-lg font-medium text-foreground hover:text-primary transition-colors group border-b border-foreground/20 hover:border-primary pb-1"
            >
              View all projects
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services - Testo, Niente Icone */}
      <section className="section-spacing">
        <div className="container-editorial">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <h2 className="text-4xl md:text-5xl font-display mb-12">
              What we do
            </h2>
            
            <div className="space-y-6 text-xl md:text-2xl leading-relaxed text-muted-foreground">
              <p>– Scientific illustration for journals and covers</p>
              <p>– Cinematic visualization for complex biological mechanisms</p>
              <p>– Conceptual visuals for research communication</p>
              <p>– Visual development for scientific storytelling</p>
            </div>

            <p className="mt-12 text-xl md:text-2xl leading-relaxed font-medium">
              Each project is approached as a visual interpretation, not as a generic render.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process - Tono Meno Burocratico */}
      <section className="section-spacing bg-secondary/20">
        <div className="container-editorial">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <h2 className="text-4xl md:text-5xl font-display mb-12">
              Process
            </h2>
            
            <div className="space-y-10">
              <div>
                <h3 className="text-2xl font-display mb-3">Scientific alignment</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We work closely with researchers to ensure scientific accuracy at every stage.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-display mb-3">Visual research</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Exploring visual directions that serve the narrative and the science.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-display mb-3">Iterative development</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Visual decisions are discussed, tested and refined through iterations, balancing clarity and expressive power.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-display mb-3">Final delivery</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Publication-ready files in all required formats and resolutions.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Teaser - Accessibilità Controllata */}
      <section className="section-spacing">
        <div className="container-editorial">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="text-4xl md:text-5xl font-display mb-8">
                For collaborations, inquiries or project discussions
              </h2>
              
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 text-xl font-medium text-foreground hover:text-primary transition-colors group border-b border-foreground/20 hover:border-primary pb-1"
              >
                Get in touch
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
