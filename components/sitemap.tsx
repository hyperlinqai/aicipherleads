import { motion } from "framer-motion";
import { Activity, ArrowRight, Clock, Globe, RefreshCw } from "lucide-react";
import Head from "next/head";

const SitemapPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const pages = [
    {
      url: "https://aicipherleads.com",
      lastmod: "2025-02-03T17:17:10.736Z",
      changefreq: "daily",
      priority: "0.7",
    },
    {
      url: "https://aicipherleads.com/contact",
      lastmod: "2025-02-03T17:17:11.021Z",
      changefreq: "daily",
      priority: "0.7",
    },
    {
      url: "https://aicipherleads.com/industry/pre-school",
      lastmod: "2025-02-03T17:17:11.021Z",
      changefreq: "daily",
      priority: "0.7",
    },
    {
      url: "https://aicipherleads.com/services/seo",
      lastmod: "2025-02-03T17:17:11.021Z",
      changefreq: "daily",
      priority: "0.7",
    },
  ];

  const formatDate = (isoDate: string) => {
    const date = new Date(isoDate);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <>
      <Head>
        <title>Sitemap - AI Cipher Leads</title>
        <meta
          name="description"
          content="Explore our website structure through the AI Cipher Leads sitemap. Find all important pages and services easily."
        />
        <link rel="canonical" href="https://aicipherleads.com/sitemap" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Sitemap",
            url: "https://aicipherleads.com/sitemap",
            mainEntity: pages.map((page) => ({
              "@type": "SiteNavigationElement",
              name: new URL(page.url).pathname,
              url: page.url,
              lastModified: page.lastmod,
              changeFrequency: page.changefreq,
              priority: page.priority,
            })),
          })}
        </script>
      </Head>

      <motion.section
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="min-h-screen bg-neutral-900 pt-20 relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Website Sitemap
              <motion.span
                className="block mt-4 text-lime-400 text-2xl md:text-3xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Explore Our Digital Structure
              </motion.span>
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Navigate through our comprehensive list of pages and services.
              Discover everything AI Cipher Leads has to offer.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={containerVariants}
          >
            {pages.map((page) => {
              const path = new URL(page.url).pathname;
              const isHome = path === "/";

              return (
                <motion.div
                  key={page.url}
                  variants={itemVariants}
                  className="p-6 rounded-2xl bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 hover:border-lime-400/30 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-lime-400/10 rounded-xl">
                      {isHome ? (
                        <Globe className="w-6 h-6 text-lime-400" />
                      ) : (
                        <ArrowRight className="w-6 h-6 text-lime-400" />
                      )}
                    </div>
                    <div className="flex-1">
                      <a
                        href={page.url}
                        className="text-xl font-semibold text-white hover:text-lime-400 transition-colors"
                      >
                        {isHome
                          ? "Homepage"
                          : path.slice(1).replace(/\//g, " › ")}
                      </a>
                      <div className="mt-4 grid grid-cols-2 gap-4 text-sm text-gray-300">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>Last Updated: {formatDate(page.lastmod)}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <RefreshCw className="w-4 h-4" />
                          <span>Updated {page.changefreq}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Activity className="w-4 h-4" />
                          <span>Priority: {page.priority}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-12 text-center text-gray-400 text-sm"
          >
            <p>
              For our XML sitemap, please visit:{" "}
              <a
                href="/sitemap.xml"
                className="text-lime-400 hover:text-lime-300 underline"
              >
                https://aicipherleads.com/sitemap.xml
              </a>
            </p>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default SitemapPage;
