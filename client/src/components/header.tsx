import { Truck } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { Link } from "wouter";

export default function Header() {
  const whatsappNumber = "447900717881";
  const whatsappMessage = encodeURIComponent("Hi, I'd like to enquire about skip hire in Portsmouth.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <header className="bg-card border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-3" data-testid="link-header-home-logo">
            <Truck className="h-8 w-8 text-primary" />
            <div>
              <h2 className="text-xl font-bold text-foreground">Portsmouth Skips</h2>
              <p className="text-xs text-muted-foreground">Skip Hire Services</p>
            </div>
          </Link>

          <nav className="flex items-center gap-4 ml-auto mr-4" aria-label="Main">
            <Link href="/" className="text-sm font-medium hover:text-primary" data-testid="link-nav-home">Home</Link>
            <Link href="/blog" className="text-sm font-medium hover:text-primary" data-testid="link-nav-blog">Blog</Link>
          </nav>

          <div className="flex items-center gap-2">
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors font-medium"
              data-testid="link-header-whatsapp"
            >
              <SiWhatsapp className="h-4 w-4" />
              Message on WhatsApp
            </a>

            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="md:hidden text-green-600"
              data-testid="link-header-mobile-whatsapp"
            >
              <SiWhatsapp className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

