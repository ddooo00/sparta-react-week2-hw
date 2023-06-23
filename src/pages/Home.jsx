import React from "react";
import Header from "../components/Header";
import Layout from "../components/Layout";
import Search from "../components/Search";
import List from "../components/List";

const Home = () => {
  return (
    <Layout>
      <Header />
      <Search />
      <List />
    </Layout>
  );
};

export default Home;
