import Header from "../../components/header/Header";
import Search from "../../components/search/Search";
import Footer from "../../components/footer/Footer";
import Blogs from "../../components/blogs/Blogs";

const Homepage = () => {
  const data = [
    {
      id: 1,
      title: "Title One",
      date: "10/6/22",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime molliti",
    },
    {
      id: 2,
      title: "Title Two",
      date: "11/6/22",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime molliti",
    },
    {
      id: 3,
      title: "Title Four",
      date: "12/6/22",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime molliti",
    },
    {
      id: 4,
      title: "Title Five",
      date: "13/6/22",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime molliti",
    },
    {
      id: 5,
      title: "Title Five",
      date: "14/6/22",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime molliti",
    },
    {
      id: 6,
      title: "Title Six",
      date: "15/6/22",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime molliti",
    },
    {
      id: 7,
      title: "Title Seven",
      date: "16/6/22",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime molliti",
    },
  ];

  return (
    <>
      <Header />
      <Search />

      <div className="grid gap-y-1 grid-cols-1 md:grid-cols-3 md:px-36">
        <Blogs data={data} />
      </div>

      <Footer />
    </>
  );
};

export default Homepage;
