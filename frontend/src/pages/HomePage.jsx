import Blogger from "../components/Blogger";
// import useAxios from "../utils/hooks/useAxios";

const HomePage = () => {
  //   const { data, isLoading, error } = useAxios("http://localhost:4003/blogs");
  //   console.log(data.message);
  //   console.log(isLoading);
  //   console.log(error);
  return (
    //   <div> {data.message}</div>
    <div className="flex flex-col gap-4 iitems-center">
      <Blogger topic="Peaceful details in Nigeria" />
      <Blogger topic="How to build the Internet" />
      <Blogger topic="Changing the idea of deploying Apps on the server" />
      <Blogger topic="Accessing the Internet" />
    </div>
  );
};

export default HomePage;
