import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Layout from '@/components/layout/Layout';

const Services = () => {
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
              What we do
            </h1>
            
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

      {/* Detailed Services */}
      <section className="section-spacing bg-secondary/20">
        <div className="container-editorial">
          <div className="space-y-20">
            {/* Journal Covers */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-3xl"
            >
              <h2 className="text-4xl md:text-5xl font-display mb-6">
                Scientific illustration for journals and covers
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Publication-ready imagery that meets editorial standards while communicating the significance of your research. Not decorative, not generic—interpretive.
              </p>
              <p className="text-base text-muted-foreground">
                Suitable for: Nature, Science, Cell, and specialty journals
              </p>
            </motion.div>

            {/* Cinematic Visualization */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-3xl"
            >
              <h2 className="text-4xl md:text-5xl font-display mb-6">
                Cinematic visualization for complex biological mechanisms
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Molecular interactions, cellular processes, and biological mechanisms rendered with cinematic language. Light, composition, and timing used to guide understanding.
              </p>
              <p className="text-base text-muted-foreground">
                Suitable for: Grant proposals, conference presentations, educational content
              </p>
            </motion.div>

            {/* Conceptual Visuals */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-3xl"
            >
              <h2 className="text-4xl md:text-5xl font-display mb-6">
                Conceptual visuals for research communication
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Abstract scientific concepts translated into visual form. Not literal diagrams—interpretations that communicate the idea, the significance, the "why it matters."
              </p>
              <p className="text-base text-muted-foreground">
                Suitable for: Public engagement, funding applications, institutional communications
              </p>
            </motion.div>

            {/* Visual Development */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-3xl"
            >
              <h2 className="text-4xl md:text-5xl font-display mb-6">
                Visual development for scientific storytelling
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Series of images that build a narrative. For documentaries, exhibitions, or multi-part publications where the visual language needs to be consistent and intentional.
              </p>
              <p className="text-base text-muted-foreground">
                Suitable for: Documentary projects, museum exhibitions, educational series
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Note */}
      <section className="section-spacing">
        <div className="container-editorial">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h2 className="text-4xl md:text-5xl font-display mb-8">
              How we work
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Every project begins with a conversation about the science. What's the core finding? What needs to be emphasized? What's the publication context?
              </p>
              <p>
                From there, we develop visual directions—not final images, but explorations of how the concept could be interpreted. You provide feedback, we refine.
              </p>
              <p>
                The final delivery includes all source files, multiple formats, and documentation of visual decisions made along the way.
              </p>
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
              Let's discuss your project
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-10">
              Whether you're preparing a journal submission or building a visual narrative for your research, I'd welcome the conversation.
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

export default Services;
