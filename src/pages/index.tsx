import type { NextPage } from "next";
import HomeLayout from "@containers/home/HomeLayout";
import Layout from "../components/Layout";
import DataProvider from "../containers/home/DataProvider";

const Home: NextPage = () => {
  return (
    <Layout title="Settings">
      {/* data provided by context api */}
      <DataProvider>
      {/* childern of Layout to pass */}
        <HomeLayout />
      </DataProvider>
    </Layout>
  );
};

export default Home;
