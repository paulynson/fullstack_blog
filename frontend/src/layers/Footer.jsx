const Footer = () => {
  const footerDate = new Date();
  const date = footerDate.getFullYear();
  return (
    <div className="flex items-center justify-center absolute w-full py-12 bg-nvy mt-6">
      <h1 className="text-center font-bold text-zed">
        Dev~Blogs &copy; {date}
      </h1>
    </div>
  );
};

export default Footer;
