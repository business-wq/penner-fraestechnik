import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  keywords?: string;
}

const SEOHead = ({ title, description, canonical, keywords }: SEOHeadProps) => {
  const location = useLocation();
  const fullCanonical = canonical || `https://www.marklewitz-solar.de${location.pathname}`;

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
    setMeta("og:title", title, true);
    setMeta("og:description", description, true);
    setMeta("og:url", fullCanonical, true);
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);

    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = fullCanonical;
  }, [title, description, fullCanonical, keywords]);

  return null;
};

export default SEOHead;
