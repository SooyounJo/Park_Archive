import Head from "next/head";

export function Seo({
  title,
  description,
  ogImage,
  canonicalUrl,
  noindex = false,
}) {
  const fullTitle = title ? `${title}` : "parka";
  const desc = description || "parka 웹사이트";

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {noindex ? <meta name="robots" content="noindex,nofollow" /> : null}
      {canonicalUrl ? <link rel="canonical" href={canonicalUrl} /> : null}

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      {ogImage ? <meta property="og:image" content={ogImage} /> : null}
    </Head>
  );
}

