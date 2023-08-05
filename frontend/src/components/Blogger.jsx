import tile from "../assets/created.jpg";

const Blogger = ({ topic }) => {
  return (
    <section className="grid grid-cols-12 gap-4 items-center  py-6 px-4">
      <div className="col-span-4">
        <img src={tile} alt="tile" className="w-[100%]" />
      </div>
      <div className="col-span-8">
        <article>
          <p className="text-2xl font-bold my-3">{topic}</p>
          <p className=" ppx-2 leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            velit dolorem quos sit odio autem, ex officia quod unde magni
            perspiciatis beatae nesciunt voluptatem. Lorem ipsum dolor sit amet
            consectetur adipisicing elit.
          </p>
          <div className="my-5">
            <button className="w-full py-2 px-6 rounded-full hover:bg-zed hover:text-nvy text-nvy shadow-sm font-bold border-2 border-nvy hover:border-zed bg-transparent cursor-pointer">
              Read More
            </button>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Blogger;
