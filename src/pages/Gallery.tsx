import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Image as ImageIcon, Filter } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Gallery = () => {
  const [galleryItems, setGalleryItems] = useState<any[]>([]);
  const [activeCategory, setActiveCategory] = useState("All");

  // Fetch gallery items from WordPress
  useEffect(() => {
    fetch("http://localhost/wordpress/wordpress/wp-json/wp/v2/gallery?_embed")
      .then((res) => res.json())
      .then((data) => {
        const items = data.map((item: any) => ({
          id: item.id,
          title: item.title.rendered,
          description: item.content.rendered.replace(/<[^>]+>/g, ""), // remove HTML tags
          image: item._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "",
          category: item._embedded?.["wp:term"]?.[0]?.[0]?.name || "Uncategorized",
          gradient: "from-primary to-accent",
        }));
        setGalleryItems(items);
      })
      .catch((err) => console.error("Error fetching gallery:", err));
  }, []);

  const categories = ["All", ...new Set(galleryItems.map((i) => i.category))];

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-primary/20">
            <ImageIcon className="h-4 w-4 text-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">Visual Journey</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Gallery</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Journey through extraordinary moments and authentic experiences we’ve crafted.
            From vibrant cultural celebrations to breathtaking landscapes —
            witness Nigeria&apos;s magic through our lens.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 overflow-x-auto">
          <div className="inline-flex items-center gap-1.5 bg-muted/20 backdrop-blur-sm rounded-full px-3 py-1 border border-border/20">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <span className="text-xs font-medium text-muted-foreground">Filter by category</span>
          </div>

          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`relative px-4 py-2 rounded-xl text-xs md:text-sm font-medium transition-smooth group ${
                activeCategory === category
                  ? "bg-gradient-to-r from-primary to-accent text-white shadow-glow"
                  : "glass-effect border border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/30"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredItems.map((item) => (
            <Dialog key={item.id}>
              <DialogTrigger asChild>
                <Card className="group cursor-pointer glass-effect border border-border/50 hover:border-primary/30 transition-smooth overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-smooth duration-700"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className={`bg-gradient-to-r ${item.gradient} text-white border-none shadow-lg`}>
                        {item.category}
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-smooth">
                      <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                      <p className="text-sm text-white/80 line-clamp-2">{item.description}</p>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl mb-3 text-foreground group-hover:text-primary transition-smooth">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[90vh] p-0 glass-effect">
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-auto max-h-[70vh] object-contain rounded-t-xl"
                  />
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <Badge className={`bg-gradient-to-r ${item.gradient} text-white border-none shadow-lg`}>
                        <Sparkles className="h-3 w-3 mr-1" />
                        {item.category}
                      </Badge>
                    </div>
                    <h3 className="font-bold text-3xl mb-4 text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">{item.description}</p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Gallery;
