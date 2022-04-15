import Head from "next/head";
import Header from "components/Header";
import Section1 from "components/Section1";
import Features from "components/Features";
import Download from "components/Download";
import FAQ from "components/FAQ";
import Form from "components/Form";
import Joined from 'components/Joined';
import Footer from "components/Footer";

export default function Home() {
  return (
    <div className="container mx-auto px-4 font-Poppins">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Section1 />
      <Features />
      <Download />
      <FAQ />
      <Form />
      <Joined />
      <Footer />
    </div>
  );
}
