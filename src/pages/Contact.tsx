import { motion } from 'framer-motion';
import { Mail, ArrowUpRight } from 'lucide-react';
import Layout from '@/components/layout/Layout';

const Contact = () => {
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
              Contact
            </span>
            <h1 className="text-display-lg font-display">
              Start a Conversation
            </h1>
            <p className="mt-6 text-body-lg text-muted-foreground max-w-2xl">
              Have a project in mind? Need cover art for an upcoming publication? Let's discuss how I can help visualize your research.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-spacing">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Main Contact */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7"
            >
              <div className="space-y-12">
                <div>
                  <h2 className="text-display-sm font-display mb-6">
                    Email is Best
                  </h2>
                  <p className="text-body-md text-muted-foreground mb-8">
                    For project inquiries, please include a brief description of your research, the type of visualization you need, and your approximate timeline. I'll respond within 24–48 hours.
                  </p>
                  <a
                    href="mailto:hello@industrialmagic.studio"
                    className="inline-flex items-center gap-3 px-8 py-5 bg-foreground text-background font-medium transition-all duration-400 hover:bg-primary group"
                  >
                    <Mail className="w-5 h-5" />
                    hello@industrialmagic.studio
                    <ArrowUpRight className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity" />
                  </a>
                </div>

                <div className="pt-12 border-t border-border">
                  <h3 className="text-body-lg font-display font-medium mb-4">
                    What to Include
                  </h3>
                  <ul className="space-y-3 text-body-md text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="mt-2 w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                      Brief description of your research or publication
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                      Type of visualization needed (cover, figures, etc.)
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                      Target publication or journal (if applicable)
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                      Approximate timeline and deadline
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                      Any existing reference images or sketches
                    </li>
                  </ul>
                </div>
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
                    Response Time
                  </h3>
                  <p className="text-body-md">
                    24–48 hours for initial response.<br />
                    I'm based in Italy (CET/CEST) and work with clients across time zones.
                  </p>
                </div>

                <div>
                  <h3 className="text-caption uppercase tracking-widest text-muted-foreground mb-4">
                    Availability
                  </h3>
                  <p className="text-body-md text-muted-foreground">
                    I take on a limited number of projects to ensure each receives full attention. If you have a specific deadline, please mention it early so we can assess feasibility.
                  </p>
                </div>

                <div>
                  <h3 className="text-caption uppercase tracking-widest text-muted-foreground mb-4">
                    Not Ready Yet?
                  </h3>
                  <p className="text-body-md text-muted-foreground">
                    That's fine. Browse the work, read about the process, and reach out when the timing is right. No pressure.
                  </p>
                </div>

                {/* 
                  OPTIONAL: External form integration
                  Uncomment and configure for Formspree, StaticForms, etc.
                  
                <div className="pt-8 border-t border-border">
                  <h3 className="text-caption uppercase tracking-widest text-muted-foreground mb-4">
                    Prefer a Form?
                  </h3>
                  <a
                    href="https://forms.example.com/your-form"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-body-sm text-foreground hover:text-primary transition-colors"
                  >
                    Use the contact form
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
                */}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location Note */}
      <section className="section-spacing bg-secondary/30">
        <div className="container-editorial">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-display-sm font-display mb-4">
              Based in Italy, Working Globally
            </h2>
            <p className="text-body-md text-muted-foreground">
              All collaboration happens remotely via email and video calls. Time zone differences are managed through asynchronous communication and scheduled check-ins.
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
