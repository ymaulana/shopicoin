import type { NextPage } from "next";
import { useEffect } from "react";
import AOS from "aos";
import Head from "next/head";
import Navbar from "../components/organism/Navbar";
import MainBanner from "../components/organism/MainBanner";
import TransactionStep from "../components/organism/TransactionStep";
import FeaturedGame from "../components/organism/FeaturedGame";
import Reached from "../components/organism/Reached";
import Story from "../components/organism/Story";
import Footer from "../components/organism/Footer";

const Home: NextPage = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      {/* Head (SEO basic) */}
      <Head>
        <title>Shopicoin - Get a New Experience in Gaming</title>
        <meta
          name="description"
          content="Kami menyediakan jutaan cara untuk membantu
players menjadi pemenang sejati"
        />
        <meta
          property="og:title"
          content="Shopicoin - Get a New Experience in Gaming"
        />
        <meta
          property="og:description"
          content="Kami menyediakan jutaan cara untuk membantu
players menjadi pemenang sejati"
        />
        <meta property="og:image" />
        <meta property="og:url" content="https:shopicoin.herokuapp.com" />
      </Head>
      {/* Navbar  */}
      <Navbar />
      {/* Header */}
      <MainBanner />
      {/*  Column - Featured  */}
      <TransactionStep />
      {/*  Column - Featured-game  */}
      <FeaturedGame />
      {/* Reached  */}
      <Reached />
      {/* Story  */}
      <Story />
      {/* Footer */}
      <Footer />
    </>
  );
};

export default Home;
