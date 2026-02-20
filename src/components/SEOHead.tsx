import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  keywords?: string;
  ogImage?: string;
}

const SEOHead = ({ title, description, canonical, keywords, ogImage }: SEOHeadProps) => {
  const location = useLocation();
  const fullCanonical = canonical || `https://www.marklewitz-solar.de${location.pathname}`;
  const image = ogImage || "https://www.marklewitz-solar.de/og-image.jpg";

  useEffect(() => {
    document.title = title;

    const setMeta = (name: string, content: string, property = false) => {
      const attr = property ? "property" : "name";
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.content = content;
    };

    setMeta("description", description);
    if (keywords) setMeta("keywords", keywords);

    // Open Graph
    setMeta("og:title", title, true);
    setMeta("og:description", description, true);
    setMeta("og:url", fullCanonical, true);
    setMeta("og:image", image, true);
    setMeta("og:type", "website", true);
    setMeta("og:locale", "de_DE", true);
    setMeta("og:site_name", "Marklewitz Solar", true);

    // Twitter
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
    setMeta("twitter:image", image);
    setMeta("twitter:card", "summary_large_image");

    // Canonical
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = fullCanonical;
  }, [title, description, fullCanonical, keywords, image]);

  return null;
};

export default SEOHead;
