import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t border-border">
      <div className="container-lab py-12 md:py-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          {/* Studio Name */}
          <div>
            <Link 
              to="/" 
              className="font-display text-display-sm italic text-foreground hover:text-accent transition-colors duration-500"
            >
              Industrial Magic
            </Link>
            <p className="mt-4 text-body-sm text-muted-foreground max-w-xs">
              Visual interpretations of biological phenomena.
            </p>
          </div>

          {/* Minimal Links */}
          <div className="flex gap-8">
            <Link
              to="/work"
              className="text-caption uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors duration-500"
            >
              Work
            </Link>
            <Link
              to="/about"
              className="text-caption uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors duration-500"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-caption uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors duration-500"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Copyright - subtle */}
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-body-sm text-muted-foreground/60">
            © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
