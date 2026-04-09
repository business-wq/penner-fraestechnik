import { Navbar, Footer } from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { blogPosts } from "@/data/blog-posts";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return <Navigate to="/blog" replace />;

  // Simple markdown-like rendering
  const renderContent = (content: string) => {
    return content.split("\n").map((line, i) => {
      const trimmed = line.trim();
      if (!trimmed) return null;
      if (trimmed.startsWith("## "))
        return (
          <h2
            key={i}
            className="mt-10 mb-4 font-heading text-2xl font-bold text-foreground"
          >
            {trimmed.slice(3)}
          </h2>
        );
      if (trimmed.startsWith("- **")) {
        const match = trimmed.match(/^- \*\*(.+?)\*\*:?\s*(.*)$/);
        if (match) {
          return (
            <li key={i} className="ml-4 list-disc text-muted-foreground leading-relaxed">
              <strong className="text-foreground">{match[1]}</strong>
              {match[2] ? `: ${match[2]}` : ""}
            </li>
          );
        }
        return (
          <li key={i} className="ml-4 list-disc text-muted-foreground leading-relaxed">
            {trimmed.slice(2)}
          </li>
        );
      }
      if (trimmed.startsWith("- "))
        return (
          <li key={i} className="ml-4 list-disc text-muted-foreground leading-relaxed">
            {trimmed.slice(2)}
          </li>
        );
      if (trimmed.startsWith("**") && trimmed.endsWith("**"))
        return (
          <p key={i} className="mt-4 font-semibold text-foreground">
            {trimmed.slice(2, -2)}
          </p>
        );
      // Bold inline
      const parts = trimmed.split(/\*\*(.+?)\*\*/g);
      return (
        <p key={i} className="mt-3 text-muted-foreground leading-relaxed">
          {parts.map((part, j) =>
            j % 2 === 1 ? (
              <strong key={j} className="text-foreground">
                {part}
              </strong>
            ) : (
              part
            )
          )}
        </p>
      );
    });
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: "Sven Marklewitz",
    },
    publisher: {
      "@id": "https://www.marklewitz-solar.de/#organization",
    },
    mainEntityOfPage: `https://www.marklewitz-solar.de/blog/${post.slug}`,
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      <SEOHead
        title={post.metaTitle}
        description={post.metaDescription}
        canonical={`https://www.marklewitz-solar.de/blog/${post.slug}`}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Navbar />
      <main id="main" className="pt-28 pb-20">
        <div className="container mx-auto max-w-3xl px-4">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Zurück zum Blog
          </Link>

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6"
          >
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              {new Date(post.date).toLocaleDateString("de-DE", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </div>

            <h1 className="mt-4 font-heading text-3xl font-bold text-foreground md:text-4xl">
              {post.title}
            </h1>

            <div className="mt-8 prose-custom">
              {renderContent(post.content)}
            </div>

            <div className="mt-12 rounded-lg border border-primary/20 bg-primary/5 p-6 text-center">
              <p className="font-heading text-lg font-bold text-foreground">
                Interesse an Photovoltaik oder Wärmepumpe?
              </p>
              <p className="mt-2 text-muted-foreground">
                Wir beraten Sie kostenlos und unverbindlich.
              </p>
              <Button variant="default" size="lg" className="mt-4" asChild>
                <a href="/#kontakt">Jetzt Kontakt aufnehmen</a>
              </Button>
            </div>
          </motion.article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
