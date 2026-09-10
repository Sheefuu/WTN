import { useEffect, useState } from "react";
import mammoth from "mammoth/mammoth.browser";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

type LegalDocumentProps = {
  title: string;
  documentUrl: string;
};

const LegalDocument = ({ title, documentUrl }: LegalDocumentProps) => {
  const [content, setContent] = useState<string>("");
  const [error, setError] = useState(false);

  useEffect(() => {
    let isCurrent = true;

    const loadDocument = async () => {
      try {
        const response = await fetch(documentUrl);
        const arrayBuffer = await response.arrayBuffer();
        const result = await mammoth.convertToHtml({ arrayBuffer });

        if (isCurrent) {
          setContent(result.value);
        }
      } catch {
        if (isCurrent) {
          setError(true);
        }
      }
    };

    void loadDocument();

    return () => {
      isCurrent = false;
    };
  }, [documentUrl]);

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
            {content ? (
              <div
                className="legal-document-content max-w-none"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            ) : error ? (
              <p className="text-center leading-relaxed">
                This document could not be loaded. Please try again later.
              </p>
            ) : (
              <p className="text-center leading-relaxed">Loading document...</p>
            )}
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LegalDocument;