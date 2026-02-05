import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Layout from '@/components/layout/Layout';

const Process = () => {
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
              Process
            </h1>
            
            <p className="text-xl md:text-2xl leading-relaxed text-muted-foreground">
              A structured approach that respects your time and ensures scientific accuracy at every stage.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section-spacing bg-secondary/20">
        <div className="container-editorial">
          <div className="space-y-20">
            {/* Scientific Alignment */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-3xl"
            >
              <h2 className="text-4xl md:text-5xl font-display mb-6">
                Scientific alignment
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We work closely with researchers to ensure scientific accuracy at every stage. This isn't about following instructions—it's about understanding the research deeply enough to make informed visual decisions.
              </p>
              <p className="text-base text-muted-foreground">
                Duration: Initial consultation (30–60 min), ongoing dialogue throughout
              </p>
            </motion.div>

            {/* Visual Research */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-3xl"
            >
              <h2 className="text-4xl md:text-5xl font-display mb-6">
                Visual research
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Exploring visual directions that serve both the narrative and the science. Sketches, compositional studies, lighting tests. Not finished work—explorations to align on direction before committing to detail.
              </p>
              <p className="text-base text-muted-foreground">
                Duration: 3–5 days
              </p>
            </motion.div>

            {/* Iterative Development */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-3xl"
            >
              <h2 className="text-4xl md:text-5xl font-display mb-6">
                Iterative development
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Visual decisions are discussed, tested and refined through iterations, balancing clarity and expressive power. You see progress updates, provide feedback, and we adjust. Scientific accuracy is verified at each stage.
              </p>
              <p className="text-base text-muted-foreground">
                Duration: 1–3 weeks depending on complexity
              </p>
            </motion.div>

            {/* Final Delivery */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-3xl"
            >
              <h2 className="text-4xl md:text-5xl font-display mb-6">
                Final delivery
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Publication-ready files in all required formats and resolutions. Print-ready (CMYK), digital (RGB), and source files if requested. Minor adjustments during the publication process are included.
              </p>
              <p className="text-base text-muted-foreground">
                Duration: Same day after final approval
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Typical Timeline */}
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
              Typical timeline
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">Cover art for journals:</strong> 2–3 weeks from initial consultation to final delivery
              </p>
              <p>
                <strong className="text-foreground">Complex mechanism visualization:</strong> 3–4 weeks
              </p>
              <p>
                <strong className="text-foreground">Series of related images:</strong> 4–6 weeks
              </p>
            </div>
            
            <p className="mt-10 text-lg text-muted-foreground leading-relaxed">
              Rush projects can be accommodated depending on current workload. If you have a tight deadline, mention it upfront and we'll discuss feasibility.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="section-spacing bg-secondary/20">
        <div className="container-editorial">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h2 className="text-4xl md:text-5xl font-display mb-8">
              What to expect
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">Clear communication:</strong> No jargon, no vague updates. You'll know what's happening and when.
              </p>
              <p>
                <strong className="text-foreground">Respect for your expertise:</strong> You know the science. I know the visuals. We collaborate, not dictate.
              </p>
              <p>
                <strong className="text-foreground">No surprises:</strong> Scope, timeline, and cost are agreed upfront. Changes are discussed before implementation.
              </p>
              <p>
                <strong className="text-foreground">Quality over speed:</strong> Rushing leads to errors. Good work takes time. If you need it fast, we'll discuss what's realistic.
              </p>
            </div>
          </motion.div>
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
            <h2 className="text-4xl md:text-5xl font-display mb-8">
              Ready to start?
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-10">
              Let's discuss your project and see if we're a good fit.
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

export default Process;
