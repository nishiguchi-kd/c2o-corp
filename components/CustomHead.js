// components/CustomHead.js
import Head from 'next/head';

const CustomHead = ({ title, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width" />
      <meta name="keywords" content="C2O,WEB,メディア,SEO" />
      <meta property="og:url" content="https://c2o.co.jp/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={title} />
      <meta property="og:image" content="https://c2o.co.jp/images/share.png" />
      <meta name="twitter:card" content="summary_large_image" />
      {/* 他の共通メタデータをここに追加 */}
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default CustomHead;