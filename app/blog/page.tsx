import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { POSTS } from "@/lib/blog";
import { SITE_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Blog | KALMA POWER",
  description:
    "Guías para empresas sobre plantas eléctricas diésel: cómo elegir, qué revisar antes de cotizar y cómo estimar el costo de un apagón.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog | KALMA POWER",
    description:
      "Guías para empresas sobre plantas eléctricas diésel y continuidad operativa.",
    url: `${SITE_URL}/blog`,
    siteName: "KALMA POWER",
    type: "website",
    locale: "es_MX",
    images: [{ url: POSTS[0].cover, width: 1200, height: 630, alt: POSTS[0].coverAlt }],
  },
};

const fmt = new Intl.DateTimeFormat("es-MX", { dateStyle: "long", timeZone: "UTC" });

export default function BlogIndex() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Blog de KALMA POWER",
    url: `${SITE_URL}/blog`,
    inLanguage: "es-MX",
    publisher: { "@type": "Organization", name: "KALMA POWER", url: SITE_URL },
    blogPost: POSTS.map((p) => ({
      "@type": "BlogPosting",
      headline: p.seoTitle,
      url: `${SITE_URL}/blog/${p.slug}`,
      datePublished: p.datePublished,
    })),
  };

  return (
    <>
      <Header home={false} />
      <main className="pt-[72px]">
        <section className="bg-navy-900 py-16 text-white sm:py-20">
          <div className="container-lun">
            <p className="section-eyebrow !text-lima">Blog</p>
            <h1 className="max-w-3xl text-3xl font-extrabold leading-tight sm:text-5xl">
              Guías para decidir mejor tu respaldo de energía
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-white/80">
              Contenido práctico para equipos de operaciones, mantenimiento, compras y
              dirección que evalúan plantas eléctricas diésel.
            </p>
          </div>
        </section>

        <section className="py-14 sm:py-20">
          <div className="container-lun grid gap-8 md:grid-cols-2">
            {POSTS.map((p) => (
              <article
                key={p.slug}
                className="group flex flex-col overflow-hidden rounded-2xl border border-navy-900/10 bg-white shadow-sm transition hover:shadow-lg"
              >
                <a href={`/blog/${p.slug}`} className="block overflow-hidden">
                  <Image
                    src={p.cover}
                    alt={p.coverAlt}
                    width={1200}
                    height={630}
                    sizes="(min-width: 768px) 560px, 100vw"
                    className="h-auto w-full transition group-hover:scale-[1.02]"
                  />
                </a>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky">
                    {p.category} · {p.readingMinutes} min de lectura
                  </p>
                  <h2 className="mt-3 text-xl font-extrabold leading-snug text-navy-900">
                    <a href={`/blog/${p.slug}`}>{p.title}</a>
                  </h2>
                  <p className="mt-3 text-navy-900/75">{p.excerpt}</p>
                  <p className="mt-4 text-sm text-navy-900/60">
                    Equipo KALMA POWER · {fmt.format(new Date(p.datePublished))}
                  </p>
                  <a
                    href={`/blog/${p.slug}`}
                    className="mt-5 text-sm font-bold text-navy-700 underline decoration-lima-600 decoration-2 underline-offset-4"
                  >
                    Leer artículo
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer home={false} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
