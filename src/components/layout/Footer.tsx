import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container-editorial py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Brand Statement */}
          <div className="md:col-span-6">
            <Link to="/" className="font-display text-2xl font-medium block mb-6">
              Industrial Magic
            </Link>
            <p className="text-body-lg text-muted-foreground max-w-md leading-relaxed">
              Scientific visualization with cinematic expression. Visual narratives for biological research.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <h4 className="text-overline uppercase text-muted-foreground mb-6">
              Navigate
            </h4>
            <ul className="space-y-4">
              <li>
                <Link to="/work" className="text-body-sm text-foreground hover:text-primary transition-colors inline-flex items-center gap-1 group">
                  Work
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-body-sm text-foreground hover:text-primary transition-colors inline-flex items-center gap-1 group">
                  Services
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-body-sm text-foreground hover:text-primary transition-colors inline-flex items-center gap-1 group">
                  About
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-body-sm text-foreground hover:text-primary transition-colors inline-flex items-center gap-1 group">
                  Contact
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h4 className="text-overline uppercase text-muted-foreground mb-6">
              Get in Touch
            </h4>
            <a 
              href="mailto:hello@industrialmagic.it" 
              className="text-body-sm text-foreground hover:text-primary transition-colors"
            >
              hello@industrialmagic.it
            </a>
            <p className="mt-6 text-body-sm text-muted-foreground">
              Based in Italy<br />
              Working internationally
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border">
          <p className="text-caption text-muted-foreground">
            © {currentYear} Industrial Magic. Independent studio.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
