// components/CustomHead.js
import Head from 'next/head';

const CustomHead = ({ title, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {/* 他の共通メタデータをここに追加 */}
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default CustomHead;