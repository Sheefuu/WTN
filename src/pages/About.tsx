import { Heart, Globe, Award, Users, Sparkles, Target, Compass, Shield, TicketCheck, Leaf, LeafIcon, StarIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  const values = [
     { 
    title: "Authenticity & Cultural Integrity", 
    icon: Globe, 
    description: "Prioritizing true cultural exchange, respecting and celebrating local traditions and values.", 
    gradient: "from-primary to-accent" 
  },
  { 
    title: "Innovation & Creativity", 
    icon: Sparkles, 
    description: "Bringing fresh, memorable experiences through new technologies, artistry, and ideas.", 
    gradient: "from-secondary to-primary-glow" 
  },
  { 
    title: "Sustainability & Community Engagement", 
    icon: Leaf, 
    description: "Committed to preserving the environment and supporting local communities.", 
    gradient: "from-accent to-secondary" 
  },
  { 
    title: "Inclusive Experience", 
    icon: Users, 
    description: "Creating welcoming spaces that embrace diversity and ensure everyone feels valued.", 
    gradient: "from-secondary to-accent" 
  },
  { 
    title: "Excellence & Service", 
    icon: StarIcon, 
    description: "Delivering high-quality, personalized services that exceed expectations.", 
    gradient: "from-primary to-primary-glow" 
  }
  ];

  const team = [
    {
      name: "Isa Yusuf Sago",
      role: "President/CEO",
      bio: "",
      gradient: "from-primary to-accent"
    },
    {
      name: "Ataguba Aboje",
      role: "Company Secretary",
      bio: "",
      gradient: "from-secondary to-primary-glow"
    },
    {
      name: "Idris Orughu",
      role: "Executive Director - Project and Strategy Development",
      bio: "",
      gradient: "from-accent to-secondary"
    },
    {
      name: "Henry Ekhasomi",
      role: "Head, Finance and Accounts",
      bio: "",
      gradient: "from-secondary to-primary-glow"
    },
    {
      name: "Uwani A. Suleiman",
      role: "Head, Admin And Operations",
      bio: "",
      gradient: "from-accent to-secondary"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-primary/20">
            <Compass className="h-4 w-4 text-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">Our Story</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-8">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Wellcome to Nigeria Ltd</span>
          </h1>
          <div className="max-w-5xl mx-auto">
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Founded in 2009, WellcometoNigeria Ltd is a dynamic company at the forefront of tourism, cultural industries, and creative entertainment - dedicated to showcasing the richness of Nigeria and Africa to the world. 
            </p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <Card className="group glass-effect border border-primary/20 hover:border-primary/40 transition-smooth overflow-hidden">
            <div className="h-1 bg-gradient-primary"></div>
            <CardContent className="p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-primary p-0.5">
                  <div className="w-full h-full bg-card rounded-2xl flex items-center justify-center">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-primary">Our Mission</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg">
                At WellcometoNigeria Ltd, we are dedicated to curating exceptional travel experiences that honor the rich cultural heritage and creativity of every destination we serve. Through our innovative blend of hospitality, immersive cultural engagements, and world-class entertainment, we aim to foster authentic connections, support local communities, and inspire a deeper appreciation for the arts, history, and people of the world.
              </p>
            </CardContent>
          </Card>

          <Card className="group glass-effect border border-accent/20 hover:border-accent/40 transition-smooth overflow-hidden">
            <div className="h-1 bg-gradient-accent"></div>
            <CardContent className="p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-accent p-0.5">
                  <div className="w-full h-full bg-card rounded-2xl flex items-center justify-center">
                    <Sparkles className="h-6 w-6 text-accent" />
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-accent">Our Vision</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg">
               To be a leading global hub where tourism, hospitality, culture, and creative entertainment seamlessly blend, offering unforgettable experiences that celebrate diversity, inspire connection, and create lasting memories for travelers and local communities alike.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Values */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Core <span className="bg-gradient-primary bg-clip-text text-transparent">Values</span></h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">The principles that guide everything we do</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="group text-center glass-effect border border-border/50 hover:border-primary/30 transition-smooth overflow-hidden">
                  <CardContent className="p-8">
                    <div className="relative mb-6">
                      <div className={`w-20 h-20 mx-auto rounded-3xl bg-gradient-to-br ${value.gradient} p-0.5 group-hover:scale-110 transition-smooth`}>
                        <div className="w-full h-full bg-card rounded-3xl flex items-center justify-center">
                          <Icon className="h-10 w-10 text-foreground" />
                        </div>
                      </div>
                      <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-20 rounded-3xl blur-xl transition-smooth`}></div>
                    </div>
                    <h3 className="font-bold text-xl mb-4 text-foreground group-hover:text-primary transition-smooth">{value.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Story Section */}
        <div className="mb-20">
          <Card className="glass-effect border border-secondary/20 overflow-hidden">
            <div className="h-1 bg-gradient-to-r from-secondary to-accent"></div>
            <CardContent className="p-12">
              <div className="text-center mb-8">
                <h2 className="text-4xl font-bold mb-4 text-foreground flex items-center justify-center gap-3">
                  <Globe className="h-10 w-10 text-secondary" />
                  Our Story
                </h2>
              </div>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-8">
                <p className="text-lg leading-relaxed">
                  Founded in 2009, Wellcome to Nigeria Limited (WtNL) has become a leading force in showcasing Nigeria’s cultural richness, tourism potential, 
                  and creative industries to the world. From the start, our mission has been simple: to create experiences that inspire connection, celebrate heritage,
                   and leave lasting memories for travelers and communities alike.
                </p>
                <p className="text-lg leading-relaxed">
                  Over the years, we have grown into a trusted hub for tourism, hospitality, culture, and creative entertainment,
                  blending authenticity with innovation to deliver unforgettable journeys. Every project we undertake is guided by 
                  our commitment to sustainability, inclusivity, and excellence, ensuring that our impact is both meaningful and enduring.
                </p>
                <p className="text-lg leading-relaxed">
                  Today, WtNL is more than just a tourism company.
                  We are a cultural bridge — connecting Nigeria’s traditions with global audiences,
                  empowering local communities, and positioning our nation as one of the world’s most 
                  vibrant destinations for exploration, investment, and inspiration.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Meet Our <span className="bg-gradient-accent bg-clip-text text-transparent">Team</span></h2>
            <p className="text-xl text-muted-foreground">We are a powerhouse of expertise, creativity, and experience. At WelcometoNigeria Limited, 
            our team blends skill and vision to deliver innovative solutions, drive growth, and shape the future of tourism and enterprise in Nigeria.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {team.map((member, index) => (
              <Card key={index} className="group text-center glass-effect border border-border/50 hover:border-primary/30 transition-smooth overflow-hidden">
                <CardContent className="p-8">
                  <div className="relative mb-6">
                    <div className={`w-28 h-28 mx-auto rounded-full bg-gradient-to-br ${member.gradient} p-0.5 group-hover:scale-110 transition-smooth`}>
                      <div className="w-full h-full bg-card rounded-full flex items-center justify-center">
                        <span className="text-3xl font-bold text-foreground">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                    </div>
                    <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-20 rounded-full blur-xl transition-smooth`}></div>
                  </div>
                  <h3 className="font-bold text-xl mb-2 text-foreground group-hover:text-primary transition-smooth">{member.name}</h3>
                  <p className="text-primary font-medium mb-4">{member.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="text-center">
          <Card className="glass-effect border border-primary/20 overflow-hidden">
            <div className="h-2 bg-gradient-hero"></div>
            <CardContent className="p-12">
              <div className="mb-8">
                <h2 className="text-4xl font-bold mb-4 text-foreground flex items-center justify-center gap-3">
                  <Shield className="h-10 w-10 text-primary" />
                  Our Impact in Numbers
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="group">
                  <div className="text-5xl font-bold mb-3 bg-gradient-primary bg-clip-text text-transparent group-hover:scale-110 transition-smooth">10+</div>
                  <div className="text-muted-foreground font-medium">Years of Excellence</div>
                </div>
                <div className="group">
                  <div className="text-5xl font-bold mb-3 bg-gradient-accent bg-clip-text text-transparent group-hover:scale-110 transition-smooth">5,000+</div>
                  <div className="text-muted-foreground font-medium">Happy Travelers</div>
                </div>
                <div className="group">
                  <div className="text-5xl font-bold mb-3 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent group-hover:scale-110 transition-smooth">100+</div>
                  <div className="text-muted-foreground font-medium">Cultural Events</div>
                </div>
                <div className="group">
                  <div className="text-5xl font-bold mb-3 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent group-hover:scale-110 transition-smooth">50+</div>
                  <div className="text-muted-foreground font-medium">Community Partners</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;