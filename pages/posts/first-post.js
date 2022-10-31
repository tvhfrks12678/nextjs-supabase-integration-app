import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';
import Layout from '../../components/layout';
import Alert from '../../components/alert';
import Image from 'next/image';
import profileImage from '../../images/profile.jpeg';

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() => console.log(`script loaded`)}
      />
      <h1>First Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
      <Image src="/favicon.ico" height={144} width={144} alt="Your Name" />
      <Image src={profileImage} height={144} width={144} alt="Your Name" />
      <Alert type={'success'}>
        <div>Alert</div>
      </Alert>
      <button class="bg-indigo-700 font-semibold text-white py-2 px-4 rounded">
        ボタン
      </button>
    </Layout>
  );
}
