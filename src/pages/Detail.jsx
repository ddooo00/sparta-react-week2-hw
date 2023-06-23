import React from "react";
import Header from "../components/Header";
import Layout from "../components/Layout";
import DetailPage from "../components/DetailPage";

const Home = () => {
  return (
    <Layout>
      <Header />
      <DetailPage />
    </Layout>
  );
};

export default Home;
