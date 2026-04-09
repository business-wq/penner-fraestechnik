import { Navbar, Footer } from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { blogPosts } from "@/data/blog-posts";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";

const Blog = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <SEOHead
        title="Blog – Photovoltaik & Wärmepumpe | Marklewitz Solar"
        description="Ratgeber und Neuigkeiten rund um Photovoltaik, Wärmepumpen und erneuerbare Energien von Marklewitz Solar."
        canonical="https://www.marklewitz-solar.de/blog"
      />
      <Navbar />
      <main id="main" className="pt-28 pb-20">
        <div className="container mx-auto max-w-4xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Ratgeber
            </span>
            <h1 className="mt-3 font-heading text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
              Blog – Wissen rund um Energie
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Tipps, Ratgeber und Neuigkeiten zu Photovoltaik, Wärmepumpen und erneuerbaren Energien.
            </p>
          </motion.div>

          <div className="mt-12 space-y-8">
            {blogPosts.map((post, i) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group rounded-lg border border-border bg-card p-6 sm:p-8 transition-all hover:shadow-card hover:border-primary/20"
              >
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  {new Date(post.date).toLocaleDateString("de-DE", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </div>
                <h2 className="mt-3 font-heading text-xl font-bold text-foreground sm:text-2xl">
                  <Link to={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  {post.excerpt}
                </p>
                <Link
                  to={`/blog/${post.slug}`}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                >
                  Weiterlesen
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
