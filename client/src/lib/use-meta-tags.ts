import { useEffect } from 'react';

interface MetaTags {
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogUrl?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  canonicalUrl?: string;
}

export function useMetaTags(tags: MetaTags) {
  useEffect(() => {
    document.title = tags.title;

    const updateMetaByName = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    const updateMetaByProperty = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    const updateCanonical = (href: string) => {
      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        document.head.appendChild(canonical);
      }
      canonical.setAttribute('href', href);
    };

    updateMetaByName('description', tags.description);
    if (tags.keywords) {
      updateMetaByName('keywords', tags.keywords);
    }

    updateMetaByProperty('og:title', tags.ogTitle || tags.title);
    updateMetaByProperty('og:description', tags.ogDescription || tags.description);
    if (tags.ogUrl) {
      updateMetaByProperty('og:url', tags.ogUrl);
    }

    updateMetaByProperty('twitter:title', tags.twitterTitle || tags.title);
    updateMetaByProperty('twitter:description', tags.twitterDescription || tags.description);
    if (tags.canonicalUrl) {
      updateCanonical(tags.canonicalUrl);
    }
  }, [tags]);
}
