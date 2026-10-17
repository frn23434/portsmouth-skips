import { Fragment, useEffect } from "react";
import { Link, useRoute } from "wouter";
import { SiWhatsapp } from "react-icons/si";
import Header from "@/components/header";
import Footer from "@/components/footer";
import NotFound from "@/pages/not-found";
import { Button } from "@/components/ui/button";
import { useMetaTags } from "@/lib/use-meta-tags";
import { blogPosts, formatDate, getPost } from "@/lib/blog-posts";

const SITE_BASE_URL = "https://portsmouthskips.co.uk";
const whatsappLink = `https://wa.me/447900717881?text=${encodeURIComponent(
  "Hi, I'd like to enquire about skip hire in Portsmouth.",
)}`;

function renderInline(text: string) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  return parts.map((part, i) => {
    const m = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (!m) return <Fragment key={i}>{part}</Fragment>;
    return (
      <Link key={i} href={m[2]} className="text-primary underline underline-offset-2 hover:text-primary/80">
        {m[1]}
      </Link>
    );
  });
}

export default function BlogPost() {
  const [match, params] = useRoute("/blog/:slug");
  const post = match ? getPost(params.slug) : undefined;

  useMetaTags({
    title: post ? `${post.metaTitle} | Portsmouth Skips` : "Not found",
    description: post?.description ?? "",
    keywords: post?.keywords,
    ogTitle: post?.metaTitle,
    ogDescription: post?.description,
    twitterTitle: post?.metaTitle,
    twitterDescription: post?.description,
    ogType: "article",
    publishedTime: post?.published,
    modifiedTime: post?.updated,
    canonicalUrl: post ? `${SITE_BASE_URL}/blog/${post.slug}` : undefined,
    ogUrl: post ? `${SITE_BASE_URL}/blog/${post.slug}` : undefined,
  });

  useEffect(() => {
    if (!post) return;
    window.scrollTo(0, 0);
    const el = document.createElement("script");
    el.type = "application/ld+json";
    el.text = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Article",
          headline: post.title,
          description: post.description,
          datePublished: post.published,
          dateModified: post.updated,
          mainEntityOfPage: `${SITE_BASE_URL}/blog/${post.slug}`,
          author: { "@type": "Organization", name: "Portsmouth Skips" },
          publisher: { "@type": "Organization", name: "Portsmouth Skips", url: SITE_BASE_URL },
        },
        {
          "@type": "FAQPage",
          mainEntity: post.faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_BASE_URL}/` },
            { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_BASE_URL}/blog` },
            { "@type": "ListItem", position: 3, name: post.title, item: `${SITE_BASE_URL}/blog/${post.slug}` },
          ],
        },
      ],
    });
    document.head.appendChild(el);
    return () => {
      document.head.removeChild(el);
    };
  }, [post]);

  if (!post) return <NotFound />;

  const related = post.related
    .map((slug) => blogPosts.find((p) => p.slug === slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground mb-6">
          <Link href="/" className="hover:text-primary">Home</Link> /{" "}
          <Link href="/blog" className="hover:text-primary">Blog</Link>
        </nav>
        <span className="text-xs font-semibold uppercase tracking-wide text-primary">{post.category}</span>
        <h1 className="text-3xl md:text-4xl font-bold mt-2 mb-4" data-testid="text-post-title">{post.title}</h1>
        <p className="text-sm text-muted-foreground mb-8">
          Updated <time dateTime={post.updated}>{formatDate(post.updated)}</time> · {post.readMinutes} min read
        </p>
        <p className="text-lg text-muted-foreground mb-8">{renderInline(post.intro)}</p>

        {post.content.map((block, i) => {
          switch (block.type) {
            case "h2":
              return <h2 key={i} className="text-2xl font-bold mt-10 mb-3">{block.text}</h2>;
            case "h3":
              return <h3 key={i} className="text-xl font-semibold mt-6 mb-2">{block.text}</h3>;
            case "p":
              return <p key={i} className="mb-4 leading-relaxed">{renderInline(block.text)}</p>;
            case "ul":
              return (
                <ul key={i} className="list-disc pl-6 mb-4 space-y-1">
                  {block.items.map((it, j) => <li key={j}>{renderInline(it)}</li>)}
                </ul>
              );
            case "ol":
              return (
                <ol key={i} className="list-decimal pl-6 mb-4 space-y-1">
                  {block.items.map((it, j) => <li key={j}>{renderInline(it)}</li>)}
                </ol>
              );
            case "callout":
              return (
                <div key={i} className="bg-primary/5 border-l-4 border-primary rounded-r-lg p-4 my-6">
                  {renderInline(block.text)}
                </div>
              );
          }
        })}

        <h2 className="text-2xl font-bold mt-12 mb-4">Frequently asked questions</h2>
        <div className="space-y-4">
          {post.faqs.map((f) => (
            <div key={f.q} className="bg-card border border-border rounded-lg p-4">
              <h3 className="font-semibold mb-1">{f.q}</h3>
              <p className="text-muted-foreground">{f.a}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-green-500 to-green-700 rounded-2xl p-8 text-center text-white mt-12">
          <h2 className="text-2xl font-bold mb-2">Need a skip in Portsmouth?</h2>
          <p className="mb-6 text-green-100">Get a fast, free quote on WhatsApp. See all our <Link href="/#skip-sizes" className="underline">skip sizes</Link>.</p>
          <Button size="lg" className="bg-white text-green-600 hover:bg-green-50" asChild data-testid="button-post-whatsapp">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <SiWhatsapp className="mr-2 h-5 w-5" />
              Message on WhatsApp
            </a>
          </Button>
        </div>

        {related.length > 0 && (
          <aside className="mt-12">
            <h2 className="text-2xl font-bold mb-4">Related guides</h2>
            <ul className="space-y-2">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link href={`/blog/${r.slug}`} className="text-primary underline underline-offset-2">
                    {r.title}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        )}
      </article>
      <Footer />
    </div>
  );
}
