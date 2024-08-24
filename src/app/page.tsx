import Head from 'next/head';
import ASLConverter from '/Users/sajidchowdhury/Documents/test-to-ASL/text-to-asl-converter/src/app/components/ASLConverter.jsx';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <Head>
        <title>Text to ASL Converter</title>
        <meta name="description" content="Convert text to American Sign Language" />
      </Head>
      <ASLConverter />
    </div>
  );
}
