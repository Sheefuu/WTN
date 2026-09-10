import { Building, FileText, Shield, Phone, Mail, MapPin, Sparkles, Award, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Company = () => {
  const services = [
    { 
      title: "Tourism Research Services", 
      description: "Market analysis, visitor profiling, and impact studies to guide sustainable tourism growth.", 
      gradient: "from-primary to-accent" 
    },
    { 
      title: "Tourism Marketing & Branding Solutions", 
      description: "Branding, digital campaigns, and storytelling that attract visitors and boost visibility.", 
      gradient: "from-secondary to-primary-glow" 
    },
    { 
      title: "Travel And Tour Services", 
      description: "Seamless travel experiences with transport, accommodation, tours, and visa assistance.", 
      gradient: "from-accent to-secondary" 
    },
    { 
      title: "Festival and Carnival Packaging, Promotion and Marketing", 
      description: "Comprehensive event packaging, promotions, and marketing for impactful cultural celebrations.", 
      gradient: "from-primary to-secondary" 
    },
    { 
      title: "Hospitality Management Services", 
      description: "Hotel, food, event, and staff management systems ensuring excellence in guest experiences.", 
      gradient: "from-secondary to-accent" 
    },
    { 
      title: "Destination Development and Management Services", 
      description: "Strategic planning, infrastructure, and branding to create sustainable tourism destinations.", 
      gradient: "from-primary to-primary-glow" 
    },
    { 
      title: "Cultural Industries Development and Preservation Services", 
      description: "Training, heritage conservation, and cultural promotion to preserve Nigeria’s identity.", 
      gradient: "from-accent to-secondary" 
    }
  ];

  const domains = [
    { 
      title: "Culture and Creative Entertainment Services", 
      description: "Performing arts, film, music, fashion, and digital media that educate, inspire, and entertain.", 
      gradient: "from-primary to-secondary" 
    }
  ];

  const projects = [
    { 
      title: "Welcome To Nigeria Magazine", 
      description: "A digital and print publication showcasing Nigeria’s hidden gems, travel itineraries, and cultural insights.", 
      gradient: "from-secondary to-primary-glow" 
    }
  ];

  const certifications = [
    "Nigerian Tourism Development Corporation (NTDC) Licensed",
    "Lagos State Tourism Board Certified", 
    "International Air Transport Association (IATA) Member",
    "Nigeria Association of Tour Operators (NATOP) Member",
    "ISO 9001:2015 Quality Management Certified"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-primary/20">
            <Building className="h-4 w-4 text-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">Corporate Details</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Company</span> Information
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Discover Welcome to Nigeria Limited - our comprehensive services, professional credentials, 
            and unwavering commitment to excellence in Nigerian tourism.
          </p>
        </div>

        {/* Services */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Our <span className="bg-gradient-accent bg-clip-text text-transparent">Services</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group glass-effect border border-border/50 hover:border-primary/30 transition-smooth overflow-hidden">
                <div className={`h-1 bg-gradient-to-r ${service.gradient}`}></div>
                <CardContent className="p-8">
                  <h3 className="font-bold text-xl mb-4 text-foreground group-hover:text-primary transition-smooth">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Company Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <Card className="glass-effect border border-primary/20 overflow-hidden">
            <div className="h-1 bg-gradient-primary"></div>
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Building className="h-6 w-6 mr-3 text-primary" />
                Company Overview
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {[
                { label: "Legal Name", value: "Wellcome to Nigeria Limited" },
                { label: "Registration Number", value: "RC 831746" },
                { label: "Founded", value: "2009" },
                { 
                  label: "Headquarters", 
                  value: (
                    <div className="text-muted-foreground text-sm leading-relaxed space-y-1">
                      <p>Plot 1234, Angels Plaza</p>
                      <p>Samuel Ladoke Akintola Boulevard</p>
                      <p>Garki II, Abuja, Nigeria</p>
                    </div>
                  ) 
                },
                { label: "Industry", value: "Tourism and Hospitality" },
                { label: "Employees", value: "8+ Full-time Staff" }
              ].map((item, index) => (
                <div key={index} className="p-3 glass-effect rounded-lg border border-border/30">
                  <h3 className="font-semibold text-foreground mb-1">{item.label}</h3>
                  {typeof item.value === "string" ? (
                    <p className="text-muted-foreground">{item.value}</p>
                  ) : (
                    item.value
                  )}
                </div>
              ))}
            </CardContent>  
          </Card>

          <Card className="glass-effect border border-accent/20 overflow-hidden">
            <div className="h-1 bg-gradient-accent"></div>
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Award className="h-6 w-6 mr-3 text-accent" />
                Certifications & Licenses
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-start p-3 glass-effect rounded-lg border border-border/30">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 mr-3 flex-shrink-0" />
                    <p className="text-muted-foreground">{cert}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact CTA */}
        <div className="text-center p-12 glass-effect rounded-3xl border border-primary/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
          <div className="relative">
            <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-primary/20">
              <Sparkles className="h-4 w-4 text-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">Get In Touch</span>
            </div>
            <h2 className="text-4xl font-bold mb-6 text-foreground">Ready to Start Your <span className="bg-gradient-primary bg-clip-text text-transparent">Nigerian Adventure?</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="text-center p-6 glass-effect rounded-2xl border border-primary/20">
                <MapPin className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-lg mb-2 text-foreground">Visit Us</h3>
                <div className="text-muted-foreground text-sm leading-relaxed space-y-1">
                  <p>Plot 1234, Angels Plaza</p>
                  <p>Samuel Ladoke Akintola Boulevard</p>
                  <p>Garki II, Abuja, Nigeria</p>
                </div>
              </div>
              <div className="text-center p-6 glass-effect rounded-2xl border border-accent/20">
                <Phone className="h-8 w-8 text-accent mx-auto mb-3" />
                <h3 className="font-semibold text-lg mb-2 text-foreground">Call Us</h3>
                <p className="text-muted-foreground text-sm">+234 (0) 809 643 0859</p>
              </div>
              <div className="text-center p-6 glass-effect rounded-2xl border border-secondary/20">
                <Mail className="h-8 w-8 text-secondary mx-auto mb-3" />
                <h3 className="font-semibold text-lg mb-2 text-foreground">Email Us</h3>
                <div className="text-muted-foreground text-sm leading-relaxed space-y-1">
                  <p>info@welcometonigeria.org</p>
                  <p>welcome2nigeria@yahoo.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Company;
