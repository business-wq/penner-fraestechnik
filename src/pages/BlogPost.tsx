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

  const renderInlineContent = (text: string) => {
    const regex = /\[([^\]]+)\]\(([^)]+)\)|\*\*(.+?)\*\*/g;
    const parts: React.ReactNode[] = [];
    let lastIndex = 0;

    for (const match of text.matchAll(regex)) {
      const [fullMatch, linkLabel, linkHref, boldText] = match;
      const matchIndex = match.index ?? 0;

      if (matchIndex > lastIndex) {
        parts.push(text.slice(lastIndex, matchIndex));
      }

      if (linkLabel && linkHref) {
        const isExternal = linkHref.startsWith("http://") || linkHref.startsWith("https://");
        parts.push(
          <a
            key={`${linkHref}-${matchIndex}`}
            href={linkHref}
            className="font-medium text-primary underline-offset-4 hover:underline"
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
          >
            {linkLabel}
          </a>,
        );
      } else if (boldText) {
        parts.push(
          <strong key={`${boldText}-${matchIndex}`} className="text-foreground">
            {boldText}
          </strong>,
        );
      }

      lastIndex = matchIndex + fullMatch.length;
    }

    if (lastIndex < text.length) {
      parts.push(text.slice(lastIndex));
    }

    return parts;
  };

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
              {match[2] ? <>: {renderInlineContent(match[2])}</> : ""}
            </li>
          );
        }
        return (
          <li key={i} className="ml-4 list-disc text-muted-foreground leading-relaxed">
            {renderInlineContent(trimmed.slice(2))}
          </li>
        );
      }
      if (trimmed.startsWith("- "))
        return (
          <li key={i} className="ml-4 list-disc text-muted-foreground leading-relaxed">
            {renderInlineContent(trimmed.slice(2))}
          </li>
        );
      if (trimmed.startsWith("**") && trimmed.endsWith("**"))
        return (
          <p key={i} className="mt-4 font-semibold text-foreground">
            {trimmed.slice(2, -2)}
          </p>
        );
      return (
        <p key={i} className="mt-3 text-muted-foreground leading-relaxed">
          {renderInlineContent(trimmed)}
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
    image: post.image,
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      <SEOHead
        title={post.metaTitle}
        description={post.metaDescription}
        canonical={`https://www.marklewitz-solar.de/blog/${post.slug}`}
        keywords={post.keywords}
        ogImage={post.image}
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

            {post.image && (
              <div className="mt-8 overflow-hidden rounded-xl border border-border bg-card shadow-card">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-72 w-full object-cover md:h-[26rem]"
                />
              </div>
            )}

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
