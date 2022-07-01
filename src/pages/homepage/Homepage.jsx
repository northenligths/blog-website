import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Search from "../../components/search/Search";
import axios from "axios";
import { Oval } from "react-loader-spinner";
import Footer from "../../components/footer/Footer";
import Blogs from "../../components/blogs/Blogs";

const Homepage = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchJobs = async () => {
    const url =
      "https://api.adzuna.com/v1/api/jobs/au/search/1?app_id=10b7f966&app_key=9dcbb5915ae132c29dc44579e89efdc5";

    try {
      const response = await axios.get(url);

      setJobs(response.data.results);
      setLoading(false);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <>
      <Header />
      <Search />

      {loading ? (
        <div className="flex justify-center">
          <Oval color="#202942" />
        </div>
      ) : (
        <div className="grid gap-y-1 grid-cols-1 md:grid-cols-3 md:px-36">
          <Blogs jobs={jobs} />
        </div>
      )}

      <Footer />
    </>
  );
};

export default Homepage;
