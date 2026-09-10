import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Globe } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import wtnLogoWithText from "@/assets/wtn-logo-with-text.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Geometric Background */}
      <div className="absolute inset-0 geometric-pattern"></div>
      
      {/* Background Image with Modern Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Beautiful Nigerian cultural scene"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 hero-gradient"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="w-20 h-20 rounded-full bg-primary/10 shadow-primary"></div>
      </div>
      <div className="absolute bottom-32 right-16 animate-float" style={{ animationDelay: '2s' }}>
        <div className="w-16 h-16 rounded-full bg-accent/10 shadow-accent"></div>
      </div>
      <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '4s' }}>
        <div className="w-12 h-12 rounded-full bg-secondary/10 shadow-secondary"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto animate-fade-in">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-primary/20">
            <Sparkles className="h-4 w-4 text-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">Premium Nigerian Tourism Experience</span>
          </div>
          
          <img
            src={wtnLogoWithText}
            alt="Welcome to Nigeria Ltd"
            className="mx-auto h-24 w-24 mb-8 drop-shadow-2xl animate-float"
          />
        </div>
  
      
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-8 leading-tight">
        {/*
          Discover{" "}
          <span className="neon-text bg-gradient-primary bg-clip-text text-transparent">
            Nigeria's
          </span>
          <br />
          Hidden Wonders
        */}
        We Are Committed To Developing, Managing And Delivering Quality Services...
        </h1>

        <p className="text-lg md:text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed tracking-wide ">
  We are committed to developing, managing, and delivering quality services that reflect our dedication to excellence. 
  Through innovative solutions, efficient management, and precise delivery, we consistently exceed expectations, 
  build trust, and create sustainable value for our clients, partners, and stakeholders.
</p>


        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <Button 
            asChild 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-primary text-lg px-8 py-4 rounded-2xl transition-smooth group"
          >
            <Link to="/gallery" className="flex items-center gap-2">
              <Globe className="h-5 w-5" />
              Explore Gallery
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-smooth" />
            </Link>
          </Button>
          <Button 
            asChild 
            variant="outline" 
            size="lg"
            className="glass-effect border-primary/30 text-foreground hover:bg-primary/10 text-lg px-8 py-4 rounded-2xl transition-smooth group"
          >
            <Link to="/events" className="flex items-center gap-2">
              <Sparkles className="h-5 w-5" />
              View Events
            </Link>
          </Button>
        </div>

        {/* Modern Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-6 rounded-2xl glass-effect border border-primary/20 hover:shadow-primary transition-smooth group">
            <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-smooth">20+</div>
            <div className="text-muted-foreground">Public Partnerships</div>
          </div>
          <div className="text-center p-6 rounded-2xl glass-effect border border-accent/20 hover:shadow-accent transition-smooth group">
            <div className="text-4xl font-bold bg-gradient-accent bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-smooth">55+</div>
            <div className="text-muted-foreground">Private Partnership</div>
          </div>
          <div className="text-center p-6 rounded-2xl glass-effect border border-secondary/20 hover:shadow-secondary transition-smooth group">
            <div className="text-4xl font-bold text-secondary mb-2 group-hover:scale-110 transition-smooth">10+</div>
            <div className="text-muted-foreground">Years of Excellence</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-8 h-12 border-2 border-primary/50 rounded-full flex justify-center backdrop-blur-sm">
          <div className="w-1 h-4 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;