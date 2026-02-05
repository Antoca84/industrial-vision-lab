import { motion } from 'framer-motion';
import { Mail, MessageCircle } from 'lucide-react';
import Layout from '@/components/layout/Layout';

const Contact = () => {
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
              Contact
            </h1>
            
            <p className="text-xl md:text-2xl leading-relaxed text-muted-foreground">
              For collaborations, inquiries or project discussions:
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="section-spacing bg-secondary/20">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Email - Prominente */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7"
            >
              <div>
                <h2 className="text-4xl md:text-5xl font-display mb-8">
                  Email
                </h2>
                <a
                  href="mailto:hello@industrialmagic.studio"
                  className="inline-flex items-center gap-4 text-2xl md:text-3xl font-medium text-foreground hover:text-primary transition-colors group border-b-2 border-foreground/20 hover:border-primary pb-2"
                >
                  <Mail className="w-8 h-8" />
                  hello@industrialmagic.studio
                </a>
                
                <p className="mt-10 text-lg text-muted-foreground leading-relaxed max-w-2xl">
                  Please include a brief description of your research, the type of visualization you need, and your approximate timeline. I'll respond within 24–48 hours.
                </p>
              </div>
            </motion.div>

            {/* WhatsApp - Discreto */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5"
            >
              <div>
                <h3 className="text-2xl font-display mb-6">
                  Or start a direct conversation
                </h3>
                <a
                  href="https://wa.me/393479876543"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-3 border border-foreground/20 text-foreground hover:border-primary hover:text-primary transition-colors group"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What to Include */}
      <section className="section-spacing">
        <div className="container-editorial">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h2 className="text-3xl md:text-4xl font-display mb-10">
              What to include in your message
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>– Brief description of your research or publication</p>
              <p>– Type of visualization needed (cover art, figures, conceptual visuals)</p>
              <p>– Target publication or journal (if applicable)</p>
              <p>– Approximate timeline and deadline</p>
              <p>– Any existing reference images, sketches, or visual direction</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Typical Timeline */}
      <section className="section-spacing bg-secondary/20">
        <div className="container-editorial">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h2 className="text-3xl md:text-4xl font-display mb-10">
              Typical project timeline
            </h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-display mb-2">Initial consultation</h3>
                <p className="text-lg text-muted-foreground">1–2 days after first contact</p>
              </div>
              
              <div>
                <h3 className="text-xl font-display mb-2">Concept development</h3>
                <p className="text-lg text-muted-foreground">5–7 days</p>
              </div>
              
              <div>
                <h3 className="text-xl font-display mb-2">Refinement and iterations</h3>
                <p className="text-lg text-muted-foreground">7–10 days</p>
              </div>
              
              <div>
                <h3 className="text-xl font-display mb-2">Final delivery</h3>
                <p className="text-lg text-muted-foreground">2–3 days</p>
              </div>
            </div>
            
            <p className="mt-10 text-lg text-muted-foreground leading-relaxed">
              Rush projects can be accommodated depending on current workload. Please mention if you have an urgent deadline.
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
