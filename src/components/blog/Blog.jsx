import React from "react";
import { BsCalendar3 } from "react-icons/bs";
import { MdKeyboardArrowRight } from "react-icons/md";
import Moment from "react-moment";

const Blog = ({ jobs }) => {
  return (
    <>
      {jobs?.map((job, i) => {
        return (
          <div className="md:flex items-center justify-center ">
            <div className="border rounded-xl mx-2 " key={i}>
              <img
                src="assets/images/blogImage.webp"
                alt=""
                className="blogImage rounded-md"
              />
              <div className="blogContent py-4 pl-4 pr-8">
                <p className="text-xl font-bold leading-8">{job.title}</p>
                <div className="date flex items-center justify-between py-6">
                  <div className="calendar flex items-center gap-3">
                    <BsCalendar3 />{" "}
                    <Moment format="YYYY/MM/DD">{job.created}</Moment>
                  </div>
                  <div className="readLink flex items-center gap-1">
                    Start Reading <MdKeyboardArrowRight className="text-xl" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Blog;
