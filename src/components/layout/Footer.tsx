import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="container-editorial py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-4">
            <Link to="/" className="font-display text-xl font-medium">
              Industrial Magic
            </Link>
            <p className="mt-4 text-body-sm text-muted-foreground max-w-xs">
              Scientific cover art and research visualization with cinema-grade quality.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-2">
            <h4 className="text-caption uppercase tracking-widest text-muted-foreground mb-4">
              Navigate
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/work" className="text-body-sm text-foreground hover:text-primary transition-colors">
                  Work
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-body-sm text-foreground hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/process" className="text-body-sm text-foreground hover:text-primary transition-colors">
                  Process
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="md:col-span-2">
            <h4 className="text-caption uppercase tracking-widest text-muted-foreground mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-body-sm text-foreground hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-body-sm text-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h4 className="text-caption uppercase tracking-widest text-muted-foreground mb-4">
              Get in Touch
            </h4>
            <a 
              href="mailto:hello@industrialmagic.studio" 
              className="text-body-sm text-foreground hover:text-primary transition-colors"
            >
              hello@industrialmagic.studio
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-caption text-muted-foreground">
              Based in Italy · Working internationally
            </p>
            <p className="text-caption text-muted-foreground">
              © {currentYear} Industrial Magic. Independent studio, not affiliated with similarly named entities.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
