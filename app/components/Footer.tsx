import { Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <h3 className="font-bold">UT Dining</h3>
            <p className="text-sm text-muted-foreground">
              Making campus dining better for every Longhorn.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="font-bold">Product</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/downloads"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Downloads
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#reviews"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Reviews
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="font-bold">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/docs"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  About
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="font-bold">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/Longhorn-Developers/ut-dining-website"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} UT Dining. A Longhorn Developers
            Project.
          </p>
        </div>
      </div>
    </footer>
  );
}
