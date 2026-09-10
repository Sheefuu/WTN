import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Camera, Calendar, MapPin, Users, Sparkles, Target, Shield } from "lucide-react";

const Index = () => {
  const highlights = [
    {
      icon: Camera,
      title: "Photo Gallery",
      description: "Browse our stunning collection of cultural events, scenic destinations, and happy travelers.",
      link: "/gallery",
      gradient: "from-primary to-primary-glow"
    },
    {
      icon: Calendar,
      title: "Upcoming Events",
      description: "Join our exciting cultural festivals, food tours, and adventure expeditions.",
      link: "/events",
      gradient: "from-accent to-pink-500"
    },
    {
      icon: MapPin,
      title: "Our Story",
      description: "We have come a long way as Nigeria's prime tourism development and promotion company, our story is deep and inspiring",
      link: "/about",
      gradient: "from-secondary to-purple-500"
    },
    {
      icon: Users,
      title: "About Our Company",
      description: "Get to know our team, services, and commitment to excellence in tourism.",
      link: "/company",
      gradient: "from-green-500 to-blue-500"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      
      {/* Highlights Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 geometric-pattern opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-primary/20">
              <Sparkles className="h-4 w-4 text-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">Discover Our Offerings</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Explore Our <span className="bg-gradient-primary bg-clip-text text-transparent">Buisness Goals</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Guided by clarity of purpose, our business goals chart a forward-looking roadmap to harness opportunities, redefine innovation, and build enduring stakeholder value
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <Card key={index} className="group relative overflow-hidden glass-effect border border-border/50 hover:border-primary/30 transition-smooth">
                  <div className={`absolute inset-0 bg-gradient-to-br ${highlight.gradient} opacity-0 group-hover:opacity-5 transition-smooth`}></div>
                  <CardContent className="p-8 text-center relative">
                    <div className="mb-6 relative">
                      <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${highlight.gradient} p-0.5 group-hover:scale-110 transition-smooth`}>
                        <div className="w-full h-full bg-card rounded-2xl flex items-center justify-center">
                          <Icon className="h-8 w-8 text-foreground" />
                        </div>
                      </div>
                    </div>
                    <h3 className="font-bold text-xl mb-4 text-foreground group-hover:text-primary transition-smooth">{highlight.title}</h3>
                    <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                      {highlight.description}
                    </p>
                    <Button asChild variant="outline" className="glass-effect border-primary/20 hover:bg-primary/10 hover:border-primary/40 rounded-xl group-hover:shadow-glow transition-smooth">
                      <Link to={highlight.link} className="flex items-center gap-2">
                        Explore
                        <span className="group-hover:translate-x-1 transition-smooth">→</span>
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Why Choose <span className="bg-gradient-accent bg-clip-text text-transparent">Welcome to Nigeria?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-24 h-24 mx-auto rounded-3xl bg-gradient-to-br from-secondary to-accent p-0.5 group-hover:scale-110 transition-smooth">
                  <div className="w-full h-full bg-card rounded-3xl flex items-center justify-center">
                    <Target className="h-12 w-12 text-foreground" />
                  </div>
                </div>
                <div className="absolute inset-0 bg-yellow-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-smooth"></div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-yellow-400 transition-smooth">Award-Winning Service</h3>
              <p className="text-muted-foreground leading-relaxed">
                Over the years WTNL has been gained recognition for excellence in tourism for creating 
                life-changing experiences and unforgettable memories.
              </p>
            </div>

            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-24 h-24 mx-auto rounded-3xl bg-gradient-primary p-0.5 group-hover:scale-110 transition-smooth">
                  <div className="w-full h-full bg-card rounded-3xl flex items-center justify-center">
                    <Sparkles className="h-12 w-12 text-foreground" />
                  </div>
                </div>
                <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-smooth"></div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-smooth">Authentic Experiences</h3>
              <p className="text-muted-foreground leading-relaxed">
                We connect our clienteles with traditional Nigerian experience, locally-guided processes that delivers
                authentic satisfaction beyond their expectations.
              </p>
            </div>

            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-24 h-24 mx-auto rounded-3xl bg-gradient-to-br from-primary to-accent p-0.5 group-hover:scale-110 transition-smooth">
                  <div className="w-full h-full bg-card rounded-3xl flex items-center justify-center">
                    <Shield className="h-12 w-12 text-foreground" />
                  </div>
                </div>
                <div className="absolute inset-0 bg-green-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-smooth"></div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-green-400 transition-smooth">Sustainable Tourism</h3>
              <p className="text-muted-foreground leading-relaxed">
                We are committed to eco-friendly practices and supporting local communities 
                while preserving cultural heritage for future generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
