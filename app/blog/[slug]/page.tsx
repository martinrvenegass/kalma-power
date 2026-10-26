import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PostBody from "@/components/blog/PostBody";
import PostCTA from "@/components/blog/PostCTA";
import { plain } from "@/components/blog/Rich";
import { POSTS, getPost } from "@/lib/blog";
import { SITE_URL } from "@/lib/config";

type Props = { params: { slug: string } };

export const dynamicParams = false;

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getPost(params.slug);
  if (!post) return {};
  const url = `${SITE_URL}/blog/${post.slug}`;
  return {
    title: `${post.seoTitle} | KALMA POWER`,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    authors: [{ name: "Equipo KALMA POWER" }],
    openGraph: {
      title: post.seoTitle,
      description: post.description,
      url,
      siteName: "KALMA POWER",
      type: "article",
      locale: "es_MX",
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified,
      authors: ["Equipo KALMA POWER"],
      images: [{ url: post.cover, width: 1200, height: 630, alt: post.coverAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.seoTitle,
      description: post.description,
      images: [post.cover],
    },
  };
}

const fmt = new Intl.DateTimeFormat("es-MX", { dateStyle: "long", timeZone: "UTC" });

export default function PostPage({ params }: Props) {
  const post = getPost(params.slug);
  if (!post) notFound();
  const related = getPost(post.related);
  const url = `${SITE_URL}/blog/${post.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${url}#article`,
        mainEntityOfPage: url,
        headline: post.seoTitle,
        description: post.description,
        image: `${SITE_URL}${post.cover}`,
        datePublished: post.datePublished,
        dateModified: post.dateModified,
        inLanguage: "es-MX",
        author: { "@type": "Organization", name: "Equipo KALMA POWER", url: SITE_URL },
        publisher: { "@type": "Organization", name: "KALMA POWER", url: SITE_URL },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
          { "@type": "ListItem", position: 3, name: plain(post.title), item: url },
        ],
      },
    ],
  };

  return (
    <>
      <Header home={false} />
      <main className="pt-[72px]">
        <article>
          <header className="bg-navy-900 pb-12 pt-12 text-white sm:pt-16">
            <div className="container-lun max-w-3xl">
              <nav aria-label="Ruta" className="text-sm text-white/60">
                <a href="/" className="hover:text-white">Inicio</a> /{" "}
                <a href="/blog" className="hover:text-white">Blog</a>
              </nav>
              <p className="section-eyebrow mt-6 !text-lima">{post.category}</p>
              <h1 className="text-3xl font-extrabold leading-tight sm:text-[2.5rem]">
                {post.title}
              </h1>
              <p className="mt-5 text-sm text-white/70">
                Por Equipo KALMA POWER · {fmt.format(new Date(post.datePublished))} ·{" "}
                {post.readingMinutes} min de lectura
              </p>
            </div>
          </header>

          <div className="container-lun max-w-3xl py-10 sm:py-14">
            <Image
              src={post.cover}
              alt={post.coverAlt}
              width={1200}
              height={630}
              priority
              sizes="(min-width: 768px) 768px, 100vw"
              className="mb-10 h-auto w-full rounded-2xl"
            />

            <PostBody blocks={post.blocks} />

            <div className="mt-10">
              <PostCTA slug={post.slug} placement="articulo" />
            </div>

            <section className="mt-14 border-t border-navy-900/10 pt-8">
              <h2 className="text-lg font-extrabold text-navy-900">Referencias</h2>
              <ul className="mt-3 list-disc space-y-1.5 pl-6 text-sm text-navy-900/75">
                {post.references.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-navy-900/60">
                Las imágenes son referenciales. Este contenido es informativo: las
                capacidades, características y condiciones de cada equipo se confirman
                en la ficha técnica y en la cotización.
              </p>
            </section>

            {related && (
              <section className="mt-10 rounded-2xl bg-sky-light p-6">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky">
                  Sigue leyendo
                </p>
                <a
                  href={`/blog/${related.slug}`}
                  className="mt-2 block text-lg font-extrabold text-navy-900 hover:text-navy-700"
                >
                  {related.title}
                </a>
                <p className="mt-1 text-sm text-navy-900/70">{related.excerpt}</p>
              </section>
            )}
          </div>
        </article>
      </main>
      <Footer home={false} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
