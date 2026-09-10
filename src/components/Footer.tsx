import { MapPin, Phone, Mail, Clock, Zap} from "lucide-react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // Twitter’s new X logo
import { Link } from "react-router-dom";
import wtnLogo from "@/assets/wtn-logo-with-text.png";
const Footer = () => {
  return (
    <footer className="relative bg-card border-t border-border">
      {/* Geometric pattern background */}
      <div className="absolute inset-0 geometric-pattern opacity-30"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <img src={wtnLogo} alt="Welcome to Nigeria" className="h-12 w-12" />
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg"></div>
              </div>
              <div>
                <span className="font-bold text-xl text-foreground">Wellcome to Nigeria Limited</span>
                {/*<div className="text-sm text-muted-foreground">Limited</div>*/}
              </div>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
              Our commitment are profound, because we deliver landmark projects, that truely speaks to the Nigerian values and experience.
            </p>
<div className="flex space-x-4">
  <a 
    href="https://www.facebook.com/profile.php?id=61580123761200" 
    target="_blank" 
    rel="noopener noreferrer"
    className="w-12 h-12 glass-effect rounded-xl flex items-center justify-center border border-primary/20 hover:border-primary/40 transition-smooth cursor-pointer group"
  >
    <FaFacebookF className="h-6 w-6 text-primary group-hover:scale-110 transition-smooth" />
  </a>

  <a 
    href="https://x.com/WelcometoNig?s=09" 
    target="_blank" 
    rel="noopener noreferrer"
    className="w-12 h-12 glass-effect rounded-xl flex items-center justify-center border border-accent/20 hover:border-accent/40 transition-smooth cursor-pointer group"
  >
    <FaXTwitter className="h-6 w-6 text-accent group-hover:scale-110 transition-smooth" />
  </a>

  <a 
    href="https://linkedin.com/company/YourPage" 
    target="_blank" 
    rel="noopener noreferrer"
    className="w-12 h-12 glass-effect rounded-xl flex items-center justify-center border border-secondary/20 hover:border-secondary/40 transition-smooth cursor-pointer group"
  >
    <FaLinkedinIn className="h-6 w-6 text-secondary group-hover:scale-110 transition-smooth" />
  </a>
</div>


          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-foreground flex items-center gap-2">
              <Zap className="h-5 w-5 text-primary" />
              Contact Us
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group">
                <MapPin className="h-5 w-5 text-primary mt-0.5 group-hover:scale-110 transition-smooth" />
                <div>
                  <p className="text-sm text-foreground">Plot 1234, Angels Plaza, <br/>Samuel Ladoke Akintola Boulevard,<br/>Garki II, Abuja, Nigeria </p>
                  {/*<p className="text-sm text-muted-foreground">Nigeria</p>*/}
                </div>
              </div>
              <div className="flex items-center space-x-3 group">
                <Phone className="h-5 w-5 text-primary group-hover:scale-110 transition-smooth" />
                <p className="text-sm text-foreground">+234 (0) 809 643 0859</p>
              </div>
              <div className="flex items-center space-x-3 group">
                <Mail className="h-5 w-5 text-primary group-hover:scale-110 transition-smooth" />
                <p className="text-sm text-foreground">info@welcometonigeria.org<br/>welcome2nigeria@yahoo.com</p>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-foreground flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              Business Hours
            </h3>
            <div className="space-y-3">
              <div className="p-3 glass-effect rounded-lg border border-border/50">
                <p className="text-sm font-medium text-foreground">Mon - Fri</p>
                <p className="text-sm text-muted-foreground">8:30 AM - 5:30 PM</p>
              </div>
              <div className="p-3 glass-effect rounded-lg border border-border/50">
                <p className="text-sm font-medium text-foreground">Saturday</p>
                <p className="text-sm text-muted-foreground">8:30 AM - 5:30 PM</p>
              </div>
              <div className="p-3 glass-effect rounded-lg border border-border/50">
                <p className="text-sm font-medium text-foreground">Sunday</p>
                <p className="text-sm text-muted-foreground">Closed</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 mt-12 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 Welcome to Nigeria Ltd. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm">
              <Link to="/terms-and-conditions" className="text-muted-foreground hover:text-primary transition-smooth">
                Terms &amp; Conditions
              </Link>
              <Link to="/privacy-policy" className="text-muted-foreground hover:text-primary transition-smooth">
                Privacy Policy
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Proudly Nigerian</span>
              <span className="text-lg animate-pulse">🇳🇬</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;