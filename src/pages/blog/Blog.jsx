import React from "react";
import Header from "../../components/header/Header";
import Search from "../../components/search/Search";
import { useLocation } from "react-router-dom";
import Moment from "react-moment";

const Blog = () => {
  const location = useLocation();
  console.log("location", location.state);

  return (
    <div className="blog">
      <Header />
      <Search />

      <div className="singleBlog mx-2 border rounded-lg mb-4 md:flex flex-col items-center justify-center md:border-none">
        <img
          src="assets/images/blogImage.webp"
          alt=""
          className="border rounded-lg"
        />
        <p className="font-bold px-5 text-xl py-4">{location.state.title}</p>
        <p className="font-bold px-5 text-xl py-2">
          <Moment format="YYYY/MM/DD">{location.state.created}</Moment>
        </p>
        <p className="px-5 text-lg">{location.state.description}</p>
      </div>
    </div>
  );
};

export default Blog;