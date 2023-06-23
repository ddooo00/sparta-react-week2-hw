import React from "react";
import Header from "../components/Header";
import Layout from "../components/Layout";
import Search from "../components/Search";

const Home = () => {
  return (
    <Layout>
      <Header />
      <Search />
    </Layout>
  );
};

export default Home;
