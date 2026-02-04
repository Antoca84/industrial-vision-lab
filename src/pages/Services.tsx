import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import SectionHeading from '@/components/ui/SectionHeading';

const services = [
  {
    id: 'cover-art',
    title: 'Scientific Cover Art',
    description: 'Publication-ready cover images for peer-reviewed journals. Built to meet the precise specifications of major publishers while making your research stand out on the shelf and in the inbox.',
    details: [
      'High-resolution imagery (300+ DPI)',
      'CMYK and RGB color profiles',
      'Multiple format delivery',
      'Revision cycles with researcher input',
    ],
    suitable: 'Nature, Science, Cell, and specialty journals',
  },
  {
    id: 'research-viz',
    title: 'Research Visualization',
    description: 'Complex data translated into clear, compelling visual narratives. Whether for a grant application, a conference presentation, or internal communication, these visuals help your audience understand what you\'ve discovered.',
    details: [
      'Data-driven visualizations',
      'Mechanism illustrations',
      'Comparative diagrams',
      'Process flow graphics',
    ],
    suitable: 'Grant proposals, conference presentations, lab communications',
  },
  {
    id: 'technical-illustration',
    title: 'Technical Illustration',
    description: 'Accurate molecular, cellular, and anatomical renderings for educational and commercial contexts. Every structure is built from verified scientific data, then refined for maximum clarity.',
    details: [
      'Molecular and protein structures',
      'Cellular and tissue cross-sections',
      'Anatomical diagrams',
      'Educational materials',
    ],
    suitable: 'Textbooks, educational platforms, pharmaceutical communications',
  },
];

const Services = () => {
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
              Services
            </span>
            <h1 className="text-display-lg font-display">
              What I Offer
            </h1>
            <p className="mt-6 text-body-lg text-muted-foreground max-w-2xl">
              Specialized visualization services for researchers, publishers, and institutions who understand that quality imagery is essential to scientific communication.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-spacing">
        <div className="container-editorial">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16"
              >
                {/* Number */}
                <div className="lg:col-span-1">
                  <span className="text-display-md font-display text-muted-foreground/30">
                    0{index + 1}
                  </span>
                </div>

                {/* Content */}
                <div className="lg:col-span-7">
                  <h2 className="text-display-sm font-display mb-4">
                    {service.title}
                  </h2>
                  <p className="text-body-md text-muted-foreground">
                    {service.description}
                  </p>
                  <p className="mt-6 text-body-sm">
                    <span className="text-muted-foreground">Suitable for: </span>
                    <span className="text-foreground">{service.suitable}</span>
                  </p>
                </div>

                {/* Details */}
                <div className="lg:col-span-4">
                  <h3 className="text-caption uppercase tracking-widest text-muted-foreground mb-4">
                    Includes
                  </h3>
                  <ul className="space-y-2">
                    {service.details.map((detail) => (
                      <li key={detail} className="text-body-sm text-foreground flex items-start gap-2">
                        <span className="mt-2 w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Note */}
      <section className="section-spacing bg-secondary/30">
        <div className="container-editorial">
          <div className="max-w-3xl">
            <SectionHeading
              label="Custom Projects"
              title="Beyond Standard Services"
              description="Every research project is unique. If you need something that doesn't fit neatly into these categories—experimental visualizations, animation, or something entirely new—let's discuss it."
            />
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-10"
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background font-medium transition-all duration-400 hover:bg-primary"
              >
                Discuss Your Project
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
