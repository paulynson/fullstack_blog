import Blogger from "../components/Blogger";
// import useAxios from "../utils/hooks/useAxios";
import heroImage from "../assets/hero.jpg";

const HomePage = () => {
  //   const { data, isLoading, error } = useAxios("http://localhost:4003/blogs");
  //   console.log(data.message);
  //   console.log(isLoading);
  //   console.log(error);
  return (
    //   <div> {data.message}</div>
    <main>
      <div className="relative">
        <img
          src={heroImage}
          alt=""
          className="w-full mt-4 mb-8 rounded-2xl opacity-80"
        />
        <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-5xl text-nvy animate-pulse">
          My Blogs
        </p>
      </div>
      <div className="flex flex-col gap-4 iitems-center">
        <Blogger topic="Peaceful details in Nigeria" />
        <Blogger topic="How to build the Internet" />
        <Blogger topic="Changing the idea of deploying Apps on the server" />
        <Blogger topic="Accessing the Internet" />
      </div>
    </main>
  );
};

export default HomePage;
