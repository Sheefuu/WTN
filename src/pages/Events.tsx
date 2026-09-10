// src/pages/Events.tsx
import { useEffect, useMemo, useState } from "react";
import { Calendar, MapPin, Clock, Users, Sparkles, Star, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// ⚠️ Set this to your local WordPress base URL.
const WP_BASE = "http://localhost/wordpress/wordpress";

type WpEvent = {
  id: number;
  title?: { rendered?: string };
  content?: { rendered?: string };
  meta?: {
    event_date?: string;
    event_time?: string;
    event_location?: string;
    event_price?: string;      // keep as string for "₦15,000"
    event_capacity?: number;
    event_featured?: boolean | number | string; // WP can send "1"/"0"
    event_ts?: number;
  };
  _embedded?: {
    ["wp:term"]?: Array<Array<{
      id: number;
      name: string;
      taxonomy: string; // "event_category"
      slug: string;
    }>>;
  };
};

export default function Events() {
  const [events, setEvents] = useState<WpEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        setErr(null);
        // _embed=1 so we can read taxonomy terms
        const res = await fetch(`${WP_BASE}/wp-json/wp/v2/event?per_page=50&_embed=1`);
        if (!res.ok) throw new Error(`WP API error ${res.status}`);
        const data = (await res.json()) as WpEvent[];
        setEvents(data || []);
      } catch (e: any) {
        setErr(e?.message || "Failed to load events");
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const featured = useMemo(() => events.filter((e) => isFeatured(e.meta?.event_featured)), [events]);
  const nonFeatured = useMemo(() => events.filter((e) => !isFeatured(e.meta?.event_featured)), [events]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-primary/20">
            <Calendar className="h-4 w-4 text-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">Adventure Awaits</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Upcoming <span className="bg-gradient-primary bg-clip-text text-transparent">Events</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Embark on extraordinary adventures and immersive cultural experiences.
            Reserve your spot today and discover Nigeria&apos;s magic with fellow explorers.
          </p>
        </div>

        {/* Errors / Loading */}
        {err && (
          <div className="mb-8 p-4 rounded-xl border border-red-200 text-red-700 bg-red-50">
            Couldn&apos;t load events: {err}
          </div>
        )}
        {loading && (
          <div className="mb-8 text-muted-foreground">Loading events…</div>
        )}

        {/* Featured Events */}
        {!loading && featured.length > 0 && (
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="flex items-center gap-2">
                <Star className="h-6 w-6 text-secondary fill-current" />
                <h2 className="text-3xl font-bold text-foreground">Featured Events</h2>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featured.map((event) => {
                const title = decodeEntitiesSafe(event.title?.rendered);
                const cat = getFirstEventCategoryName(event) || "Event";
                const gradient = gradientForCategory(cat);
                const date = event.meta?.event_date || "";
                const time = event.meta?.event_time || "";
                const location = event.meta?.event_location || "";
                const capacity = event.meta?.event_capacity ?? "";
                const price = event.meta?.event_price || "";

                return (
                  <Card key={event.id} className="group glass-effect border border-border/50 hover:border-primary/30 transition-smooth overflow-hidden">
                    <div className={`h-2 bg-gradient-to-r ${gradient}`} />
                    <CardHeader className="relative">
                      <div className="flex justify-between items-start mb-4">
                        <Badge className={`bg-gradient-to-r ${gradient} text-white border-none shadow-lg`}>
                          <Sparkles className="h-3 w-3 mr-1" />
                          {cat}
                        </Badge>
                        <div className="text-right">
                          {price && (
                            <>
                              <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">{price}</div>
                              <div className="text-xs text-muted-foreground">per person</div>
                            </>
                          )}
                        </div>
                      </div>
                      <CardTitle className="text-2xl mb-3 text-foreground group-hover:text-primary transition-smooth">
                        {title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="-mt-4">
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        {date && (
                          <div className="flex items-center text-muted-foreground">
                            <Calendar className="h-4 w-4 mr-2 text-primary" />
                            <span className="text-sm">{date}</span>
                          </div>
                        )}
                        {time && (
                          <div className="flex items-center text-muted-foreground">
                            <Clock className="h-4 w-4 mr-2 text-primary" />
                            <span className="text-sm">{time}</span>
                          </div>
                        )}
                        {location && (
                          <div className="flex items-center text-muted-foreground">
                            <MapPin className="h-4 w-4 mr-2 text-primary" />
                            <span className="text-sm">{location}</span>
                          </div>
                        )}
                        {capacity !== "" && (
                          <div className="flex items-center text-muted-foreground">
                            <Users className="h-4 w-4 mr-2 text-primary" />
                            <span className="text-sm">Max {capacity}</span>
                          </div>
                        )}
                      </div>

                      <Button className={`w-full bg-gradient-to-r ${gradient} hover:opacity-90 text-white shadow-glow rounded-2xl group-hover:scale-[1.02] transition-smooth`}>
                        <Zap className="h-4 w-4 mr-2" />
                        Reserve Your Spot
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        )}

        {/* All Events */}
        {!loading && (
          <>
            <h2 className="text-3xl font-bold mb-8 text-foreground flex items-center gap-2">
              <Calendar className="h-8 w-8 text-primary" />
              All Upcoming Events
            </h2>

            {events.length === 0 ? (
              <div className="text-muted-foreground">No events found.</div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[...featured, ...nonFeatured].map((event) => {
                  const title = decodeEntitiesSafe(event.title?.rendered);
                  const cat = getFirstEventCategoryName(event) || "Event";
                  const gradient = gradientForCategory(cat);
                  const date = event.meta?.event_date || "";
                  const location = event.meta?.event_location || "";
                  const price = event.meta?.event_price || "";
                  const isFeat = isFeatured(event.meta?.event_featured);

                  return (
                    <Card key={event.id} className="group glass-effect border border-border/50 hover:border-primary/30 transition-smooth overflow-hidden">
                      <div className={`h-1 bg-gradient-to-r ${gradient}`} />
                      <CardHeader>
                        <div className="flex justify-between items-start mb-3">
                          <Badge className={`bg-gradient-to-r ${gradient} text-white border-none text-xs`}>
                            {cat}
                          </Badge>
                          {isFeat && (
                            <Badge variant="secondary" className="bg-secondary/10 text-secondary border-secondary/20 text-xs">
                              <Star className="h-3 w-3 mr-1 fill-current" />
                              Featured
                            </Badge>
                          )}
                        </div>
                        <CardTitle className="text-lg text-foreground group-hover:text-primary transition-smooth">
                          {title}
                        </CardTitle>
                      </CardHeader>

                      <CardContent className="-mt-4">
                        <div className="space-y-2 mb-4">
                          {date && (
                            <div className="flex items-center text-sm text-muted-foreground">
                              <Calendar className="h-3 w-3 mr-2 text-primary" />
                              <span>{date}</span>
                            </div>
                          )}
                          {location && (
                            <div className="flex items-center text-sm text-muted-foreground">
                              <MapPin className="h-3 w-3 mr-2 text-primary" />
                              <span>{location}</span>
                            </div>
                          )}
                        </div>

                        <div className="flex justify-between items-center">
                          <div className="text-right">
                            {price && (
                              <>
                                <div className="text-lg font-bold bg-gradient-primary bg-clip-text text-transparent">{price}</div>
                                <div className="text-xs text-muted-foreground">per person</div>
                              </>
                            )}
                          </div>
                          <Button size="sm" variant="outline" className="glass-effect border-primary/20 hover:bg-primary/10 hover:border-primary/40 rounded-xl group-hover:shadow-glow transition-smooth">
                            Learn More
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            )}
          </>
        )}

        {/* CTA */}
        <div className="text-center p-12 mt-16 glass-effect rounded-3xl border border-accent/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-accent opacity-5" />
          <div className="relative">
            <div className="inline-flex items-center gap-2 bg-accent/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-accent/20">
              <Sparkles className="h-4 w-4 text-accent animate-pulse" />
              <span className="text-sm font-medium text-accent">Custom Experiences</span>
            </div>
            <h2 className="text-4xl font-bold mb-6 text-foreground">
              Can&apos;t Find What You&apos;re <span className="bg-gradient-accent bg-clip-text text-transparent">Looking For?</span>
            </h2>
            <p className="mb-8 max-w-2xl mx-auto text-muted-foreground leading-relaxed text-lg">
              We specialize in creating custom projects and services tailored to your interests.
              Let us design the perfect Nigerian event just for you.
            </p>
            <Button size="lg" className="bg-gradient-accent hover:opacity-90 text-white shadow-accent rounded-2xl px-8 py-4 font-medium">
              <Zap className="h-5 w-5 mr-2" />
              Contact Us for Custom Events
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

/* -------------------- Helpers -------------------- */

// Coerce WP meta "featured" values safely
function isFeatured(v: unknown): boolean {
  if (typeof v === "boolean") return v;
  if (typeof v === "number") return v === 1;
  if (typeof v === "string") return v === "1" || v.toLowerCase() === "true";
  return false;
}

// Decode HTML entities (&amp; -> &)
function decodeEntitiesSafe(s?: string): string {
  if (!s) return "";
  const txt = document.createElement("textarea");
  txt.innerHTML = s;
  return txt.value;
}

// Read first Event Category name (requires _embed=1 on fetch)
function getFirstEventCategoryName(event: WpEvent): string | undefined {
  const termGroups = event?._embedded?.["wp:term"];
  if (!Array.isArray(termGroups)) return undefined;
  const allTerms = termGroups.flat().filter((t) => t?.taxonomy === "event_category");
  return allTerms[0]?.name;
}

// Optional: map category → gradient
function gradientForCategory(cat: string): string {
  const map: Record<string, string> = {
    Festival: "from-primary to-primary-glow",
    Cultural: "from-primary to-accent",
    Adventure: "from-accent to-secondary",
    Historical: "from-secondary to-accent",
    Culinary: "from-secondary to-primary-glow",
  };
  return map[cat] || "from-primary to-accent";
}
