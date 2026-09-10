import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import wtnLogo from "@/assets/wtn-logo-with-text.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Gallery", path: "/gallery" },
    { name: "Events", path: "/events" },
    { name: "About Us", path: "/about" },
    { name: "Company Info", path: "/company" },
  ];

  return (
    <nav className="glass-effect sticky top-0 z-50 border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <img src={wtnLogo} alt="Welcome to Nigeria" className="h-10 w-10 transition-smooth group-hover:scale-110" />
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-smooth"></div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-foreground group-hover:text-primary transition-smooth">
                Wellcome to Nigeria Limited
              </span>
              {/*<span className="text-xs text-muted-foreground -mt-1">Limited</span>*/}
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-smooth group ${
                    isActive(item.path)
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <span className="relative z-10">{item.name}</span>
                  {isActive(item.path) ? (
                    <div className="absolute inset-0 bg-primary/10 rounded-xl shadow-glow"></div>
                  ) : (
                    <div className="absolute inset-0 bg-muted/5 rounded-xl opacity-0 group-hover:opacity-100 transition-smooth"></div>
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-foreground hover:text-primary"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card/50 rounded-xl mt-2 backdrop-blur-sm border border-border/50">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-smooth ${
                    isActive(item.path)
                      ? "bg-primary/10 text-primary shadow-glow"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/5"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;