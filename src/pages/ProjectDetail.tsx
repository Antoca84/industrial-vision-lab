import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import Lightbox from '@/components/Lightbox';

import project01 from '@/assets/project-01.jpg';
import project02 from '@/assets/project-02.jpg';
import project03 from '@/assets/project-03.jpg';

// Project data with case study template
const projectsData: Record<string, {
  title: string;
  category: string;
  image: string;
  goal: string;
  constraints: string;
  approach: string;
  deliverables: string[];
  tools: string[];
}> = {
  'gene-therapy-mechanism': {
    title: 'Gene Therapy Mechanism',
    category: 'Journal Cover',
    image: project01,
    goal: 'Create a compelling cover illustration depicting CRISPR-Cas9 gene editing for a peer-reviewed molecular biology journal. The image needed to accurately represent the mechanism while being visually striking enough for cover placement.',
    constraints: 'Tight timeline of 10 days. Required approval from lead researchers for scientific accuracy. Final output needed to meet specific color profile and resolution requirements for print.',
    approach: 'Worked directly with the research team to understand the precise molecular interactions. Developed multiple compositional sketches before settling on a dramatic close-up that emphasizes the precision of the editing process. Used cinematic lighting to create depth while maintaining biological accuracy.',
    deliverables: [
      'High-resolution cover image (300 DPI, CMYK)',
      'Digital version for online publication',
      'Social media assets for research promotion',
    ],
    tools: ['3D Molecular Modeling', 'Digital Painting', 'Color Grading'],
  },
  'neural-plasticity-study': {
    title: 'Neural Plasticity Study',
    category: 'Research Visualization',
    image: project02,
    goal: 'Develop a series of visualizations for a neuroscience research paper exploring synaptic plasticity and learning. The imagery needed to support the paper\'s findings while being accessible to a broad scientific audience.',
    constraints: 'Multiple figure requirements with consistent visual language. Needed to represent time-lapse data across different scales—from individual synapses to brain regions.',
    approach: 'Created a unified visual system with consistent color coding and lighting. Worked with the researchers through multiple revision cycles to ensure each visualization accurately represented their data. Balanced scientific precision with visual clarity.',
    deliverables: [
      'Main cover illustration',
      '6 supporting figures for publication',
      'Presentation slides for conference use',
    ],
    tools: ['Scientific Rendering', 'Data Visualization', 'Digital Illustration'],
  },
  'viral-structure-analysis': {
    title: 'Viral Structure Analysis',
    category: 'Scientific Illustration',
    image: project03,
    goal: 'Create detailed structural visualizations of a novel viral particle for an immunology research group. The images would be used in grant applications and subsequent publications.',
    constraints: 'Needed to accurately represent cryo-EM data while making the structure comprehensible. Multiple viewing angles required. Had to maintain consistency with existing literature on similar structures.',
    approach: 'Started with the raw structural data to build an accurate 3D model. Applied artistic interpretation to surface textures and lighting while keeping the underlying geometry scientifically precise. Created a viewing system that showed both overview and detail.',
    deliverables: [
      'Primary structural visualization',
      'Cross-section diagrams',
      'Animation frames for presentation',
    ],
    tools: ['Molecular Visualization', 'Surface Rendering', 'Technical Illustration'],
  },
};

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const project = slug ? projectsData[slug] : null;

  if (!project) {
    return <Navigate to="/work" replace />;
  }

  const projectSlugs = Object.keys(projectsData);
  const currentIndex = projectSlugs.indexOf(slug || '');
  const prevProject = currentIndex > 0 ? projectSlugs[currentIndex - 1] : null;
  const nextProject = currentIndex < projectSlugs.length - 1 ? projectSlugs[currentIndex + 1] : null;

  return (
    <Layout>
      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        imageSrc={project.image}
        imageAlt={project.title}
      />

      {/* Hero */}
      <section className="section-spacing pb-0">
        <div className="container-editorial">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-body-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Work
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-caption uppercase tracking-widest text-muted-foreground mb-4 block">
              {project.category}
            </span>
            <h1 className="text-display-lg font-display">
              {project.title}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Main Image */}
      <section className="mt-12 md:mt-16">
        <div className="container-editorial">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="cursor-zoom-in"
            onClick={() => setLightboxOpen(true)}
          >
            <div className="aspect-[16/10] overflow-hidden bg-secondary">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-4 text-caption text-muted-foreground text-center">
              Click to enlarge
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Study Content */}
      <section className="section-spacing">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Main Content */}
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-12"
              >
                <div>
                  <h2 className="text-display-sm font-display mb-4">Goal</h2>
                  <p className="text-body-md text-muted-foreground">{project.goal}</p>
                </div>

                <div>
                  <h2 className="text-display-sm font-display mb-4">Constraints</h2>
                  <p className="text-body-md text-muted-foreground">{project.constraints}</p>
                </div>

                <div>
                  <h2 className="text-display-sm font-display mb-4">Approach</h2>
                  <p className="text-body-md text-muted-foreground">{project.approach}</p>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-8"
              >
                <div>
                  <h3 className="text-caption uppercase tracking-widest text-muted-foreground mb-4">
                    Deliverables
                  </h3>
                  <ul className="space-y-2">
                    {project.deliverables.map((item) => (
                      <li key={item} className="text-body-sm text-foreground">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-caption uppercase tracking-widest text-muted-foreground mb-4">
                    Tools & Techniques
                  </h3>
                  <ul className="space-y-2">
                    {project.tools.map((item) => (
                      <li key={item} className="text-body-sm text-foreground">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="border-t border-border">
        <div className="container-editorial">
          <div className="grid grid-cols-2">
            {prevProject ? (
              <Link
                to={`/work/${prevProject}`}
                className="py-8 pr-4 group hover:bg-secondary/50 transition-colors border-r border-border"
              >
                <span className="text-caption uppercase tracking-widest text-muted-foreground mb-2 block">
                  Previous
                </span>
                <span className="text-body-lg font-display group-hover:text-primary transition-colors flex items-center gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  {projectsData[prevProject].title}
                </span>
              </Link>
            ) : (
              <div className="py-8 border-r border-border" />
            )}

            {nextProject ? (
              <Link
                to={`/work/${nextProject}`}
                className="py-8 pl-4 group hover:bg-secondary/50 transition-colors text-right"
              >
                <span className="text-caption uppercase tracking-widest text-muted-foreground mb-2 block">
                  Next
                </span>
                <span className="text-body-lg font-display group-hover:text-primary transition-colors flex items-center justify-end gap-2">
                  {projectsData[nextProject].title}
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ) : (
              <div className="py-8" />
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectDetail;
