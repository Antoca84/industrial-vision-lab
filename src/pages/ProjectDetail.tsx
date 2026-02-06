import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import Lightbox from '@/components/Lightbox';

import project01 from '@/assets/project-01.jpg';
import project02 from '@/assets/project-02.jpg';
import project03 from '@/assets/project-03.jpg';

// Project data with narrative case study structure
const projectsData: Record<string, {
  title: string;
  category: string;
  image: string;
  scientificQuestion: string;
  visualStrategy: string;
  whyThisStyle: string;
  outcome: string;
  deliverables: string[];
  techniques: string[];
}> = {
  'gene-therapy-mechanism': {
    title: 'Gene Therapy Mechanism',
    category: 'Journal Cover',
    image: project01,
    scientificQuestion: 'How can we visualize the precise molecular choreography of CRISPR-Cas9 gene editing in a way that communicates both its elegance and its clinical significance?',
    visualStrategy: 'We approached this as a cinematic moment — capturing the exact instant of molecular intervention. Working directly with the research team, we mapped the structural data onto a dramatic close-up composition that emphasizes the surgical precision of the editing process.',
    whyThisStyle: 'The cinematic lighting and depth-of-field create emotional resonance that pure scientific diagrams cannot achieve. This visual language helps the research reach audiences beyond specialists — editorial boards, grant committees, science communicators — while maintaining complete biological accuracy.',
    outcome: 'The cover image became the most shared visual from the publication, featured across scientific media and social channels. It demonstrated that scientific precision and visual impact are not opposing forces.',
    deliverables: [
      'High-resolution cover image (300 DPI, CMYK)',
      'Digital version for online publication',
      'Social media assets for research promotion',
    ],
    techniques: ['Molecular modeling', 'Cinematic lighting', 'Editorial color grading'],
  },
  'neural-plasticity-study': {
    title: 'Neural Plasticity Study',
    category: 'Research Visualization',
    image: project02,
    scientificQuestion: 'The research explored synaptic plasticity across multiple scales — from individual synapses to brain regions. How do you create a unified visual language that maintains scientific clarity while connecting these different perspectives?',
    visualStrategy: 'We developed a coherent visual system with consistent color coding, lighting direction, and compositional rules. Each figure functions independently while contributing to a larger narrative. The challenge was balancing data accuracy with visual accessibility.',
    whyThisStyle: 'Neuroscience imagery often falls into two traps: overly abstract diagrams or hyperrealistic renders that obscure the science. Our approach sits between — graphic-novel-inspired clarity with dimensional depth that guides the viewer through complex information.',
    outcome: 'The visualization series was adopted for conference presentations and educational materials, extending the research impact beyond the original publication.',
    deliverables: [
      'Main cover illustration',
      '6 supporting figures for publication',
      'Presentation slides for conference use',
    ],
    techniques: ['Data visualization', 'Scientific rendering', 'Systematic design'],
  },
  'viral-structure-analysis': {
    title: 'Viral Structure Analysis',
    category: 'Scientific Illustration',
    image: project03,
    scientificQuestion: 'Cryo-EM data reveals extraordinary structural detail, but how do you translate raw data into imagery that communicates to non-specialists while satisfying experts?',
    visualStrategy: 'Starting from the structural data, we built an accurate 3D model and applied interpretive choices — surface textures, lighting, color — that enhance comprehension without distorting the science. Multiple viewing angles reveal both overview and molecular detail.',
    whyThisStyle: 'The VFX-informed aesthetic signals credibility and contemporary relevance. These are not stock-image microbes; they are specific, carefully researched representations that could only come from deep engagement with the actual research.',
    outcome: 'The visualizations supported successful grant applications and subsequent publications, providing a consistent visual identity for the research program.',
    deliverables: [
      'Primary structural visualization',
      'Cross-section diagrams',
      'Animation frames for presentation',
    ],
    techniques: ['Cryo-EM interpretation', 'Surface rendering', 'Multi-angle visualization'],
  },
  // Add matching slugs for Work page projects
  'cellular-interaction-study': {
    title: 'Cellular Interaction Study',
    category: 'Graphic-novel scientific illustration',
    image: project01,
    scientificQuestion: 'How can we visualize the precise molecular choreography of CRISPR-Cas9 gene editing in a way that communicates both its elegance and its clinical significance?',
    visualStrategy: 'We approached this as a cinematic moment — capturing the exact instant of molecular intervention. Working directly with the research team, we mapped the structural data onto a dramatic close-up composition that emphasizes the surgical precision of the editing process.',
    whyThisStyle: 'The cinematic lighting and depth-of-field create emotional resonance that pure scientific diagrams cannot achieve. This visual language helps the research reach audiences beyond specialists — editorial boards, grant committees, science communicators — while maintaining complete biological accuracy.',
    outcome: 'The cover image became the most shared visual from the publication, featured across scientific media and social channels. It demonstrated that scientific precision and visual impact are not opposing forces.',
    deliverables: [
      'High-resolution cover image (300 DPI, CMYK)',
      'Digital version for online publication',
      'Social media assets for research promotion',
    ],
    techniques: ['Molecular modeling', 'Cinematic lighting', 'Editorial color grading'],
  },
  'molecular-mechanism-visualization': {
    title: 'Molecular Mechanism Visualization',
    category: 'Cinematic biological rendering',
    image: project02,
    scientificQuestion: 'The research explored synaptic plasticity across multiple scales — from individual synapses to brain regions. How do you create a unified visual language that maintains scientific clarity while connecting these different perspectives?',
    visualStrategy: 'We developed a coherent visual system with consistent color coding, lighting direction, and compositional rules. Each figure functions independently while contributing to a larger narrative. The challenge was balancing data accuracy with visual accessibility.',
    whyThisStyle: 'Neuroscience imagery often falls into two traps: overly abstract diagrams or hyperrealistic renders that obscure the science. Our approach sits between — graphic-novel-inspired clarity with dimensional depth that guides the viewer through complex information.',
    outcome: 'The visualization series was adopted for conference presentations and educational materials, extending the research impact beyond the original publication.',
    deliverables: [
      'Main cover illustration',
      '6 supporting figures for publication',
      'Presentation slides for conference use',
    ],
    techniques: ['Data visualization', 'Scientific rendering', 'Systematic design'],
  },
  'protein-structure-interpretation': {
    title: 'Protein Structure Interpretation',
    category: 'Editorial cover art',
    image: project03,
    scientificQuestion: 'Cryo-EM data reveals extraordinary structural detail, but how do you translate raw data into imagery that communicates to non-specialists while satisfying experts?',
    visualStrategy: 'Starting from the structural data, we built an accurate 3D model and applied interpretive choices — surface textures, lighting, color — that enhance comprehension without distorting the science. Multiple viewing angles reveal both overview and molecular detail.',
    whyThisStyle: 'The VFX-informed aesthetic signals credibility and contemporary relevance. These are not stock-image microbes; they are specific, carefully researched representations that could only come from deep engagement with the actual research.',
    outcome: 'The visualizations supported successful grant applications and subsequent publications, providing a consistent visual identity for the research program.',
    deliverables: [
      'Primary structural visualization',
      'Cross-section diagrams',
      'Animation frames for presentation',
    ],
    techniques: ['Cryo-EM interpretation', 'Surface rendering', 'Multi-angle visualization'],
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

      {/* Hero - Cinematic Full Bleed */}
      <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-end pb-12 md:pb-20">
        <div 
          className="absolute inset-0 cursor-zoom-in"
          onClick={() => setLightboxOpen(true)}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
        </div>

        <div className="container-editorial relative z-10">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-body-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Work
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-overline uppercase text-muted-foreground mb-4">
              {project.category}
            </p>
            <h1 className="text-display-xl font-display max-w-4xl">
              {project.title}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Narrative Case Study */}
      <section className="section-spacing">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
            {/* Main Narrative */}
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-16"
              >
                <div>
                  <h2 className="text-overline uppercase text-muted-foreground mb-4">
                    The Scientific Question
                  </h2>
                  <p className="text-body-xl leading-relaxed">{project.scientificQuestion}</p>
                </div>

                <div>
                  <h2 className="text-overline uppercase text-muted-foreground mb-4">
                    Visual Strategy
                  </h2>
                  <p className="text-body-lg text-muted-foreground leading-relaxed">{project.visualStrategy}</p>
                </div>

                <div>
                  <h2 className="text-overline uppercase text-muted-foreground mb-4">
                    Why This Style
                  </h2>
                  <p className="text-body-lg text-muted-foreground leading-relaxed">{project.whyThisStyle}</p>
                </div>

                <div>
                  <h2 className="text-overline uppercase text-muted-foreground mb-4">
                    Outcome
                  </h2>
                  <p className="text-body-lg leading-relaxed font-medium">{project.outcome}</p>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <motion.div
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-12 lg:sticky lg:top-32"
              >
                <div>
                  <h3 className="text-overline uppercase text-muted-foreground mb-6">
                    Deliverables
                  </h3>
                  <ul className="space-y-3">
                    {project.deliverables.map((item) => (
                      <li key={item} className="text-body-sm text-foreground border-l-2 border-muted pl-4">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-overline uppercase text-muted-foreground mb-6">
                    Techniques
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.techniques.map((item) => (
                      <span 
                        key={item} 
                        className="text-caption px-3 py-1.5 bg-secondary text-secondary-foreground"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation - Cinematic */}
      <section className="border-t border-border">
        <div className="container-editorial">
          <div className="grid grid-cols-2 divide-x divide-border">
            {prevProject ? (
              <Link
                to={`/work/${prevProject}`}
                className="py-12 pr-8 group transition-colors hover:bg-secondary/30"
              >
                <p className="text-overline uppercase text-muted-foreground mb-3">
                  Previous
                </p>
                <p className="text-display-sm font-display flex items-center gap-3 group-hover:text-primary transition-colors">
                  <ArrowLeft className="w-5 h-5" />
                  <span className="truncate">{projectsData[prevProject].title}</span>
                </p>
              </Link>
            ) : (
              <div className="py-12" />
            )}

            {nextProject ? (
              <Link
                to={`/work/${nextProject}`}
                className="py-12 pl-8 text-right group transition-colors hover:bg-secondary/30"
              >
                <p className="text-overline uppercase text-muted-foreground mb-3">
                  Next
                </p>
                <p className="text-display-sm font-display flex items-center justify-end gap-3 group-hover:text-primary transition-colors">
                  <span className="truncate">{projectsData[nextProject].title}</span>
                  <ArrowRight className="w-5 h-5" />
                </p>
              </Link>
            ) : (
              <div className="py-12" />
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectDetail;
