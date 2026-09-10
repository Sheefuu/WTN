import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

type LegalDocumentProps = {
  title: string;
  content: string;
};

const LegalDocument = ({ title, content }: LegalDocumentProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="relative overflow-hidden py-12 sm:py-16 lg:py-20">
        <div className="absolute inset-0 geometric-pattern opacity-40" />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <header className="mb-10 text-center sm:mb-14">
            <div className="mb-4 inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              Wellcome to Nigeria Ltd
            </div>
            <h1 className="text-4xl font-bold text-foreground sm:text-5xl">{title}</h1>
          </header>

          <article className="glass-effect rounded-xl border border-border/50 p-6 text-muted-foreground shadow-glow sm:p-10 lg:p-14">
            <div
              className="legal-document-content max-w-none"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LegalDocument;