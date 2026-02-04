import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import SectionHeading from '@/components/ui/SectionHeading';

const processSteps = [
  {
    number: '01',
    title: 'Initial Consultation',
    description: 'We begin with a focused conversation about your research, publication timeline, and visual requirements. I ask questions, listen carefully, and make sure I understand the science before picking up any tools.',
    details: [
      'Research background and context',
      'Publication specifications',
      'Timeline and milestones',
      'Budget discussion',
    ],
    duration: '30–60 min call',
  },
  {
    number: '02',
    title: 'Concept Development',
    description: 'Based on our discussion, I develop initial concepts—typically 2–3 directions for you to consider. These are rough sketches with notes, not finished work. The goal is to align on direction before investing in detail.',
    details: [
      'Compositional sketches',
      'Color and lighting direction',
      'Scientific accuracy review',
      'Feedback and refinement',
    ],
    duration: '3–5 days',
  },
  {
    number: '03',
    title: 'Refinement & Production',
    description: 'Once we\'ve selected a direction, I move into full production. You\'ll see progress updates and have opportunities to provide feedback. Scientific accuracy is verified at each stage with your input.',
    details: [
      'High-fidelity rendering',
      'Detail refinement',
      'Color calibration',
      'Accuracy verification',
    ],
    duration: '1–3 weeks',
  },
  {
    number: '04',
    title: 'Delivery & Support',
    description: 'Final files are delivered in all required formats, optimized for both print and digital use. I remain available for minor adjustments during the publication process.',
    details: [
      'Print-ready files (CMYK)',
      'Digital versions (RGB)',
      'Source files if requested',
      'Post-delivery support',
    ],
    duration: 'Same day after approval',
  },
];

const Process = () => {
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
              Process
            </span>
            <h1 className="text-display-lg font-display">
              How We Work Together
            </h1>
            <p className="mt-6 text-body-lg text-muted-foreground max-w-2xl">
              A clear, structured process that respects your time and expertise. No surprises, no scope creep—just focused work toward a shared goal.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section-spacing">
        <div className="container-editorial">
          <div className="space-y-0">
            {processSteps.map((step, index) => (
              <motion.article
                key={step.number}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 py-16 border-t border-border"
              >
                {/* Number */}
                <div className="lg:col-span-2">
                  <span className="text-display-lg font-display text-muted-foreground/20">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="lg:col-span-6">
                  <h2 className="text-display-sm font-display mb-4">
                    {step.title}
                  </h2>
                  <p className="text-body-md text-muted-foreground">
                    {step.description}
                  </p>
                </div>

                {/* Details */}
                <div className="lg:col-span-4">
                  <div className="mb-6">
                    <span className="text-caption uppercase tracking-widest text-muted-foreground">
                      Duration
                    </span>
                    <p className="mt-1 text-body-sm font-medium">{step.duration}</p>
                  </div>
                  <div>
                    <span className="text-caption uppercase tracking-widest text-muted-foreground mb-3 block">
                      Key Activities
                    </span>
                    <ul className="space-y-2">
                      {step.details.map((detail) => (
                        <li key={detail} className="text-body-sm text-foreground flex items-start gap-2">
                          <span className="mt-2 w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="section-spacing bg-secondary/30">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <SectionHeading
                label="Questions"
                title="Common Concerns"
              />
            </div>
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-body-lg font-medium font-display mb-2">
                  What if I need revisions?
                </h3>
                <p className="text-body-md text-muted-foreground">
                  Two rounds of revisions are included in every project. Additional revisions are billed hourly at a pre-agreed rate.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.6 }}
              >
                <h3 className="text-body-lg font-medium font-display mb-2">
                  How do you ensure scientific accuracy?
                </h3>
                <p className="text-body-md text-muted-foreground">
                  I work from your data and literature. You review every major milestone. The final image is only delivered after your explicit approval.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <h3 className="text-body-lg font-medium font-display mb-2">
                  What about tight deadlines?
                </h3>
                <p className="text-body-md text-muted-foreground">
                  Rush projects are possible with advance notice. Let me know your timeline upfront, and we'll discuss what's feasible.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing">
        <div className="container-editorial text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-display-md font-display">
              Ready to begin?
            </h2>
            <p className="mt-4 text-body-lg text-muted-foreground max-w-xl mx-auto">
              The first step is a brief conversation about your project.
            </p>
            <Link
              to="/contact"
              className="mt-10 inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background font-medium transition-all duration-400 hover:bg-primary"
            >
              Schedule a Call
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Process;
