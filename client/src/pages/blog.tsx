import { Link } from "wouter";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { useMetaTags } from "@/lib/use-meta-tags";
import { blogPosts, formatDate } from "@/lib/blog-posts";

const SITE_BASE_URL = "https://portsmouthskips.co.uk";

export default function Blog() {
  useMetaTags({
    title: "Skip Hire Blog | Guides & Advice | Portsmouth Skips",
    description:
      "Practical skip hire guides for Portsmouth: sizes, prices, permits, banned items, heavy waste and house clearances from your local skip hire company.",
    keywords:
      "skip hire blog, skip hire advice Portsmouth, skip hire guides, waste removal tips Portsmouth",
    ogTitle: "Skip Hire Guides & Advice | Portsmouth Skips",
    ogDescription:
      "Practical skip hire guides for Portsmouth: sizes, prices and permits from your local skip hire company.",
    canonicalUrl: `${SITE_BASE_URL}/blog`,
    ogUrl: `${SITE_BASE_URL}/blog`,
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="hero-pattern py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-blog-title">
            Skip Hire Guides &amp; Advice
          </h1>
          <p className="text-lg md:text-xl text-blue-100">
            Everything you need to know about hiring a skip in Portsmouth, from choosing a size to staying on the right side of the rules.
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="bg-card border border-border rounded-xl p-6 flex flex-col hover:shadow-md transition-shadow"
              data-testid={`card-post-${post.slug}`}
            >
              <span className="text-xs font-semibold uppercase tracking-wide text-primary mb-2">
                {post.category}
              </span>
              <h2 className="text-xl font-bold mb-3">
                <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                  {post.title}
                </Link>
              </h2>
              <p className="text-muted-foreground text-sm mb-4 flex-1">{post.description}</p>
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <time dateTime={post.published}>{formatDate(post.published)}</time>
                <span>{post.readMinutes} min read</span>
              </div>
            </article>
          ))}
        </div>

        <p className="text-center text-muted-foreground mt-12">
          Ready to book? Check our <Link href="/#skip-sizes" className="text-primary underline">skip sizes</Link> or head back to the{" "}
          <Link href="/" className="text-primary underline">Portsmouth skip hire homepage</Link>.
        </p>
      </main>
      <Footer />
    </div>
  );
}
